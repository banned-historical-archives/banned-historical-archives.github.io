import { useState, useEffect, ReactElement, useMemo } from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import * as service from '../service';
import { ContentType } from '../../types';
import { Document, Page, pdfjs  } from 'react-pdf';
import * as Diff from 'diff';

import type Content from '../../backend/entity/content';
import type Article from '../../backend/entity/article';
import type Comment from '../../backend/entity/comment';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs-dist/legacy/build/pdf.worker.min.js`;

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
          .map((j) => <h2 key={j} style={{ textAlign: 'center' }}>{j}</h2>)
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
              if (part.index === 3) console.log(p);
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
                <span key={Math.random()}>[{comment_idx}]</span>,
              );
            } else {
              content.push(<span key={Math.random()}>{text}</span>);
            }
          });
          const key = part.id;
          if (part.type === ContentType.title) {
            return (
              <Typography key={key} variant="h3" sx={{ textAlign: 'center', margin: 4 }}>
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
              <Typography key={key} variant="subtitle1" sx={{ textAlign: 'center' }}>
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
              <Typography key={key} variant="body1" sx={{ textIndent: '2em', margin: 0.5 }}>
                {content}
              </Typography>
            );
          }
        })}
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

type LineDiff = {
  id: string;
  removed?: boolean;
  added?: boolean;
  value: string;
};
type ArticleDiff = { line_diffs: LineDiff[]; id: string }[];
export default function ArticleViewer() {
  const [article, setArticle] = useState<Article>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [compareType, setCompareType] = useState<CompareType>(CompareType.none);
  const [comparePublication, setComparePublication] = useState<string>();
  const [selectedPublication, setSelectedPublication] = useState<string>();

  useEffect(() => {
    (async () => {
      const a = await service.get_article(id!);
      setArticle(a);
      setSelectedPublication(a.publications[0].id);
      setLoading(false);
    })();
  }, []);

  const showCompareMenu = !!anchorEl;

  if (!article || !selectedPublication) {
    return null;
  }

  const publication = article.publications.find(
    (i) => i.id === selectedPublication,
  )!;

  const compareArticleDetails: { comments: Comment[]; contents: Content[] } = {
    comments: [],
    contents: [],
  };
  if (comparePublication) {
    const x = article.publications.find((i) => i.id === comparePublication)!;
    compareArticleDetails!.contents = x.contents;
    compareArticleDetails!.comments = x.comments;
  }
  const { contents, comments } = publication;
  const article_diff: ArticleDiff | undefined = (() => {
    if (compareType !== CompareType.version) return;
    let i = 0;
    const contents_a = contents.sort((a, b) => (a.index > b.index ? 1 : -1));
    const contents_b = compareArticleDetails!.contents.sort((a, b) =>
      a.index > b.index ? 1 : -1,
    );
    const a_diff: ArticleDiff = [];
    while (i < contents_a.length && i < contents_b.length) {
      const line_diffs: LineDiff[] = [];
      a_diff.push({ line_diffs, id: Math.random().toString() });
      const line_diff = Diff.diffChars(contents_a[i].text, contents_b[i].text);
      for (const r of line_diff) {
        line_diffs.push({
          id: Math.random().toString(),
          removed: r.removed,
          added: r.added,
          value: r.value,
        });
      }
      ++i;
    }
    if (contents_a.length != contents_b.length) {
      const max_len = Math.max(contents_a.length, contents_b.length);
      const target =
        contents_a.length > contents_b.length ? contents_a : contents_b;
      while (i < max_len) {
        a_diff.push({
          line_diffs: [
            {
              id: Math.random().toString(),
              removed: target === contents_a ? false : true,
              added: target === contents_a ? true : false,
              value: target[i].text,
            },
          ],
          id: Math.random().toString(),
        });
        ++i;
      }
    }
    return a_diff;
  })();

  const compare_elements: ReactElement[] = [
    <Stack
      sx={{
        flex: 1,
        p: 2,
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
          来源文件(页码{publication.pages[0]!.start}-{publication.pages[0]!.end}
          )：
        </Typography>
        <Document
          file={publication.pdf}
          options={{
            cMapUrl: `/pdfjs-dist/cmaps/`,
            cMapPacked: true,
          }}
        >
          {new Array(
            publication.pages[0]!.end - publication.pages[0]!.start + 1,
          )
            .fill(0)
            .map((i, idx) => (
              <Page pageNumber={idx + publication.pages[0]!.start} key={idx} />
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
            <MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>
          ))}
        </Select>
        <Stack sx={{ overflowY: 'scroll', p: 1 }}>
          <ArticleComponent
            article={article}
            comments={compareArticleDetails!.comments}
            contents={compareArticleDetails!.contents}
          />
        </Stack>
      </Stack>,
      <Stack key="result" sx={{ flex: 1, overflowY: 'scroll' }}>
        {article_diff!.map((i) => (
          <p key={i.id}>
            {i.line_diffs.map((j) => (
              <span
                key={j.id}
                style={{
                  color: j.added ? 'green' : j.removed ? 'red' : 'auto',
                }}
              >
                {j.value}
              </span>
            ))}
          </p>
        ))}
      </Stack>,
    );
  }
  return (
    <Stack
      sx={{
        height: '100%',
        boxSizing: 'border-box',
        background: 'white',
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
      }}
      p={2}
      spacing={1}
    >
      <Stack direction="row">
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
              setLoading(true);
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
  );
}
