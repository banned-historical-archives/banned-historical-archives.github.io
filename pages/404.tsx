import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useState } from 'react';

export default function Custom404() {
  useEffect(() => {
    const id = location.href
      .split('?')[0]
      .replace('index.html', '')
      .split('/')
      .filter((i) => i)
      .slice(-1)[0];
    if (!id) return;
    location.href = '/article?id=' + encodeURIComponent(id);
  }, []);
  return <h1>404 - Page Not Found</h1>;
}

Custom404.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
