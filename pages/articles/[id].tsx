import React, {
  useRef,
  useState,
  useEffect,
  ReactElement,
  useMemo,
} from 'react';
import { diff_match_patch, Diff } from 'diff-match-patch';
import Head from 'next/head';
import Popover from '@mui/material/Popover';

import Select, { SelectChangeEvent } from '@mui/material/Select';
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
import TextField from '@mui/material/TextField';
import { ContentType, Patch } from '../../types';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../../components/Layout';

import Content from '../../backend/entity/content';
import Article from '../../backend/entity/article';
import Date from '../../backend/entity/date';
import Comment from '../../backend/entity/comment';
import PageEntity from '../../backend/entity/page';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';
import { init } from '../../backend/data-source';
import { DiffViewer } from '../../components/DiffViewer';
import Tags from '../../components/Tags';
import Authors from '../../components/Authors';
import { bracket_left, bracket_right, extract_pivots, md5 } from '../../utils';

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
      publications: true,
      tags: true,
      dates: true,
    },
  });
  const publication_details: PublicationDetails = {};
  for (const publication of article!.publications) {
    const publicationId = publication.id!;
    const comments = await AppDataSource.manager.find(Comment, {
      where: {
        publicationId,
        articleId,
      },
    });
    const contents = await AppDataSource.manager.find(Content, {
      where: {
        publicationId,
        articleId,
      },
    });
    const page = (await AppDataSource.manager.findOne(PageEntity, {
      where: {
        publicationId,
        articleId,
      },
    }))!;
    publication_details[publicationId] = {
      comments,
      contents,
      page,
    };
  }
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
      publication_details: JSON.parse(JSON.stringify(publication_details)),
    },
  };
};

enum CompareType {
  none = 'none',
  origin = 'origin',
  version = 'version',
}

function ArticleComponent({
  article,
  comments,
  patchBtn,
  patchMode,
  contents,
  setPatchMode,
  publicationId,
  publicationName,
}: {
  publicationName?: string;
  publicationId: string;
  patchBtn?: boolean;
  patchMode?: boolean;
  setPatchMode?: Function;
  article: Article;
  comments: Comment[];
  contents: Content[];
}) {
  const [popoverContent, setPopoverContent] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const changes = useRef<{
    parts: { [idx: string]: string };
    comments: { [idx: string]: string };
    description: string;
  }>({
    parts: {},
    comments: {},
    description: '',
  });
  useEffect(() => {
    changes.current!.parts = {};
    changes.current!.comments = {};
    changes.current!.description = '';
  }, [article, patchMode]);
  const description = comments.find((i) => i.index === -1)?.text;
  const sorted_contents = contents.sort((a, b) => (a.index > b.index ? 1 : -1));
  const sorted_comments = comments.sort((a, b) => a.index - b.index);

  const contentsComponent = sorted_contents.map((part) => {
    const part_comments = sorted_comments.filter(
      (i) => i.part_index === part.index,
    );
    let text = part.text;
    let t = 0;
    const texts: string[] = [];
    if (part_comments.length) {
      for (const part_comment of part_comments) {
        const p = text.substr(t, part_comment.offset - t);
        texts.push(p);
        t += p.length;
      }
      if (t < text.length) {
        texts.push(text.substr(t));
      }
    } else {
      texts.push(text);
    }
    const content: (ReactElement | string)[] = [];
    texts.forEach((text, idx) => {
      content.push(<span key={`${md5(text)}-${idx}`}>{text}</span>);
      if (part_comments.length) {
        const comment_idx = part_comments.shift()!.index;
        content.push(
          <a
            key={Math.random()}
            href={`#comment${comment_idx}`}
            style={{ userSelect: 'none' }}
          >
            {bracket_left}
            {comment_idx}
            {bracket_right}
          </a>,
        );
      }
    });
    const key = part.id;
    if (part.type === ContentType.title) {
      return (
        <Typography
          key={key}
          variant="h5"
          sx={{ textAlign: 'center', margin: 4 }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.appellation) {
      return (
        <Typography key={key} variant="body1" sx={{ margin: 0.5 }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subdate) {
      return (
        <Typography key={key} variant="subtitle1" sx={{ textAlign: 'center' }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subtitle) {
      return (
        <Typography key={key} variant="subtitle1" sx={{ textAlign: 'center' }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.paragraph) {
      return (
        <Typography
          key={key}
          variant="body1"
          sx={{ textIndent: '2em', margin: 0.5 }}
        >
          {content}
        </Typography>
      );
    }
  });
  const descriptionComponent = description ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        描述
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </>
  ) : null;
  const commentsComponent = sorted_comments.filter((i) => i.index !== -1)
    .length ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        注释
      </Typography>
      {sorted_comments
        .filter((i) => i.index !== -1)
        .map((i) => (
          <Typography id={`comment${i.index}`} key={i.id} variant="body1">
            <span style={{ userSelect: 'none' }}>
              {bracket_left}
              {i.index}
              {bracket_right}
            </span>
            <span>{i.text}</span>
          </Typography>
        ))}
    </>
  ) : null;

  return (
    <>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Typography
          sx={{ p: 2, width: 200, overflow: 'scroll', userSelect: 'all' }}
        >
          {popoverContent}
        </Typography>
      </Popover>
      {patchBtn ? (
        <Stack sx={{ mb: 1 }} spacing={1} direction="row">
          <Button
            variant="outlined"
            size="small"
            onClick={() => setPatchMode!(!patchMode)}
          >
            {patchMode ? '阅读模式' : '校对模式'}
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() =>
              window.open(
                'https://github.com/banned-historical-archives/banned-historical-archives.github.io/wiki/%E5%A6%82%E4%BD%95%E8%B4%A1%E7%8C%AE%E4%B8%8E%E6%A0%A1%E5%AF%B9%E6%96%87%E7%A8%BF',
                '_blank',
              )
            }
          >
            校对注意事项
          </Button>
        </Stack>
      ) : null}
      {patchMode ? (
        <>
          {sorted_contents.map((content, idx) => {
            let text_arr = Array.from(content.text);
            sorted_comments
              .filter((i) => i.part_index === idx)
              .forEach((i) =>
                text_arr.splice(
                  i.offset,
                  0,
                  `${bracket_left}${i.index}${bracket_right}`,
                ),
              );
            const text = text_arr.join('');
            return (
              <TextField
                key={content.id}
                onChange={(e) => {
                  const diff = new diff_match_patch().diff_main(
                    text,
                    e.target.value,
                  );
                  if (diff.length === 1) {
                    delete changes.current.parts[idx];
                  } else {
                    changes.current.parts[idx] =
                      new diff_match_patch().diff_toDelta(diff);
                  }
                }}
                defaultValue={text}
                multiline
              />
            );
          })}
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            描述
          </Typography>
          {sorted_comments
            .filter((i) => i.index === -1)
            .map((comment, idx) => {
              return (
                <TextField
                  key={comment.id}
                  defaultValue={comment.text}
                  multiline
                  onChange={(e) => {
                    const diff = new diff_match_patch().diff_main(
                      comment.text,
                      e.target.value,
                    );
                    if (diff.length === 1) {
                      changes.current.description = '';
                    } else {
                      changes.current.description =
                        new diff_match_patch().diff_toDelta(diff);
                    }
                  }}
                />
              );
            })}
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            注释
          </Typography>
          {sorted_comments
            .filter((i) => i.index !== -1)
            .map((comment, idx) => {
              return (
                <Stack direction="row" key={comment.id}>
                  <Typography>
                    {bracket_left}
                    {comment.index}
                    {bracket_right}
                  </Typography>
                  <TextField
                    defaultValue={comment.text}
                    multiline
                    sx={{ flex: 1 }}
                    onChange={(e) => {
                      const diff = new diff_match_patch().diff_main(
                        comment.text,
                        e.target.value,
                      );
                      if (diff.length === 1) {
                        delete changes.current.comments[comment.index];
                      } else {
                        changes.current.comments[comment.index] =
                          new diff_match_patch().diff_toDelta(diff);
                      }
                    }}
                  />
                </Stack>
              );
            })}
          <Stack spacing={1}>
            <Button
              variant="contained"
              size="small"
              sx={{ width: 80, mt: 1 }}
              onClick={() => {
                const params = JSON.stringify({
                  articleId: article.id,
                  publicationId: publicationId,
                  commitHash: commit_hash,
                  patch: changes.current,
                });
                const url = `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues/new?body=${encodeURIComponent(`{OCR补丁}
${params}
预览：https://banned-historical-archives.github.io/articles/${
                  article.id
                }?patch=${encodeURIComponent(
                  params,
                )}`)}&title=${encodeURIComponent(
                  `[OCR patch]${article.title}[${publicationName}]`,
                )}`;
                window.open(url, '_blank');
              }}
            >
              提交变更
            </Button>
            <Typography>
              如果出现 Your request URL is too long 的错误，请点击
              <Button
                size="small"
                onClick={(e) => {
                  const params = JSON.stringify({
                    articleId: article.id,
                    publicationId: publicationId,
                    commitHash: commit_hash,
                    patch: changes.current,
                  });
                  const text = `{OCR补丁}
${params}
请复制以上代码在对比选项中粘贴进行预览：https://banned-historical-archives.github.io/articles/${article.id}`;
                  navigator.clipboard.writeText(text);
                  const url = `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues/new?title=${encodeURIComponent(
                    `[OCR patch]${article.title}[${publicationName}]`,
                  )}`;
                  window.open(url, '_blank');
                  setPopoverContent(text);
                  setAnchorEl(e.currentTarget);
                }}
              >
                复制代码并跳转
              </Button>
              ，粘贴代码再提交。
            </Typography>
            <Typography>
              如果核对无误也可以提交，使其他人知道此文稿已经被校对（可多次提交，表示多次核对）
            </Typography>
          </Stack>
        </>
      ) : (
        <>
          {contentsComponent}
          {descriptionComponent}
          {commentsComponent}
        </>
      )}
    </>
  );
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
  const [patchMode, setPatchMode] = useState(false);
  const patchWrap = useRef<
    | {
        commitHash: string;
        articleId: string;
        publicationId: string;
        patch: Patch;
      }
    | undefined
  >();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [compareType, setCompareType] = useState<CompareType>(CompareType.none);
  const [comparePublication, setComparePublication] = useState<string>(
    article.publications[article.publications.length - 1].id,
  );
  const [compareMode, setCompareMode] = useState(CompareMode.line);
  const [selectedPublication, setSelectedPublication] = useState<string>(
    article.publications[0].id,
  );

  function addOCRComparisonPublication(
    publicationId: string,
    patch: Patch,
    article: Article,
  ) {
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
          .filter((i) => i.part_index === content.index || i.part_index === -1)
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
  }

  useEffect(() => {
    patchWrap.current = location.search.startsWith('?patch=')
      ? JSON.parse(decodeURIComponent(location.search.split('=')[1]))
      : undefined;
    if (patchWrap.current) {
      const patch = patchWrap.current ? patchWrap.current.patch! : undefined;
      if (patch && typeof window !== 'undefined') {
        addOCRComparisonPublication(
          patchWrap.current!.publicationId,
          patch,
          article,
        );
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
        patchMode={patchMode}
        setPatchMode={setPatchMode}
        article={article}
        publicationId={selectedPublication}
        publicationName={selectedPublicationName}
        comments={comments}
        contents={contents}
        patchBtn={compareType === CompareType.origin}
      />
    </Stack>,
  );
  if (compareType === CompareType.origin) {
    compare_elements.push(
      <Stack key="origin" sx={{ flex: 1, overflowY: 'scroll' }}>
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
                file={publication.files}
                options={{
                  cMapUrl: `/pdfjs-dist/cmaps/`,
                  cMapPacked: true,
                }}
              >
                {new Array(page.end - page.start + 1).fill(0).map((i, idx) => (
                  <Page pageNumber={idx + page.start} key={idx} />
                ))}
              </Document>
            </>
          ) : publication.type === 'img' ? (
            publication.files
              .split(',')
              .filter((i, idx) => idx + 1 >= page.start && idx + 1 <= page.end)
              .map((f) => <img key={f} src={f} />)
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
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
              标题：
              {article.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">作者：</Typography>
              <Stack direction="row" sx={{ overflowX: 'scroll', flex: 1 }}>
                <Authors authors={article.authors} />
              </Stack>
              {article.publications.map((i) => (
                <img
                  style={{ cursor: 'pointer' }}
                  key={i.id}
                  onClick={() =>
                    window.open(
                      `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues?q=+${encodeURIComponent(
                        `is:issue [OCR patch]${article.title}[${i.name}]`,
                      )}+`,
                      '_blank',
                    )
                  }
                  src={`https://img.shields.io/github/issues-search/banned-historical-archives/banned-historical-archives.github.io?style=for-the-badge&color=%23cc0000&label=%E6%A0%A1%E5%AF%B9%E8%AE%B0%E5%BD%95&query=${encodeURIComponent(
                    `is:issue [OCR patch]${article.title}[${i.name}]`,
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
                    variant={
                      selectedPublication === i.id ? 'filled' : 'outlined'
                    }
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
                    setComparePublication(
                      article.publications.length === 1
                        ? article.publications[0].id
                        : article.publications.find(
                            (i) => i.id !== publication.id,
                          )!.id,
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

                      addOCRComparisonPublication(
                        patchWrap.publicationId,
                        patchWrap.patch,
                        article,
                      );
                      setPatchMode(false);
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
                    setPatchMode(false);
                    setCompareType(CompareType.none);
                    setAnchorEl(null);
                  }}
                >
                  取消
                </MenuItem>
              </Menu>
            </Stack>
          </Grid>
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
