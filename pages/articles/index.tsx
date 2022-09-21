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
import Tags from '../../components/Tags';
import Authors from '../../components/Authors';
import { DateFilter, useDateFiletrDialog } from './useDateFilterDialog';
import { useAuthorFilterDialog } from './useAuthorFilterDialog';

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

function ensure_two_digits(a?: number, fallback = '') {
  if (!a && a !== 0) {
    return fallback;
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
          i ? [i.year || '----', ensure_two_digits(i.month, '--'), ensure_two_digits(i.day, '--')]
              .filter((j) => j)
              .join('/')
          : '----/--/--'
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
      params.row.tags.map((i) => i.name).join(','),
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <div style={{ overflow: 'visible' }}>
        <Tags tags={params.row.tags} />
      </div>
    ),
  },
];

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

export default function Articles({ articles }: { articles: Article[] }) {
  const tags_all = useMemo(() => {
    const m = new Map<TagType, Set<string>>();
    articles.forEach((i) =>
      i.tags.forEach((j) => {
        if (!m.get(j.type)) {
          m.set(j.type, new Set());
        }
        m.get(j.type)!.add(j.name);
      }),
    );
    return Array.from(m).map(i => [i[0], Array.from(i[1])]);
  }, [articles]);
  const authors_all = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((i) =>
      i.authors.forEach((j) => j.name && set.add(j.name)),
    );
    return Array.from(set).sort();
  }, [articles]);
  const { DateFilterDialog, dateFilter, showDateFilterDialog } =
    useDateFiletrDialog();
  const {
    authors,
    authorFilter,
    setAuthorFilter,
    AuthorDialog,
    setAuthorDialog,
  } = useAuthorFilterDialog(authors_all);
  const [tipsAnchorEl, setTipsAnchorEl] = useState<HTMLElement | null>(null);
  const [tagFilters, setTagFilters] = useState<
    {
      name: string;
      type: TagType;
    }[]
  >([]);

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
        authorFilter ? !!i.authors.find((k) => k.name === authorFilter) : true,
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
  }, [articles, dateFilter, tagFilters, authorFilter]);

  return (
    <>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      {DateFilterDialog}
      {AuthorDialog}
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
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>
                  文章类型：
                </Typography>
                <Stack direction="row" spacing={1}>
                  {(
                    Object.keys(ArticleType) as Array<
                      keyof typeof ArticleType
                    >
                  ).map((i) => {
                    const found = tagFilters.find(
                      (j) => j.type === TagType.articleType && j.name === i,
                    );
                    return (
                      <Chip
                        key={i}
                        label={ArticleType[i]}
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
                      setAuthorDialog(true);
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
