import type { NextPage } from 'next';
import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import txt from '../README.md';
import Stack from '@mui/material/Stack';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>和谐历史档案馆 Banned Historical Archives</title>
      </Head>
      <Stack
        className={'markdown'}
        p={2}
        style={{ overflow: 'scroll', flex: 1, height: '100%' }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {txt as unknown as string}
        </ReactMarkdown>
      </Stack>
    </>
  );
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
