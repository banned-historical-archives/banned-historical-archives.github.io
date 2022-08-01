import { useState, useEffect, ReactElement, useMemo } from 'react';
import { diff_match_patch, Diff } from 'diff-match-patch';
import Head from 'next/head';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
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
import { ContentType } from '../../types';
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
import TagComponent from '../../components/TagComponent';

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
              <Typography
                key={key}
                variant="subtitle1"
                sx={{ textAlign: 'center' }}
              >
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
      {description ? (
        <>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 2 }}>
            描述
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </>
      ) : null}
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
function date_to_string(date: Date) {
  return [date.year || '', date.month || '', date.day || ''].filter((j) => j).join('.');
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

  const article_diff: Diff[][] | undefined = useMemo(() => {
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
      return [new diff_match_patch().diff_main(
        join_text(contents_a),
        join_text(contents_b),
      )];
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
        <Stack sx={{ overflowY: 'scroll', p: 1 }}>
          <ArticleComponent
            article={article}
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
          </Select>
        </FormControl>
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
            <Typography variant="body1" sx={{ overflowX: 'scroll' }}>
              作者：{article.authors.map((i) => i.name).join(' ')}
            </Typography>
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
                {article.tags.map((i) => (
                  <TagComponent tag={i} key={i.id} />
                ))}
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
                  对比原始文件(pdf)
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
