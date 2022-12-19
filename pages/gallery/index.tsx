import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Head from 'next/head'
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
import { init } from '../../backend/data-source';
import ImageEntity from '../../backend/entity/image';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DiffViewer } from '../../components/DiffViewer';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const AppDataSource = await init();
  const images = await AppDataSource.manager.find(ImageEntity, {
    relations: {
      tags: true,
    },
  });
  return {
    props: {
      images: JSON.parse(JSON.stringify(images)),
    },
  };
};

export default function Gallery({ images }: { images: ImageEntity[] }) {
  return (
    <Stack p={2} sx={{ height: '100%', overflow: 'scroll' }}>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 1 }}>
        图库
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        ...
      </Typography>
      {images.map((i) => (
        <img
          key={i.id}
          src={i.url}
          alt={i.name}
        />
      ))}
    </Stack>
  );
}

Gallery.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
