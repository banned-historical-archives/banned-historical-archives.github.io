import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { diff_match_patch, Diff } from 'diff-match-patch';
import Popover from '@mui/material/Popover';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Layout from '../../components/Layout';
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';

import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import Paper from '@mui/material/Paper';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { GalleryIndexes, PictureMetaData } from '../../types';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DiffViewer } from '../../components/DiffViewer';
import {
  DataGridPro,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  zhCN,
} from '@mui/x-data-grid-pro';
import { ensure_two_digits } from '../../utils';
import ImageTags from '../../components/ImageTags';
import { readFile } from 'fs-extra';
import { join } from 'path';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const res = JSON.parse(
    (await readFile(join(process.cwd(), './gallery_indexes.json'))).toString(),
  ) as GalleryIndexes;
  return {
    props: {
      gallery: res,
    },
  };
};

const ClickToShow = ({ url }: { url: string }) => {
  const [clicked, setClicked] = useState(false);
  return clicked ? (
    <img alt="" src={url} style={{ width: '100%' }} />
  ) : (
    <Button onClick={() => setClicked(true)}>显示</Button>
  );
};
const columns: GridColDef<PictureMetaData>[] = [
  {
    field: 'url',
    headerName: '预览',
    minWidth: 350,
    flex: 1,
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <ClickToShow url={params.row!.url} />
    ),
  },
  {
    field: 'name',
    headerName: '名称',
    minWidth: 350,
    flex: 1,
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <div>{params.row!.name}</div>
    ),
  },
  {
    field: 'description',
    headerName: '描述',
    minWidth: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <div>{params.row.description}</div>
    ),
  },
  {
    field: 'source',
    headerName: '来源',
    flex: 1,
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <div>{params.row.source}</div>
    ),
  },
  {
    field: 'dates',
    headerName: '时间',
    minWidth: 150,
    flex: 1,
    valueGetter: (
      params: GridValueGetterParams<PictureMetaData, PictureMetaData>,
    ) =>
      params.row.year
        ? [
            params.row.year || '----',
            ensure_two_digits(params.row.month, '--'),
            ensure_two_digits(params.row.day, '--'),
          ]
            .filter((j) => j)
            .join('/')
        : '----/--/--',
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <Stack spacing={1}>
        <Typography variant="caption">
          {params.row.year
            ? [
                params.row.year,
                ensure_two_digits(params.row.month),
                ensure_two_digits(params.row.day),
              ]
                .filter((j) => j)
                .join('/')
            : '----/--/--'}
        </Typography>
      </Stack>
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
    valueGetter: (
      params: GridValueGetterParams<PictureMetaData, PictureMetaData>,
    ) => params.row.tags.map((i) => i.name).join(','),
    renderCell: (params: GridRenderCellParams<string, PictureMetaData>) => (
      <div style={{ overflow: 'visible' }}>
        <ImageTags tags={params.row.tags} />
      </div>
    ),
  },
];
export default function Gallery({ gallery }: { gallery: GalleryIndexes }) {
  return (
    <Stack p={2} sx={{ height: '100%', overflow: 'scroll' }}>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 1 }}>
        图库
      </Typography>
      <Stack sx={{ flex: 1, width: '100%' }}>
        <DataGridPro
          getRowId={(row) => row.id}
          localeText={zhCN.components.MuiDataGrid.defaultProps.localeText}
          getRowHeight={() => 'auto'}
          rows={gallery}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          disableSelectionOnClick
        />
      </Stack>
    </Stack>
  );
}

Gallery.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
