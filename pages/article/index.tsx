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
import Grid2 from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
  ArticleIndexes,
  ArticleList,
  ContentType,
  ParserResult,
  Patch,
  PatchV2,
  Tag,
} from '../../types';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../../components/Layout';

import { Content, Date, Comment } from '../../types';
import { GetStaticProps, GetStaticPropsContext } from 'next';
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
import { pathExists, readFile, readFileSync } from 'fs-extra';
import { join } from 'path';
import { useRouter } from 'next/router';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs-dist/legacy/build/pdf.worker.min.js`;

const commit_hash = process.env.COMMIT_HASH;
const virtual_publication_id = '--preview-patch--';

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

export default function ArticleViewer() {
  const [books, setBooks] = useState<
    {
      id: string;
      type: string;
      name: string;
      tags: { type: string; name: string }[];
      files: string[];
      article: ParserResult;
    }[]
  >([]);
  const [articleId, setArticleId] = useState<string>();
  const booksRef = useRef(books);

  const [previewScale, setPreviewScale] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [compareType, setCompareType] = useState<CompareType>(CompareType.none);
  const [comparedPublication, setComparePublication] = useState<string>();
  const [compareMode, setCompareMode] = useState(CompareMode.line);
  const [selectedPublication, setSelectedPublication] = useState<string>();

  const isLocalhost =
    ((global || (window as any))['location'] as any)?.hostname === 'localhost';
  useEffect(() => {
    (async () => {
      const id = new URLSearchParams(location.search).get('id')!;
      const data = await (
        await fetch(
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives.github.io/json/json/${id.slice(
            0,
            3,
          )}/${id}.json`,
        )
      ).json();
      setArticleId(id);
      setBooks(data.books);
      booksRef.current = data.books;
      setComparePublication(data.books[data.books.length - 1].id);
      setSelectedPublication(data.books[0].id);
    })();
  }, []);

  const addOCRComparisonPublicationV2 = useCallback(
    (publicationId: string, patch: PatchV2) => {
      booksRef.current = booksRef.current.filter(
        (i) => i.id != virtual_publication_id,
      );
      booksRef.current.push({
        id: virtual_publication_id,
        type: '',
        tags: [],
        files: [],
        name: '#OCR补丁预览#',
        article: apply_patch_v2(
          booksRef.current.find((i) => i.id == publicationId)!.article,
          patch,
        ),
      });
    },
    [],
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('publication_id')) {
      setSelectedPublication(params.get('publication_id')!);
    }
  }, []);

  const article_diff: Diff[][] = useMemo(() => {
    if (!comparedPublication || !selectedPublication) {
      return [];
    }
    if (compareType !== CompareType.version || !(typeof window !== 'undefined'))
      return [];
    const article_a = booksRef.current.find(
      (i) => i.id == selectedPublication,
    )!.article;
    const article_b = booksRef.current.find(
      (i) => i.id == comparedPublication,
    )!.article;
    let comments_a = article_a.comments;
    let comments_b = article_b.comments;
    let contents_a = article_a.parts;
    let contents_b = article_b.parts;
    if (compareMode === CompareMode.literal) {
      return [
        new diff_match_patch().diff_main(
          join_text([{ text: join_text(contents_a) }]),
          join_text([{ text: join_text(contents_b) }]),
        ),
      ];
    } else if (compareMode === CompareMode.description_and_comments) {
      const max_n_comment = Math.max(comments_a.length, comments_b.length);
      return [
        new diff_match_patch().diff_main(
          article_a.description || '',
          article_b.description || '',
        ),
        ...new Array(max_n_comment)
          .fill(0)
          .map((x, p) =>
            new diff_match_patch().diff_main(
              comments_a[p] || '',
              comments_b[p] || '',
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
  }, [selectedPublication, compareType, compareMode, comparedPublication]);

  const showCompareMenu = !!anchorEl;

  const book = books.find((i) => i.id == selectedPublication)!;
  const comparedBook = books.find((i) => i.id == comparedPublication)!;
  const article = book?.article;

  if (!article || !comparedBook) return null;

  const aliases: string[] = [];
  books.forEach((book) => {
    if (book.article.alias) aliases.push(book.article.alias);
  });

  const { description, parts, comments, page_start, page_end, comment_pivots } =
    article;
  const articleComments: Comment[] = comments.map((i, idx) => ({
    text: i,
    id: idx.toString(),
    offset: comment_pivots[idx]?.offset,
    index: comment_pivots[idx]?.index,
    part_idx: comment_pivots[idx]?.part_idx,
  }));
  const articleContents: Content[] = parts.map((i, idx) => ({
    ...i,
    index: idx,
    id: idx.toString(),
  }));
  const comparedArticleComments: Comment[] = comparedBook.article.comments.map(
    (i, idx) => ({ text: i, id: idx.toString(), ...comment_pivots[idx] }),
  );
  const comparedArticleContents: Content[] = comparedBook.article.parts.map(
    (i, idx) => ({ ...i, index: idx, id: idx.toString() }),
  );

  const all_tags = new Map<string, Tag>();
  books.forEach((i) => {
    i.tags.forEach((j) => {
      all_tags.set(j.type + '##' + j.name, j as Tag);
    });
  });

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
      {selectedPublication ? (
        <ArticleComponent
          article={article}
          articleId={articleId!}
          publicationId={selectedPublication}
          publicationName={book.name}
          description={description}
          comments={articleComments}
          contents={articleContents}
          patchable={compareType === CompareType.originProofread}
        />
      ) : null}
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
        {book.type !== 'db' ? (
          book.type === 'pdf' ? (
            <>
              <Typography variant="subtitle1">
                来源文件(页码{page_start}-{page_end})
                <a href={book.files[0]} target="__blank">
                  [下载]
                </a>
              </Typography>
              <Document
                file={book.files[0] || ''}
                options={{
                  cMapUrl: `/pdfjs-dist/cmaps/`,
                  cMapPacked: true,
                }}
              >
                {new Array(page_end - page_start + 1).fill(0).map((i, idx) => (
                  <Page
                    pageNumber={idx + page_start}
                    key={idx}
                    width={500 * previewScale}
                  />
                ))}
              </Document>
            </>
          ) : book.type === 'img' ? (
            book.files
              .filter((i, idx) => idx + 1 >= page_start && idx + 1 <= page_end)
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
            value={comparedPublication}
            input={<OutlinedInput label="对比目标" />}
            onChange={(e) => {
              setComparePublication(e.target.value);
            }}
          >
            {books.map((i) => (
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
          {comparedPublication && articleId ? (
            <ArticleComponent
              description={comparedBook.article.description}
              articleId={articleId}
              article={comparedBook.article}
              publicationId={comparedPublication}
              comments={comparedArticleComments}
              contents={comparedArticleContents}
            />
          ) : null}
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
          <DiffViewer diff={article_diff} />
        </Stack>
      </Stack>,
    );
  }

  const details = (
    <>
      <Grid2 size={{ md: 6, xs: 12 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body1">作者：</Typography>
          <Stack direction="row" sx={{ overflowX: 'scroll', flex: 1 }}>
            <Authors authors={article.authors} />
          </Stack>
          {books.map((i) => (
            <img
              alt=""
              style={{ cursor: 'pointer' }}
              key={i.id}
              onClick={() =>
                window.open(
                  `https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues?q=+${encodeURIComponent(
                    `is:issue "${articleId}" "${i.id}"`,
                  )}+`,
                  '_blank',
                )
              }
              src={`https://img.shields.io/github/issues-search/banned-historical-archives/banned-historical-archives.github.io?style=for-the-badge&color=%23cc0000&label=%E6%A0%A1%E5%AF%B9%E8%AE%B0%E5%BD%95&query=${encodeURIComponent(
                `is:issue "${articleId}" "${i.id}"`,
              )}`}
            />
          ))}
        </Stack>
      </Grid2>
      <Grid2 size={{ md: 3, xs: 12 }}>
        <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
          时间：
          {article.is_range_date
            ? `${date_to_string(article.dates[0] as Date)}-${date_to_string(
                article.dates[1] as Date,
              )}`
            : article.dates.map((i) => date_to_string(i as Date)).join(',')}
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="body1">标签：</Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ flex: 1, overflowX: 'scroll' }}
          >
            <Tags tags={Array.from(all_tags.values())} />
          </Stack>
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body1">选择来源：</Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flex: 1, overflowX: 'scroll' }}
          >
            {books.map((i) => (
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
                  booksRef.current.length === 1
                    ? booksRef.current[0].id
                    : booksRef.current.find((i) => i.id !== book.id)!.id,
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
                try {
                  const patchWrap = JSON.parse(str);
                  addOCRComparisonPublicationV2(
                    patchWrap.publicationId,
                    patchWrap.patch,
                  );
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
      </Grid2>
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
        <Grid2
          container
          alignItems="center"
          sx={{ pt: 2, pl: 2, pr: 2 }}
          spacing={2}
        >
          <Grid2 size={{ md: 6, xs: 10 }}>
            <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
              标题：
              {article.title}
              {aliases.length ? `(别名:${aliases.join(',')})` : ''}
            </Typography>
          </Grid2>
          <Grid2
            size={2}
            sx={{ display: { md: 'none', xs: 'flex' }, justifyContent: 'end' }}
          >
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? '隐藏' : '展开'}
            </Button>
          </Grid2>
          {showMore ? details : null}
        </Grid2>
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
