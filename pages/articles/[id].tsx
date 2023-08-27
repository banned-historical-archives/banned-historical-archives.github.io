import React, {
  useRef,
  useState,
  useEffect,
  ReactElement,
  useMemo,
  useCallback,
} from 'react';
import { diff_match_patch, Diff } from 'diff-match-patch';
import Head from 'next/head';

import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ContentType, Patch, PatchV2 } from '../../types';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../../components/Layout';

import Content from '../../backend/entity/content';
import Article from '../../backend/entity/article';
import Date from '../../backend/entity/date';
import Comment from '../../backend/entity/comment';
import PageEntity from '../../backend/entity/page';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { init } from '../../backend/data-source';
import { DiffViewer } from '../../components/DiffViewer';
import Tags from '../../components/Tags';
import Authors from '../../components/Authors';
import {
  apply_patch_v2,
  bracket_left,
  bracket_right,
  extract_pivots,
  md5,
} from '../../utils';
import ArticleComponent from '../../components/Article';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs-dist/legacy/build/pdf.worker.min.js`;

const commit_hash = process.env.COMMIT_HASH;
const virtual_publication_id = '--preview-patch--';

type PublicationDetails = {
  [key: string]: {
    comments: Comment[];
    contents: Content[];
    page: PageEntity;
  };
};
export async function getStaticPaths() {
  const AppDataSource = await init();
  const articles = await AppDataSource.manager.find(Article, {
    relations: {},
  });
  return {
    paths: articles.map((i) => ({
      params: {
        id: i.id,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const AppDataSource = await init();
  const { id } = context.params as {
    id: string;
  };
  const articleId = id;
  const article = await AppDataSource.manager.findOne(Article, {
    where: {
      id,
    },
    relations: {
      authors: true,
      aliases: true,
      publications: true,
      tags: true,
      dates: true,
    },
  });
  const publication_details: PublicationDetails = {};
  for (const publication of article!.publications) {
    const publicationId = publication.id!;
    const [comments, contents, page] = await Promise.all([
      AppDataSource.manager.find(Comment, {
        where: {
          publicationId,
          articleId,
        },
      }),
      AppDataSource.manager.find(Content, {
        where: {
          publicationId,
          articleId,
        },
      }),
      AppDataSource.manager.findOne(PageEntity, {
        where: {
          publicationId,
          articleId,
        },
      }),
    ]);
    publication_details[publicationId] = {
      comments,
      contents,
      page: page!,
    };
  }
  if (!article || !publication_details) {
    return { notFound: true };
  }
  const r = {
    props: {
      article: JSON.parse(JSON.stringify(article)),
      publication_details: JSON.parse(JSON.stringify(publication_details)),
    },
  };
  return r;
};

enum CompareType {
  none = 'none',
  origin = 'origin',
  originProofread = 'originProofread',
  version = 'version',
}

function join_text(contents: { text: string }[]) {
  let s = '';
  contents.forEach((i) => (s += i.text));
  return s;
}
function date_to_string(date: Date) {
  return [date.year || '', date.month || '', date.day || '']
    .filter((j) => j)
    .join('.');
}

enum CompareMode {
  line = '逐行对比',
  literal = '逐字对比',
  description_and_comments = '描述和注释',
}

export default function ArticleViewer({
  article,
  publication_details,
}: {
  article: Article;
  publication_details: PublicationDetails;
}) {
  const id = article.id;
  const patchWrap = useRef<
    | {
        commitHash: string;
        articleId: string;
        publicationId: string;
        patch: Patch | PatchV2;
      }
    | undefined
  >();

  const [previewScale, setPreviewScale] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [compareType, setCompareType] = useState<CompareType>(CompareType.none);
  const [comparePublication, setComparePublication] = useState<string>(
    article.publications[article.publications.length - 1].id,
  );
  const [compareMode, setCompareMode] = useState(CompareMode.line);
  const [selectedPublication, setSelectedPublication] = useState<string>(
    article.publications[0].id,
  );

  const addOCRComparisonPublicationV1 = useCallback(
    (publicationId: string, patch: Patch, article: Article) => {
      if (publication_details[virtual_publication_id]) {
        return;
      }
      article.publications.push({
        ...article.publications.find((i) => i.id === publicationId)!,
        id: virtual_publication_id,
        name: '#OCR补丁预览#',
      });
      const { page, comments, contents } = publication_details[publicationId];
      const d = new diff_match_patch();
      const patched_contents = contents.map((i) => ({
        ...i,
        id: Math.random().toString(),
      }));
      const patched_comments = comments.map((i) => ({
        ...i,
        id: Math.random().toString(),
      }));
      contents
        .sort((a, b) => a.index - b.index)
        .forEach((content, idx) => {
          const text_arr = Array.from(content.text);
          comments
            .filter(
              (i) => i.part_index === content.index || i.part_index === -1,
            )
            .sort((a, b) => b.index - a.index)
            .forEach((i) => {
              if (
                patch.comments[i.index] ||
                (i.index === -1 && patch.description)
              ) {
                const diff = new diff_match_patch().diff_fromDelta(
                  i.text,
                  patch.comments[i.index] || patch.description,
                );
                const new_text = diff
                  .filter((i) => i[0] !== -1)
                  .map((i) => i[1])
                  .join('');
                const x = patched_comments.find((h) => h.index === i.index)!;
                if (x) x.text = new_text;
              }

              if (i.index !== -1)
                text_arr.splice(
                  i.offset,
                  0,
                  `${bracket_left}${i.index}${bracket_right}`,
                );
            });

          if (!patch.parts[content.index]) {
            return;
          }

          const origin_text = text_arr.join('');
          const diff = d.diff_fromDelta(origin_text, patch.parts[idx]);
          const new_text = diff
            .filter((i) => i[0] !== -1)
            .map((i) => i[1])
            .join('');
          const [pivots, pure_text] = extract_pivots(new_text, idx);
          pivots.forEach((x) => {
            const t = patched_comments.find((i) => x.index === i.index)!;
            t.offset = x.offset;
            t.part_index = x.part_idx;
          });
          patched_contents[idx].text = pure_text;
        });
      publication_details[virtual_publication_id] = {
        page,
        comments: patched_comments,
        contents: patched_contents,
      };
    },
    [publication_details],
  );

  const addOCRComparisonPublicationV2 = useCallback(
    (publicationId: string, patch: PatchV2, article: Article) => {
      if (publication_details[virtual_publication_id]) {
        delete publication_details[virtual_publication_id];
        article.publications = article.publications.filter(
          (i) => i.id !== virtual_publication_id,
        );
      }
      const publication = {
        ...article.publications.find((i) => i.id === publicationId)!,
        id: virtual_publication_id,
        name: '#OCR补丁预览#',
      };
      article.publications.push(publication);
      const { page, comments, contents } = publication_details[publicationId];

      const patched_article = apply_patch_v2(
        {
          title: article.title,
          authors: article.authors.map((i) => i.name),
          dates: [],
          is_range_date: false,
          parts: contents.map((i) => ({ type: i.type, text: i.text })),
          page_start: page.start,
          page_end: page.end,
          description: comments.find((i) => i.part_index === -1)?.text || '',
          comments: comments
            .filter((i) => i.part_index !== -1)
            .map((i) => i.text),
          comment_pivots: comments
            .filter((i) => i.part_index !== -1 && i.part_index !== -99)
            .map((i) => ({
              part_idx: i.part_index,
              index: i.index,
              offset: i.offset,
            })),
        },
        patch,
      );
      publication_details[virtual_publication_id] = {
        page,
        comments: [
          ...patched_article.comments.map((i, comment_idx) => {
            const pivot = patched_article.comment_pivots.find(
              (j) => j.index === comment_idx + 1,
            );
            return {
              id: Math.random().toString(),
              publicationId,
              articleId: article.id,
              part_index: pivot ? pivot.part_idx : -99,
              offset: pivot ? pivot.offset : -99,
              index: comment_idx + 1,
              article,
              publication,
              text: i,
            };
          }),
          ...(patched_article.description
            ? [
                {
                  id: Math.random().toString(),
                  publicationId,
                  articleId: article.id,
                  part_index: -1,
                  article,
                  publication,
                  index: -1,
                  text: patched_article.description,
                  offset: -1,
                },
              ]
            : []),
        ],
        contents: patched_article.parts.map((i, idx) => ({
          ...i,
          id: Math.random().toString(),
          index: idx,
          publicationId,
          articleId: article.id,
          article,
          publication,
        })),
      };
    },
    [publication_details],
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('publication_id')) {
      setSelectedPublication(params.get('publication_id')!);
    }
    patchWrap.current = params.get('patch')
      ? JSON.parse(decodeURIComponent(params.get('patch')!))
      : undefined;
    if (patchWrap.current) {
      const patch = patchWrap.current ? patchWrap.current.patch! : undefined;
      if (patch && typeof window !== 'undefined') {
        if ((patch as PatchV2).version === 2) {
          addOCRComparisonPublicationV2(
            patchWrap.current!.publicationId,
            patch as PatchV2,
            article,
          );
        } else {
          addOCRComparisonPublicationV1(
            patchWrap.current!.publicationId,
            patch as Patch,
            article,
          );
        }
        setCompareType(CompareType.version);
        setComparePublication(virtual_publication_id);
        setSelectedPublication(patchWrap.current!.publicationId);
      }
    }
  }, []);

  const article_diff: Diff[][] | undefined = useMemo(() => {
    if (
      compareType !== CompareType.version ||
      !article ||
      !(typeof window !== 'undefined')
    )
      return;
    let comments_a: { text: string; index: number }[] = publication_details[
      selectedPublication
    ].comments
      .sort((a, b) => (a.index > b.index ? 1 : -1))
      .filter((i) => i.index !== -1);
    let comments_b: { text: string; index: number }[] = publication_details[
      comparePublication!
    ].comments
      .sort((a, b) => (a.index > b.index ? 1 : -1))
      .filter((i) => i.index !== -1);
    let contents_a: { text: string }[] = publication_details[
      selectedPublication
    ].contents.sort((a, b) => (a.index > b.index ? 1 : -1));
    let contents_b: { text: string }[] = publication_details[
      comparePublication!
    ].contents.sort((a, b) => (a.index > b.index ? 1 : -1));
    if (compareMode === CompareMode.literal) {
      contents_a = [{ text: join_text(contents_a) }];
      contents_b = [{ text: join_text(contents_b) }];
      return [
        new diff_match_patch().diff_main(
          join_text(contents_a),
          join_text(contents_b),
        ),
      ];
    } else if (compareMode === CompareMode.description_and_comments) {
      const max_n_comment = Math.max(comments_a.length, comments_b.length);
      return [
        new diff_match_patch().diff_main(
          publication_details[selectedPublication].comments.find(
            (i) => i.index === -1,
          )?.text || '',
          publication_details[comparePublication].comments.find(
            (i) => i.index === -1,
          )?.text || '',
        ),
        ...new Array(max_n_comment)
          .fill(0)
          .map((x, p) =>
            new diff_match_patch().diff_main(
              comments_a[p] ? comments_a[p].text : '',
              comments_b[p] ? comments_b[p].text : '',
            ),
          ),
      ];
    }
    const max_len = Math.max(contents_a.length, contents_b.length);

    let i = 0;
    const res: Diff[][] = [];
    while (i < max_len) {
      const a = contents_a[i] ? contents_a[i].text : '';
      const b = contents_b[i] ? contents_b[i].text : '';
      res.push(new diff_match_patch().diff_main(a, b));
      ++i;
    }
    return res;
  }, [
    compareType,
    compareMode,
    publication_details,
    comparePublication,
    selectedPublication,
    article,
  ]);
  const diff_id: string | undefined = useMemo(() => {
    if (compareType !== CompareType.version || !article) return;
    return Math.random().toString();
  }, [
    compareType,
    compareMode,
    publication_details,
    comparePublication,
    selectedPublication,
    article,
  ]);

  const showCompareMenu = !!anchorEl;

  const isLocalhost =
    ((global || (window as any))['location'] as any)?.hostname === 'localhost';

  const publication = article.publications.find(
    (i) => i.id === selectedPublication,
  )!;

  const { contents, comments, page } = publication_details[selectedPublication];
  const selectedPublicationName = article.publications.find(
    (i) => i.id === selectedPublication,
  )?.name;

  const compare_elements: ReactElement[] = [];
  compare_elements.push(
    <Stack
      sx={{
        flex: 1,
        overflowY: 'scroll',
        p: 1,
      }}
      key="version_a"
    >
      <ArticleComponent
        article={article}
        publicationId={selectedPublication}
        publicationName={selectedPublicationName}
        comments={comments}
        contents={contents}
        patchable={compareType === CompareType.originProofread}
      />
    </Stack>,
  );
  if (
    compareType === CompareType.origin ||
    compareType === CompareType.originProofread
  ) {
    compare_elements.push(
      <Stack key="origin" sx={{ flex: 1, overflowY: 'scroll' }}>
        <Stack
          direction="row"
          spacing="10px"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1,
            opacity: 0.7,
          }}
        >
          <Button
            onClick={() => setPreviewScale(previewScale + 0.1)}
            variant="contained"
            sx={{
              borderRadius: '100%',
              width: '50px',
              minWidth: '50px',
              height: '50px',
            }}
          >
            +
          </Button>
          <Button
            onClick={() => setPreviewScale(previewScale - 0.1)}
            variant="contained"
            sx={{
              borderRadius: '100%',
              width: '50px',
              minWidth: '50px',
              height: '50px',
            }}
          >
            -
          </Button>
        </Stack>
        {publication.type !== 'db' ? (
          publication.type === 'pdf' ? (
            <>
              <Typography variant="subtitle1">
                来源文件(页码{page.start}-{page.end})
                <a href={publication.files} target="__blank">
                  [下载]
                </a>
              </Typography>
              <Document
                file={
                  isLocalhost
                    ? publication.files
                        .replace(
                          'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-',
                          '/',
                        )
                        .replace('/main/', '/')
                    : publication.files
                }
                options={{
                  cMapUrl: `/pdfjs-dist/cmaps/`,
                  cMapPacked: true,
                }}
              >
                {new Array(page.end - page.start + 1).fill(0).map((i, idx) => (
                  <Page
                    pageNumber={idx + page.start}
                    key={idx}
                    width={500 * previewScale}
                  />
                ))}
              </Document>
            </>
          ) : publication.type === 'img' ? (
            publication.files
              .split(',')
              .filter((i, idx) => idx + 1 >= page.start && idx + 1 <= page.end)
              .map((f) => (
                <img alt="" key={f} src={f} width={previewScale * 500} />
              ))
          ) : (
            <>未知类型</>
          )
        ) : (
          '无法预览（来自数据库文件）'
        )}
      </Stack>,
    );
  } else if (compareType === CompareType.version) {
    compare_elements.push(
      <Stack key="version_b" sx={{ flex: 1 }}>
        <FormControl>
          <InputLabel>对比目标</InputLabel>
          <Select
            size="small"
            value={comparePublication}
            input={<OutlinedInput label="对比目标" />}
            onChange={(e) => {
              setComparePublication(e.target.value);
            }}
          >
            {article.publications.map((i) => (
              <MenuItem key={i.id} value={i.id}>
                {i.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack
          sx={{
            overflowY: 'scroll',
          }}
        >
          <ArticleComponent
            article={article}
            publicationId={comparePublication}
            comments={publication_details[comparePublication!]!.comments}
            contents={publication_details[comparePublication!]!.contents}
          />
        </Stack>
      </Stack>,
      <Stack key="result" sx={{ flex: 1 }}>
        <FormControl>
          <InputLabel>对比模式</InputLabel>
          <Select
            size="small"
            value={compareMode}
            input={<OutlinedInput label="对比模式" />}
            onChange={(e) => {
              setCompareMode(e.target.value as CompareMode);
            }}
          >
            <MenuItem value={CompareMode.line}>{CompareMode.line}</MenuItem>
            <MenuItem value={CompareMode.literal}>
              {CompareMode.literal}
            </MenuItem>
            <MenuItem value={CompareMode.description_and_comments}>
              {CompareMode.description_and_comments}
            </MenuItem>
          </Select>
        </FormControl>
        <Stack sx={{ overflowY: 'scroll' }}>
          <DiffViewer diff={article_diff} key={diff_id} />
        </Stack>
      </Stack>,
    );
  }

  const details = (
    <>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1">作者：</Typography>
          <Stack direction="row" sx={{ overflowX: 'scroll', flex: 1 }}>
            <Authors authors={article.authors} />
          </Stack>
          {article.publications.map((i) => (
            <img
              alt=""
              style={{ cursor: 'pointer' }}
              key={i.id}
              onClick={() =>
                window.open(
                  `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues?q=+${encodeURIComponent(
                    `is:pr "${article.id}" "${i.id}"`,
                  )}+`,
                  '_blank',
                )
              }
              src={`https://img.shields.io/github/issues-search/banned-historical-archives/banned-historical-archives.github.io?style=for-the-badge&color=%23cc0000&label=%E6%A0%A1%E5%AF%B9%E8%AE%B0%E5%BD%95&query=${encodeURIComponent(
                `is:pr "${article.id}" "${i.id}"`,
              )}`}
            />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
          时间：
          {article.is_range_date
            ? `${date_to_string(article.dates[0])}-${date_to_string(
                article.dates[1],
              )}`
            : article.dates.map((i) => date_to_string(i)).join(',')}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack direction="row" alignItems="center">
          <Typography variant="body1">标签：</Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ flex: 1, overflowX: 'scroll' }}
          >
            <Tags tags={article.tags} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body1">选择来源：</Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flex: 1, overflowX: 'scroll' }}
          >
            {article.publications.map((i) => (
              <Chip
                key={i.id}
                label={i.name}
                variant={selectedPublication === i.id ? 'filled' : 'outlined'}
                color={selectedPublication === i.id ? 'primary' : 'default'}
                onClick={(e) => {
                  setSelectedPublication(i.id);
                }}
              />
            ))}
          </Stack>

          <Button
            variant="outlined"
            aria-controls={showCompareMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            size="small"
            aria-expanded={showCompareMenu ? 'true' : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            对比
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={showCompareMenu}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onClick={() => {
                setCompareType(CompareType.origin);
                setAnchorEl(null);
              }}
            >
              对比原始文件
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCompareType(CompareType.originProofread);
                setAnchorEl(null);
              }}
            >
              对比原始文件并校对
            </MenuItem>
            <MenuItem
              onClick={() => {
                setComparePublication(
                  article.publications.length === 1
                    ? article.publications[0].id
                    : article.publications.find((i) => i.id !== publication.id)!
                        .id,
                );
                setCompareType(CompareType.version);
                setAnchorEl(null);
              }}
            >
              对比不同来源解析后的文本
            </MenuItem>
            <MenuItem
              onClick={() => {
                let str = prompt('导入代码') || '';
                str = str.replace(/^\{OCR补丁\}/, '');
                str = str.substr(0, str.lastIndexOf('}') + 1);
                console.log(str);
                try {
                  const patchWrap = JSON.parse(str);
                  if (patchWrap.patch.version !== 2) {
                    addOCRComparisonPublicationV1(
                      patchWrap.publicationId,
                      patchWrap.patch,
                      article,
                    );
                  } else {
                    addOCRComparisonPublicationV2(
                      patchWrap.publicationId,
                      patchWrap.patch,
                      article,
                    );
                  }
                  setComparePublication(virtual_publication_id);
                  setSelectedPublication(patchWrap.publicationId);
                  setCompareType(CompareType.version);
                  setAnchorEl(null);
                } catch (e) {
                  alert('解析错误');
                }
              }}
            >
              导入代码对比OCR校对结果
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCompareType(CompareType.none);
                setAnchorEl(null);
              }}
            >
              取消
            </MenuItem>
          </Menu>
        </Stack>
      </Grid>
    </>
  );

  return (
    <>
      <Stack
        sx={{
          height: '100%',
          boxSizing: 'border-box',
          background: 'white',
          zIndex: 1,
          top: 0,
          left: 0,
        }}
        pb={0}
      >
        <Grid
          container
          alignItems="center"
          sx={{ pt: 2, pl: 2, pr: 2 }}
          spacing={2}
        >
          <Grid item xs={10} md={6}>
            <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
              标题：
              {article.title}
              {article.aliases.length
                ? `(别名:${article.aliases.map((x) => x.name).join(',')})`
                : ''}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: { md: 'none', xs: 'flex' } }}>
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? '隐藏' : '展开'}
            </Button>
          </Grid>
          {showMore ? details : null}
        </Grid>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ flex: 1, overflow: 'auto', p: 2 }}
        >
          {compare_elements}
        </Stack>
      </Stack>
      <Head>
        <title>
          {article.title} - 和谐历史档案馆 Banned Historical Archives
        </title>
      </Head>
    </>
  );
}

ArticleViewer.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
