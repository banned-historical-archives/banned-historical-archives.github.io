import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import * as service from '../service';

import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams, zhCN } from '@mui/x-data-grid';

import type Article from '../../backend/entity/article';
import type Date from '../../backend/entity/date';
import type Type from '../../backend/entity/type';

import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import { ArticleType } from '../../types';
import Typography from '@mui/material/Typography';

function ensure_two_digits(a?: number) {
  if (!a && a!== 0) {
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
      <Link to={`/article/${params.row.id}`} target="_blank">
        {params.row!.title}
      </Link>
    ),
  },
  {
    field: 'authors',
    headerName: '作者',
    minWidth: 150,
    flex: 1,
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.authors.map((i) => i.name).join(','),
  },
  {
    field: 'dates',
    headerName: '时间',
    description:
      '可能包含多个时间点（起草时间，发布时间，子文稿时间等）或时间段',
    minWidth: 150,
    flex: 1,
    sortComparator: (dates_a: Date[], dates_b: Date[]) => {
      const a = dates_a[0];
      const b = dates_b[0];
      const temp = [a, b].map((i) =>
        i
          ? [i.year || '', ensure_two_digits(i.month), ensure_two_digits(i.day)]
              .filter((j) => j)
              .join('/')
          : '9',
      );
      return temp[0] > temp[1] ? 1 : -1;
    },
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
            .map((j) => <Typography variant="caption">{j}</Typography>)
        )}
      </Stack>
    ),
  },
  {
    field: 'types',
    headerName: '文章类型',
    minWidth: 150,
    flex: 1,
    sortComparator: (a: Type[], b: Type[]) => {
      return a.map((i) => i.type).join(',') > b.map((i) => i.type).join(',')
        ? 1
        : -1;
    },
    renderCell: (params: GridRenderCellParams<string, Article>) => (
      <Stack direction="row" spacing={1}>
        {params.row!.types.map((i) => (
          <Chip
            key={i.type}
            label={article_types[i.type]}
            variant="outlined"
            color="default"
          />
        ))}
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
    valueGetter: (params: GridValueGetterParams<Article, Article>) =>
      params.row.tags.map((i) => i.name).join(','),
  },
];

const article_types: { [key in ArticleType]: string } = {
  writings: '文章',
  mail: '书信',
  lecture: '发言',
  talk: '对话',
  declaration: '宣言',
  instruction: '指示',
  comment: '批示',
  telegram: '通讯',
};
enum FilterType {
  include = 'include',
  exclude = 'exclude',
}
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
  year_a: 1913,
  year_b: 1976,
  month_a: 1,
  month_b: 12,
  day_a: 1,
  day_b: 31,
};
export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] =
    useState<DateFilter>(default_date_filter);
  const [typeFilters, setTypeFilters] = useState<ArticleType[]>([
    ArticleType.writings,
  ]);
  const [dateFilterDialog, setDateFilterDialog] = useState<
    {
      show: boolean;
    } & DateFilter
  >({
    show: false,
    ...default_date_filter,
  });

  const filtered_articles = useMemo(() => {
    return articles
      .filter((i) => date_include(i, dateFilter))
      .filter((i) =>
        typeFilters.length
          ? typeFilters.reduce<boolean>(
              (m, j) => m || !!i.types.find((k) => k.type === j),
              false,
            )
          : true,
      );
  }, [articles, dateFilter, typeFilters]);

  useEffect(() => {
    (async () => {
      setArticles(await service.get_articles());
      setLoading(false);
    })();
  }, []);
  return (
    <>
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
      <Stack spacing={1}>
        <Stack direction="row">
          <Stack>时间范围：</Stack>
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<SettingsIcon fontSize="small" />}
              onClick={() => setDateFilterDialog((d) => ({ ...d, show: true }))}
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
        <Stack direction="row">
          <Stack>文章类型：</Stack>
          <Stack direction="row" spacing={1}>
            {(
              Object.keys(article_types) as Array<keyof typeof ArticleType>
            ).map((i) => {
              const found = typeFilters.find((j) => j === i);
              return (
                <Chip
                  key={i}
                  label={article_types[i]}
                  variant={found ? 'filled' : 'outlined'}
                  color={found ? 'primary' : 'default'}
                  onDelete={found ? () => setTypeFilters((f) => f.filter((j) => j !== i)) : undefined}
                  onClick={(e) => {
                    if (found) {
                      setTypeFilters((f) => f.filter((j) => j !== i));
                      return;
                    }
                    setTypeFilters((f) => [...f, ArticleType[i]]);
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
        <Stack sx={{ height: 400, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row.id}
            initialState={{
              sorting: {
                sortModel: [{ field: 'dates', sort: 'asc' }],
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
