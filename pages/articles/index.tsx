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
import { Article, Date } from '../../types/index';

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
  BookIndexes,
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
import { Grid2 } from '@mui/material';
import { getGridFilter } from '@mui/x-data-grid/internals';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const res = JSON.parse(
    (await readFile(join(process.cwd(), './book_catelog.json'))).toString(),
  );
  const tag_indexes = JSON.parse(
    (await readFile(join(process.cwd(), './tag_indexes.json'))).toString(),
  );
  const book_indexes = JSON.parse(
    (await readFile(join(process.cwd(), './book_indexes.json'))).toString(),
  );
  return {
    props: {
      catelog: res,
      tag_indexes,
      book_indexes,
    },
  };
};

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
const default_authors = ['毛泽东', '江青', '王洪文', '张春桥', '姚文元'];
export default function Articles({
  catelog,
  book_indexes,
  tag_indexes,
}: {
  catelog: ArticleList;
  book_indexes: BookIndexes;
  tag_indexes: TagIndexes;
}) {
  const [ready, setReady] = useState(false);
  const apiRef = useGridApiRef();
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  const filterModelRef = useRef<GridFilterModel>({ items: [] });

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
            href={`/articles/${params.row.id}`}
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

  useEffect(() => {
    catelog.forEach((i) => {
      try {
        i.tags = i.tag_ids.map(
          (j) =>
            ({
              type: tag_indexes[j][0],
              name: tag_indexes[j][1],
            } as Tag),
        );
        i.books = i.book_ids.map((j) => book_indexes[j][1]);
      } catch (e) {
        debugger;
      }
    });
    setReady(true);
  }, [catelog, book_indexes, tag_indexes]);
  const tags_all = useMemo(() => {
    const m = new Map<string, Tag>();
    tag_indexes.forEach((i, idx) => {
      m.set(idx.toString(), {
        type: i[0],
        name: i[1],
        id: idx.toString(),
      } as Tag);
    });
    return m;
  }, [tag_indexes]);
  const tags_all_order_by_type = useMemo(() => {
    const m = new Map<string, Map<string, Tag>>();
    tag_indexes.forEach((i, idx) => {
      const type = i[0];
      const name = i[1];
      const id = idx.toString();
      if (!m.get(type)) {
        m.set(type, new Map());
      }

      m.get(type)!.set(id, { type, name, id } as Tag);
    });
    return m;
  }, [tag_indexes]);
  const sources_all = useMemo(() => {
    const set = new Set<string>();
    catelog.forEach((i) =>
      i.book_ids.forEach((j) => set.add(book_indexes[j][1])),
    );
    return Array.from(set).sort();
  }, [catelog, book_indexes]);

  const authors_all = useMemo(() => {
    const set = new Set<string>();
    catelog.forEach((i) => i.authors.forEach((j) => j && set.add(j)));
    return Array.from(set).sort();
  }, [catelog]);

  const { TagDialog, tagFilter, setTagDialog, setTagFilter, tags } =
    useTagFilterDialog(tags_all, tags_all_order_by_type);
  const [dateFilter, setDateFilter] = useState<DateFilter>(default_date_filter);
  const { DateFilterDialog, showDateFilterDialog } = useDateFilterDialog(
    default_date_filter,
    (d) => {
      setDateFilter(d);
    },
  );

  const [authorFilter, setAuthorFilter] = useState<string | null>(null);
  const { AuthorDialog, showAuthorDialog } = useAuthorFilterDialog(
    authors_all,
    (author: string) => {
      setAuthorFilter(author ? author : null);
    },
  );

  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const { SourceDialog, showSourceDialog } = useSourceFilterDialog(
    sources_all,
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
    return catelog
      .filter((i) => date_include(i as unknown as Article, dateFilter))
      .filter((i) =>
        authorFilter ? !!i.authors.find((k) => k === authorFilter) : true,
      )
      .filter((i) =>
        sourceFilter
          ? !!i.book_ids.find(
              (k) => book_indexes[k][1].indexOf(sourceFilter) > -1,
            )
          : true,
      )
      .filter((i) =>
        tagFilter ? !!i.tag_ids.find((k) => k.toString() === tagFilter) : true,
      );
  }, [
    catelog,
    dateFilter,
    tagFilter,
    authorFilter,
    sourceFilter,
    book_indexes,
  ]);

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
            }}
            filterModel={filterModel}
            onFilterModelChange={(f) => {
              setFilterModel(f);
              filterModelRef.current = f;
            }}
            localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
            rows={filtered_articles}
            columns={columns.current}
            pageSizeOptions={[100]}
          />
        </Stack>
      </Stack>
    </>
  );
}

Articles.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
