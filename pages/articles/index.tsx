import { ReactElement, useState, useEffect, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import Head from 'next/head';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  zhCN,
} from '@mui/x-data-grid';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Article from '../../backend/entity/article';
import type Date from '../../backend/entity/date';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import { ArticleCategory, ArticleType, TagType } from '../../types';
import Typography from '@mui/material/Typography';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';
import { init } from '../../backend/data-source';
import { Tag } from '../../backend/entities';
import { tagToString } from '../../utils';
import Tags from '../../components/Tags';
import Authors from '../../components/Authors';
import { articleTypeToCN } from '../../utils/i18n';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const AppDataSource = await init();
  const articles = await AppDataSource.manager.find(Article, {
    relations: {
      authors: true,
      publications: true,
      tags: true,
      dates: true,
    },
  });
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
};

function ensure_two_digits(a?: number) {
  if (!a && a !== 0) {
    return '';
  }
  return a < 10 ? `0${a}` : a;
}

const columns: GridColDef<Article>[] = [
  {
    field: 'title',
    headerName: '标题',
    minWidth: 350,
    flex: 1,
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <a href={`/articles/${params.row.id}`} rel="noreferrer" target="_blank">
        {params.row!.title}
      </a>
    ),
  },
  {
    field: 'authors',
    headerName: '作者',
    minWidth: 150,
    flex: 1,
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.authors.map((i) => i.name).join(','),
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <div style={{ overflow: 'visible' }}>
        <Authors authors={params.row.authors} />
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
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.dates.map(
        (i) =>
          i ? [i.year || '', ensure_two_digits(i.month), ensure_two_digits(i.day)]
              .filter((j) => j)
              .join('/')
          : '9'
      ).join(' '),
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <Stack spacing={1}>
        {params.row!.is_range_date ? (
          <Typography variant="caption">
            {params
              .row!.dates.map((i) =>
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
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.publications.map((i) => i.name).join(','),
  },
  {
    field: 'tags',
    headerName: '标签',
    minWidth: 150,
    flex: 1,
    sortComparator: (tags_a: string, tags_b: string) => {
      return tags_a > tags_b ? 1 : -1;
    },
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.tags.map((i) => tagToString(i)).join(','),
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <div style={{ overflow: 'visible' }}>
        <Tags tags={params.row.tags} />
      </div>
    ),
  },
];

function to_number(s: string) {
  const n = parseInt(s);
  if (!isNaN(n) && n != Infinity && n != -Infinity) {
    return n;
  }
  return undefined;
}

type DateFilter = {
  year_a?: number;
  year_b?: number;
  month_a?: number;
  month_b?: number;
  day_a?: number;
  day_b?: number;
};

function date_include(a: Article, b: DateFilter) {
  const date_a = b.year_a! * 10000 + b.month_a! * 100 + b.day_a!;
  const date_b = b.year_b! * 10000 + b.month_b! * 100 + b.day_b!;
  if (a.is_range_date) {
    const range_a =
      a.dates[0].year * 10000 +
      (a.dates[0].month || 0) * 100 +
      (a.dates[0].day || 0);
    const range_b =
      a.dates[1].year * 10000 +
      (a.dates[1].month || 0) * 100 +
      (a.dates[1].day || 0);
    return range_a >= date_a && range_b <= date_b;
  } else {
    return a.dates.reduce((m, i) => {
      const d = i.year * 10000 + (i.month || 0) * 100 + (i.day || 0);
      return m && date_a <= d && date_b >= d;
    }, true);
  }
}

const default_date_filter = {
  year_a: 1900,
  year_b: 1990,
  month_a: 1,
  month_b: 12,
  day_a: 1,
  day_b: 31,
};
const authors = ['毛泽东', '江青', '王洪文', '张春桥', '姚文元'];
export default function Articles({ articles }: { articles: Article[] }) {
  const [tipsAnchorEl, setTipsAnchorEl] = useState<HTMLElement | null>(null);
  const [dateFilter, setDateFilter] = useState<DateFilter>(default_date_filter);
  const [tagFilters, setTagFilters] = useState<
    {
      name: string;
      type: TagType;
    }[]
  >([]);
  const [authorFilters, setAuthorFilters] = useState<string[]>([]);
  const [dateFilterDialog, setDateFilterDialog] = useState<
    {
      show: boolean;
    } & DateFilter
  >({
    show: false,
    ...default_date_filter,
  });

  const showTips = (event: React.MouseEvent<HTMLElement>) => {
    setTipsAnchorEl(event.currentTarget);
  };

  const hideTips = () => {
    setTipsAnchorEl(null);
  };

  const filtered_articles = useMemo(() => {
    return articles
      .filter((i) => date_include(i, dateFilter))
      .filter((i) =>
        authorFilters.length
          ? authorFilters.reduce<boolean>(
              (m, j) => m || !!i.authors.find((k) => k.name === j),
              false,
            )
          : true,
      )
      .filter((i) =>
        tagFilters.length
          ? tagFilters.reduce<boolean>(
              (m, j) =>
                m ||
                !!i.tags.find((k) => k.type === j.type && k.name === j.name),
              false,
            )
          : true,
      );
  }, [articles, dateFilter, tagFilters, authorFilters]);

  return (
    <>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Dialog
        onClose={() => setDateFilterDialog((s) => ({ ...s, show: false }))}
        open={dateFilterDialog.show}
      >
        <DialogTitle>时间过滤器</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <Typography variant="subtitle1">开始时间</Typography>
            <TextField
              label="年"
              value={dateFilterDialog.year_a}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  year_a: to_number(e.target.value),
                }))
              }
            />
            <TextField
              label="月"
              value={dateFilterDialog.month_a}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  month_a: to_number(e.target.value),
                }))
              }
            />
            <TextField
              label="日"
              value={dateFilterDialog.day_a}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  day_a: to_number(e.target.value),
                }))
              }
            />
            <Typography variant="subtitle1">结束时间</Typography>
            <TextField
              label="年"
              value={dateFilterDialog.year_b}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  year_b: to_number(e.target.value),
                }))
              }
            />
            <TextField
              label="月"
              value={dateFilterDialog.month_b}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  month_b: to_number(e.target.value),
                }))
              }
            />
            <TextField
              label="日"
              value={dateFilterDialog.day_b}
              size="small"
              onChange={(e) =>
                setDateFilterDialog((d) => ({
                  ...d,
                  day_b: to_number(e.target.value),
                }))
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDateFilterDialog((s) => ({ ...s, show: false }))}
          >
            取消
          </Button>
          <Button
            onClick={() => {
              const d = dateFilterDialog;
              const filter: DateFilter = {};
              if (d.year_a && d.year_b && d.year_b >= d.year_a) {
                filter.year_a = d.year_a;
                filter.year_b = d.year_b;
              }
              if (
                d.month_a &&
                d.month_b &&
                d.month_a >= 1 &&
                d.month_a <= 12 &&
                d.month_b >= 1 &&
                d.month_b <= 12
              ) {
                filter.month_a = d.month_a;
                filter.month_b = d.month_b;
              }
              if (
                d.day_a &&
                d.day_b &&
                d.day_a >= 1 &&
                d.day_a <= 31 &&
                d.day_b >= 1 &&
                d.day_b <= 31
              ) {
                filter.day_a = d.day_a;
                filter.day_b = d.day_b;
              }
              if (filter.year_a && filter.month_a && filter.day_a) {
                setDateFilterDialog((s) => ({
                  ...s,
                  show: false,
                }));
                setDateFilter((d) => filter);
              }
            }}
            autoFocus
          >
            确定
          </Button>
        </DialogActions>
      </Dialog>
      <Stack
        p={2}
        spacing={2}
        sx={{ position: 'relative', flex: 1, height: '100%' }}
      >
        <Stack direction="row">
          <Grid container spacing={1}>
            <Grid item>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  时间范围：
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<SettingsIcon fontSize="small" />}
                    onClick={() =>
                      setDateFilterDialog((d) => ({ ...d, show: true }))
                    }
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
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  文章类型：
                </Typography>
                <Stack direction="row" spacing={1}>
                  {(
                    Object.keys(articleTypeToCN) as Array<
                      keyof typeof ArticleType
                    >
                  ).map((i) => {
                    const found = tagFilters.find(
                      (j) => j.type === TagType.articleType && j.name === i,
                    );
                    return (
                      <Chip
                        key={i}
                        label={articleTypeToCN[i]}
                        variant={found ? 'filled' : 'outlined'}
                        color={found ? 'primary' : 'default'}
                        onDelete={
                          found
                            ? () =>
                                setTagFilters((f) =>
                                  f.filter(
                                    (j) =>
                                      !(
                                        j.type === TagType.articleType &&
                                        j.name === i
                                      ),
                                  ),
                                )
                            : undefined
                        }
                        onClick={(e) => {
                          if (found) {
                            setTagFilters((f) =>
                              f.filter(
                                (j) =>
                                  !(
                                    j.type === TagType.articleType &&
                                    j.name === i
                                  ),
                              ),
                            );
                            return;
                          }
                          setTagFilters((f) => [
                            ...f,
                            { name: ArticleType[i], type: TagType.articleType },
                          ]);
                        }}
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1">作者：</Typography>
                <Stack direction="row" spacing={1}>
                  {authors.map((i) => {
                    const found = authorFilters.find((j) => j === i);
                    return (
                      <Chip
                        key={i}
                        label={i}
                        variant={found ? 'filled' : 'outlined'}
                        color={found ? 'primary' : 'default'}
                        onDelete={
                          found
                            ? () =>
                                setAuthorFilters((f) =>
                                  f.filter((j) => j !== i),
                                )
                            : undefined
                        }
                        onClick={(e) => {
                          if (found) {
                            setAuthorFilters((f) => f.filter((j) => j !== i));
                            return;
                          }
                          setAuthorFilters((f) => [...f, i]);
                        }}
                      />
                    );
                  })}
                  <Chip
                    label={'更多'}
                    onClick={(e) => {
                      alert('使用高级检索，在表格对应列中添加过滤器');
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
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
            <img src="/images/filter.png" width="200" />
            <Typography sx={{ p: 2 }}>
              可在每一列右上角添加筛选器进行高级检索
            </Typography>
          </Popover>
          <Button
            onClick={showTips}
            onMouseEnter={showTips}
            onMouseLeave={hideTips}
            sx={{ width: 120, display: { xs: 'none', md: 'flex' } }}
          >
            高级检索
          </Button>
        </Stack>
        <Stack sx={{ flex: 1, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row.id}
            initialState={{
              sorting: {
                sortModel: [{ field: 'dates', sort: 'asc' }],
              },
              filter: {
                filterModel: {
                  items:
                    typeof location !== 'undefined' && location.search
                      ? location.search.startsWith('?tag=')
                        ? [
                            {
                              columnField: 'tags',
                              value: decodeURIComponent(
                                location.search.split('=')[1],
                              ),
                            },
                          ]
                        : location.search.startsWith('?author=')
                        ? [
                            {
                              columnField: 'authors',
                              value: decodeURIComponent(
                                location.search.split('=')[1],
                              ),
                            },
                          ]
                        : []
                      : [],
                },
              },
            }}
            localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
            getRowHeight={() => 'auto'}
            rows={filtered_articles}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            disableSelectionOnClick
          />
        </Stack>
      </Stack>
    </>
  );
}

Articles.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
