import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import Layout from '../../components/Layout';

export default function Music() {
  return 'music';
}

Music.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
