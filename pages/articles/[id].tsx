import { useState, useEffect, ReactElement, useMemo } from 'react';
import Head from 'next/head';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ContentType, DiffResult } from '../../types';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../../components/Layout';

import Content from '../../backend/entity/content';
import Article from '../../backend/entity/article';
import Comment from '../../backend/entity/comment';
import PageEntity from '../../backend/entity/page';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';
import { init } from '../../backend/data-source';
import { diff } from '../../utils';
import { DiffViewer } from '../../components/DiffViewer';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs-dist/legacy/build/pdf.worker.min.js`;

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
      types: true,
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
  contents,
}: {
  article: Article;
  comments: Comment[];
  contents: Content[];
}) {
  const description = comments.find((i) => i.index === -1)?.text;
  return (
    <>
      <h3>{description}</h3>
      {article.is_range_date ? (
        <h2 style={{ textAlign: 'center' }}>
          {article.dates
            .map((i) =>
              [i.year, i.month || '', i.day || ''].filter((j) => j).join('/'),
            )
            .sort((a, b) => (a > b ? 1 : -1))
            .join('至')}
        </h2>
      ) : (
        article.dates
          .map((i) =>
            [i.year, i.month || '', i.day || ''].filter((j) => j).join('/'),
          )
          .map((j) => (
            <h2 key={j} style={{ textAlign: 'center' }}>
              {j}
            </h2>
          ))
      )}
      {contents
        .sort((a, b) => (a.index > b.index ? 1 : -1))
        .map((part) => {
          const part_comments = comments
            .filter((i) => i.part_index === part.index)
            .sort((a, b) => (a.index > b.index ? 1 : -1));
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
          const content: ReactElement[] = [];
          texts.forEach((text) => {
            if (part_comments.length) {
              const comment_idx = part_comments.shift()!.index;
              content.push(
                <span key={Math.random()}>{text}</span>,
                <a key={Math.random()} href={`#comment${comment_idx}`}>
                  [{comment_idx}]
                </a>,
              );
            } else {
              content.push(<span key={Math.random()}>{text}</span>);
            }
          });
          const key = part.id;
          if (part.type === ContentType.title) {
            return (
              <Typography
                key={key}
                variant="h3"
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
          } else if (part.type === ContentType.subtitle) {
            return (
              <Typography
                key={key}
                variant="subtitle1"
                sx={{ textAlign: 'center' }}
              >
                {content}
              </Typography>
            );
          } else if (part.type === ContentType.subdate) {
            return (
              <Typography
                key={key}
                variant="subtitle1"
                sx={{ textAlign: 'center' }}
              >
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
        })}
      {comments.filter((i) => i.index !== -1).length ? (
        <>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            注释
          </Typography>
        </>
      ) : null}
      {comments
        .filter((i) => i.index !== -1)
        .sort((a, b) => (a.index > b.index ? 1 : -1))
        .map((i) => (
          <Typography id={`comment${i.index}`} key={i.id} variant="body1">
            [{i.index}]{i.text}
          </Typography>
        ))}
    </>
  );
}

function join_text(contents: { text: string }[]) {
  let s = '';
  contents.forEach((i) => (s += i.text));
  return s;
}

enum CompareMode {
  line = '逐行对比',
  literal = '逐字对比',
}
export default function ArticleViewer({
  article,
  publication_details,
}: {
  article: Article;
  publication_details: PublicationDetails;
}) {
  const id = article.id;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [compareType, setCompareType] = useState<CompareType>(CompareType.none);
  const [comparePublication, setComparePublication] = useState<string>(
    article.publications[article.publications.length - 1].id,
  );
  const [compareMode, setCompareMode] = useState(CompareMode.line);
  const [selectedPublication, setSelectedPublication] = useState<string>(
    article.publications[0].id,
  );

  const article_diff: DiffResult | undefined = useMemo(() => {
    if (compareType !== CompareType.version || !article) return;
    let contents_a: { text: string }[] = publication_details[
      selectedPublication
    ].contents.sort((a, b) => (a.index > b.index ? 1 : -1));
    let contents_b: { text: string }[] = publication_details[
      comparePublication!
    ].contents.sort((a, b) => (a.index > b.index ? 1 : -1));
    if (compareMode === CompareMode.literal) {
      contents_a = [{ text: join_text(contents_a) }];
      contents_b = [{ text: join_text(contents_b) }];
    }
    return diff(
      contents_a.map((i) => i.text),
      contents_b.map((i) => i.text),
    );
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

  const compare_elements: ReactElement[] = [
    <Stack
      sx={{
        flex: 1,
        overflowY: compareType === CompareType.none ? 'none' : 'scroll',
        p: 1,
      }}
      key="version_a"
    >
      <ArticleComponent
        article={article}
        comments={comments}
        contents={contents}
      />
    </Stack>,
  ];
  if (compareType === CompareType.origin) {
    compare_elements.push(
      <Stack key="origin" sx={{ flex: 1, overflowY: 'scroll' }}>
        <Typography variant="subtitle1">
          来源文件(页码{page.start}-{page.end})
          <a href={publication.pdf} target="__blank">
            [下载]
          </a>
        </Typography>
        <Document
          file={publication.pdf}
          options={{
            cMapUrl: `/pdfjs-dist/cmaps/`,
            cMapPacked: true,
          }}
        >
          {new Array(page.end - page.start + 1).fill(0).map((i, idx) => (
            <Page pageNumber={idx + page.start} key={idx} />
          ))}
        </Document>
      </Stack>,
    );
  } else if (compareType === CompareType.version) {
    compare_elements.push(
      <Stack key="version_b" sx={{ flex: 1 }}>
        <Select
          size="small"
          value={comparePublication}
          label="来源"
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
        <Stack sx={{ overflowY: 'scroll', p: 1 }}>
          <ArticleComponent
            article={article}
            comments={publication_details[comparePublication!]!.comments}
            contents={publication_details[comparePublication!]!.contents}
          />
        </Stack>
      </Stack>,
      <Stack key="result" sx={{ flex: 1 }}>
        <Select
          size="small"
          value={compareMode}
          label="对比模式"
          onChange={(e) => {
            setCompareMode(e.target.value as CompareMode);
          }}
        >
          <MenuItem value={CompareMode.line}>{CompareMode.line}</MenuItem>
          <MenuItem value={CompareMode.literal}>{CompareMode.literal}</MenuItem>
        </Select>
        <Stack sx={{ overflowY: 'scroll' }}>
          <DiffViewer diff={article_diff} />
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
        <Stack direction="row" p={2}>
          <Stack>选择来源：</Stack>
          <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
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
              对比原始文件(pdf)
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
                setCompareType(CompareType.none);
                setAnchorEl(null);
              }}
            >
              取消
            </MenuItem>
          </Menu>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          style={{ flex: 1, overflow: 'auto' }}
        >
          {compare_elements}
        </Stack>
      </Stack>
      <Head>
        <title>{article.title}</title>
      </Head>
    </>
  );
}

ArticleViewer.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
