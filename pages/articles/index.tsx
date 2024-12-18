import { ReactElement, useState, useEffect, useMemo, useRef } from 'react';
import Popover from '@mui/material/Popover';
import { zhCN } from '@mui/x-data-grid/locales';
import Head from 'next/head';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  DataGridPro,
  GridColDef,
  GridFilterItem,
  GridFilterModel,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetter,
  useGridApiRef,
} from '@mui/x-data-grid-pro';

import Link from 'next/link';

import Layout from '../../components/Layout';
import { Article, ArticleListV2, Date } from '../../types/index';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  ArticleCategory,
  ArticleType,
  ArticleList,
  ArticleListItem,
  TagIndexes,
  TagType,
} from '../../types';
import Typography from '@mui/material/Typography';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';
import { Tag } from '../../types';
import Tags from '../../components/Tags';
import Authors from '../../components/Authors';
import {
  DateFilter,
  useDateFilterDialog,
} from '../../components/useDateFilterDialog';
import { useAuthorFilterDialog } from '../../components/useAuthorFilterDialog';
import { useTagFilterDialog } from '../../components/useTagFilterDialog';
import { useSourceFilterDialog } from '../../components/useSourceFilterDialog';
import { readFile } from 'fs-extra';
import { join } from 'path';
import { Grid2, LinearProgress } from '@mui/material';
import { getGridFilter } from '@mui/x-data-grid/internals';

function ensure_two_digits(a?: number, fallback = '') {
  if (!a && a !== 0) {
    return fallback;
  }
  return a < 10 ? `0${a}` : a;
}

function date_include(a: Article, b: DateFilter) {
  const date_a = b.year_a! * 10000 + b.month_a! * 100 + b.day_a!;
  const date_b = b.year_b! * 10000 + b.month_b! * 100 + b.day_b!;
  if (a.is_range_date) {
    const range_a =
      a.dates[0].year! * 10000 +
      (a.dates[0].month || 0) * 100 +
      (a.dates[0].day || 0);
    const range_b =
      a.dates[1].year! * 10000 +
      (a.dates[1].month || 0) * 100 +
      (a.dates[1].day || 0);
    return range_a >= date_a && range_b <= date_b;
  } else {
    return a.dates.reduce((m, i) => {
      const d = i.year! * 10000 + (i.month || 0) * 100 + (i.day || 0);
      return m && date_a <= d && date_b >= d;
    }, true);
  }
}

const default_date_filter = {
  year_a: 1800,
  year_b: 2200,
  month_a: 1,
  month_b: 12,
  day_a: 1,
  day_b: 31,
};

const default_sources = [
  '毛泽东选集',
  '毛泽东全集',
  '毛泽东文集',
  '中国文化大革命文库',
];

type TableArticle = {
  id: string;
  title: string;
  authors: string[];
  dates: any;
  is_range_date: boolean;
  books: string[];
  tags: { name: string; type: string; id: string }[];
};
const default_authors = ['毛泽东', '江青', '王洪文', '张春桥', '姚文元'];
export default function Articles() {
  const [ready, setReady] = useState(false);
  const apiRef = useGridApiRef();
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  const filterModelRef = useRef<GridFilterModel>({ items: [] });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setFilterModel({
      ...filterModel,
      items:
        typeof location !== 'undefined' && location.search
          ? location.search.startsWith('?tag=')
            ? [
                {
                  field: 'tags',
                  operator: 'contains',
                  value: decodeURIComponent(location.search.split('=')[1]),
                },
              ]
            : location.search.startsWith('?author=')
            ? [
                {
                  field: 'authors',
                  operator: 'contains',
                  value: decodeURIComponent(location.search.split('=')[1]),
                },
              ]
            : []
          : [],
    });
  }, []);

  const columns = useRef<GridColDef[]>([
    {
      field: 'title',
      headerName: '标题',
      minWidth: 350,
      flex: 1,
      renderCell: (params: GridRenderCellParams<ArticleListItem>) => {
        return (
          <a
            href={`/article?id=${encodeURIComponent(params.row.id)}`}
            rel="noreferrer"
            target="_blank"
          >
            {params.row.title}
          </a>
        );
      },
    },
    {
      field: 'authors',
      headerName: '作者',
      minWidth: 150,
      flex: 1,
      valueGetter: (authors: string[]) => authors.map((i) => i).join(','),
      renderCell: (params: GridRenderCellParams<ArticleListItem>) => (
        <div style={{ overflow: 'scroll' }}>
          <Authors
            authors={params.row.authors}
            onClick={(a: string) => {
              const newFilter: GridFilterModel = {
                ...filterModelRef.current,
                items: [
                  ...filterModelRef.current.items.filter(
                    (i) => i.field != 'authors',
                  ),
                  {
                    id: 'authors',
                    field: 'authors',
                    operator: 'contains',
                    value: a,
                  },
                ],
              };
              setFilterModel(newFilter);
              filterModelRef.current = newFilter;
            }}
          />
        </div>
      ),
    },
    {
      field: 'dates',
      headerName: '时间',
      description:
        '可能包含多个时间点（起草时间，发布时间，子文稿时间等）或时间段',
      minWidth: 150,
      flex: 1,
      valueGetter: (dates: Date[]) =>
        dates
          .map((i) =>
            i
              ? [
                  i.year || '----',
                  ensure_two_digits(i.month, '--'),
                  ensure_two_digits(i.day, '--'),
                ]
                  .filter((j) => j)
                  .join('/')
              : '----/--/--',
          )
          .join(' '),
      renderCell: (params: GridRenderCellParams<ArticleListItem>) => (
        <Stack spacing={1}>
          {params.row.is_range_date ? (
            <Typography variant="caption">
              {params.row.dates
                .map((i) =>
                  [i.year, ensure_two_digits(i.month), ensure_two_digits(i.day)]
                    .filter((j) => j)
                    .join('/'),
                )
                .sort((a, b) => (a > b ? 1 : -1))
                .join('至')}
            </Typography>
          ) : (
            params
              .row!.dates.map((i) =>
                [i.year, ensure_two_digits(i.month), ensure_two_digits(i.day)]
                  .filter((j) => j)
                  .join('/'),
              )
              .map((j) => (
                <Typography key={j} variant="caption">
                  {j}
                </Typography>
              ))
          )}
        </Stack>
      ),
    },
    {
      field: 'publications',
      headerName: '来源',
      flex: 1,
      minWidth: 150,
      valueGetter: (_: any, row: ArticleListItem) => row.books!.join(','),
      renderCell: (params: GridRenderCellParams<ArticleListItem>) => (
        <div style={{ overflow: 'scroll', height: '100%' }}>
          <Tags
            tags={
              params.row.books?.map((i) => ({
                name: i,
                type: '来源' as any,
                id: i,
              })) || []
            }
            onClick={(t: Tag) => {
              const newFilter: GridFilterModel = {
                ...filterModelRef.current,
                items: [
                  ...filterModelRef.current.items.filter(
                    (i) => i.field != 'publications',
                  ),
                  {
                    id: 'publications',
                    field: 'publications',
                    operator: 'contains',
                    value: t.name,
                  },
                ],
              };
              setFilterModel(newFilter);
              filterModelRef.current = newFilter;
            }}
          />
        </div>
      ),
    },
    {
      field: 'tags',
      headerName: '标签',
      minWidth: 150,
      flex: 1,
      sortComparator: (tags_a: string, tags_b: string) => {
        return tags_a > tags_b ? 1 : -1;
      },
      valueGetter: (tags: Tag[]) => tags.map((i) => i.name).join(','),
      renderCell: (params: GridRenderCellParams<ArticleListItem>) => (
        <div style={{ overflow: 'scroll', height: '100%' }}>
          <Tags
            tags={params.row.tags!}
            onClick={(t: Tag) => {
              const newFilter: GridFilterModel = {
                ...filterModelRef.current,
                items: [
                  ...filterModelRef.current.items.filter(
                    (i) => i.field != 'tags',
                  ),
                  {
                    id: 'tags',
                    field: 'tags',
                    operator: 'contains',
                    value: t.name,
                  },
                ],
              };
              setFilterModel(newFilter);
              filterModelRef.current = newFilter;
            }}
          />
        </div>
      ),
    },
  ]);

  const [allSources, setAllSources] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<{ name: string; type: string }[]>([]);
  const [allAuthors, setAllAuthors] = useState<string[]>([]);
  const [articles, setArticles] = useState<TableArticle[]>([]);
  const articlesRef = useRef<TableArticle[]>([]);
  const tagsSetRef = useRef(new Set<string>());
  const sourcesSetRef = useRef(new Set<string>());
  const authorsSetRef = useRef(new Set<string>());
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    (async () => {
      const file_count: { article_list: number } = await (
        await fetch(
          'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives.github.io/refs/heads/indexes/indexes/file_count.json',
        )
      ).json();
      for (let i = 0; i < file_count.article_list; ++i) {
        const article_list: ArticleListV2 = await (
          await fetch(
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives.github.io/refs/heads/indexes/indexes/article_list_${i}.json`,
          )
        ).json();
        for (const k of article_list.tags) {
          const id = `${k.type}--${k.name}`;
          if (!tagsSetRef.current.has(id)) {
            tagsSetRef.current.add(id);
          }
        }
        for (const k of article_list.books) {
          if (!sourcesSetRef.current.has(k)) {
            sourcesSetRef.current.add(k);
          }
        }
        for (const k of article_list.articles) {
          for (const a of k.authors) {
            if (!authorsSetRef.current.has(a)) {
              authorsSetRef.current.add(a);
            }
          }

          articlesRef.current.push({
            ...k,
            // TODO
            tags: Array.from(new Set(k.tag_ids)).map((t) => ({
              ...article_list.tags[t],
              id: `${article_list.tags[t].type}--${article_list.tags[t].name}`,
            })),
            books: k.book_ids.map((b) => article_list.books[b]),
          });
        }
        if (i % 10 == 0) {
          setArticles([...articlesRef.current]);
          setAllAuthors(Array.from(authorsSetRef.current.keys()));
          setAllSources(Array.from(sourcesSetRef.current.keys()));
          setAllTags(
            Array.from(tagsSetRef.current.keys()).map((x) => ({
              id: x,
              name: x.split('--')[1],
              type: x.split('--')[0],
            })),
          );
        }
        setReady(true);
        setProgress((i / (file_count.article_list - 1)) * 100);
      }
      setArticles([...articlesRef.current]);
      setAllAuthors(Array.from(authorsSetRef.current.keys()));
      setAllSources(Array.from(sourcesSetRef.current.keys()));
      setAllTags(
        Array.from(tagsSetRef.current.keys()).map((x) => ({
          id: x,
          name: x.split('--')[1],
          type: x.split('--')[0],
        })),
      );
      setLoaded(true);
    })();
  }, []);
  const tags_all_order_by_type = useMemo(() => {
    const m = new Map<string, Map<string, Tag>>();
    allTags.forEach((i) => {
      const type = i.type;
      const name = i.name;
      const id = `${type}--${name}`;
      if (!m.get(type)) {
        m.set(type, new Map());
      }

      m.get(type)!.set(id, { type, name, id } as Tag);
    });
    return m;
  }, [allTags]);
  const sources_all_sorted = useMemo(() => {
    return allSources.sort();
  }, [allSources]);

  const authors_all_sorted = useMemo(() => {
    return allAuthors.sort();
  }, [allAuthors]);

  const { TagDialog, tagFilter, setTagDialog, setTagFilter, tags } =
    useTagFilterDialog(allTags, tags_all_order_by_type);
  const [dateFilter, setDateFilter] = useState<DateFilter>(default_date_filter);
  const { DateFilterDialog, showDateFilterDialog } = useDateFilterDialog(
    default_date_filter,
    (d) => {
      setDateFilter(d);
    },
  );

  const [authorFilter, setAuthorFilter] = useState<string | null>(null);
  const { AuthorDialog, showAuthorDialog } = useAuthorFilterDialog(
    authors_all_sorted,
    (author: string) => {
      setAuthorFilter(author ? author : null);
    },
  );

  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const { SourceDialog, showSourceDialog } = useSourceFilterDialog(
    sources_all_sorted,
    (s: string) => {
      setSourceFilter(s);
    },
  );
  const [tipsAnchorEl, setTipsAnchorEl] = useState<HTMLElement | null>(null);

  const showTips = (event: React.MouseEvent<HTMLElement>) => {
    setTipsAnchorEl(event.currentTarget);
  };

  const hideTips = () => {
    setTipsAnchorEl(null);
  };

  const filtered_articles = useMemo(() => {
    return articles
      .filter((i) => date_include(i as unknown as Article, dateFilter))
      .filter((i) =>
        authorFilter ? !!i.authors.find((k) => k === authorFilter) : true,
      )
      .filter((i) =>
        sourceFilter
          ? !!i.books.find((k) => k.indexOf(sourceFilter) > -1)
          : true,
      )
      .filter((i) =>
        tagFilter ? !!i.tags.find((k) => k.id === tagFilter) : true,
      );
  }, [articles, dateFilter, tagFilter, authorFilter, sourceFilter]);

  if (!ready) return null;
  return (
    <>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      {DateFilterDialog}
      {AuthorDialog}
      {SourceDialog}
      {TagDialog}
      <Stack
        p={2}
        spacing={2}
        sx={{ position: 'relative', flex: 1, height: '100%' }}
      >
        <Stack direction="row">
          <Grid2 container spacing={1}>
            <Grid2 size={{ md: 5, xs: 12 }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  时间范围：
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<SettingsIcon fontSize="small" />}
                    onClick={() => showDateFilterDialog()}
                    label={
                      [
                        `${dateFilter.year_a}年`,
                        `${dateFilter.month_a}月`,
                        `${dateFilter.day_a}日`,
                      ].join(' ') +
                      ' - ' +
                      [
                        `${dateFilter.year_b}年`,
                        `${dateFilter.month_b}月`,
                        `${dateFilter.day_b}日`,
                      ].join(' ')
                    }
                    color="primary"
                    variant="filled"
                  />
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={{ md: 7, xs: 12 }} sx={{ overflowX: 'scroll' }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  标签：
                </Typography>
                <Stack direction="row" spacing={1}>
                  {tags.map((i) => {
                    const id = i.id!;
                    const isSelected = id == tagFilter;
                    return (
                      <Chip
                        key={id}
                        label={i.name}
                        variant={isSelected ? 'filled' : 'outlined'}
                        color={isSelected ? 'primary' : 'default'}
                        onDelete={
                          isSelected ? () => setTagFilter(null) : undefined
                        }
                        onClick={(e) => {
                          setTagFilter(id);
                        }}
                      />
                    );
                  })}
                  <Chip
                    label={'更多'}
                    onClick={(e) => {
                      setTagDialog(true);
                    }}
                  />
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} sx={{ overflowX: 'scroll' }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1">作者：</Typography>
                <Stack direction="row" spacing={1}>
                  {Array.from(
                    new Set(
                      [...default_authors, authorFilter].filter((i) => i),
                    ),
                  ).map((i) => {
                    return (
                      <Chip
                        key={i}
                        label={i}
                        variant={i == authorFilter ? 'filled' : 'outlined'}
                        color={i == authorFilter ? 'primary' : 'default'}
                        onDelete={
                          i == authorFilter
                            ? () => setAuthorFilter(null)
                            : undefined
                        }
                        onClick={(e) => {
                          setAuthorFilter(i);
                        }}
                      />
                    );
                  })}
                  <Chip
                    label={'更多'}
                    onClick={(e) => {
                      showAuthorDialog();
                    }}
                  />
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }} sx={{ overflowX: 'scroll' }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  来源：
                </Typography>
                <Stack direction="row" spacing={1}>
                  {Array.from(
                    new Set(
                      [...default_sources, sourceFilter].filter((x) => x),
                    ),
                  ).map((i) => {
                    const isSelected = i == sourceFilter;
                    return (
                      <Chip
                        key={i}
                        label={i}
                        variant={isSelected ? 'filled' : 'outlined'}
                        color={isSelected ? 'primary' : 'default'}
                        onDelete={
                          isSelected ? () => setSourceFilter(null) : undefined
                        }
                        onClick={(e) => {
                          setSourceFilter(i);
                        }}
                      />
                    );
                  })}
                  <Chip
                    label={'更多'}
                    onClick={(e) => {
                      showSourceDialog();
                    }}
                  />
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={1} sx={{ display: { md: 'flex', xs: 'none' } }}>
              <Popover
                id="tips"
                open={!!tipsAnchorEl}
                anchorEl={tipsAnchorEl}
                disableRestoreFocus
                sx={{
                  pointerEvents: 'none',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <img alt="" src="/images/filter.png" width="200" />
                <Typography sx={{ p: 2 }}>
                  可在每一列右上角添加筛选器进行高级检索
                </Typography>
              </Popover>
              <Button
                onClick={showTips}
                onMouseEnter={showTips}
                onMouseLeave={hideTips}
                sx={{ fontSize: 11, width: '100%' }}
              >
                高级检索
              </Button>
            </Grid2>
          </Grid2>
        </Stack>
        {!loaded ? (
          <LinearProgress variant="determinate" value={progress} />
        ) : null}
        <Stack sx={{ flex: 1, width: '100%', height: '500px' }}>
          <DataGridPro
            apiRef={apiRef}
            headerFilters
            disableColumnFilter
            getRowId={(row) => row.id}
            initialState={{
              sorting: {
                sortModel: [{ field: 'dates', sort: 'asc' }],
              },
              pagination: { paginationModel: { pageSize: 1000 } },
            }}
            filterModel={filterModel}
            onFilterModelChange={(f) => {
              setFilterModel(f);
              filterModelRef.current = f;
            }}
            localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
            rows={filtered_articles}
            columns={columns.current}
            pagination
            pageSizeOptions={[20, 100, 1000]}
          />
        </Stack>
      </Stack>
    </>
  );
}

Articles.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
