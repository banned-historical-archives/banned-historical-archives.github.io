import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useState } from 'react';

export default function Custom404() {
  return <h1>404 - Page Not Found</h1>
}

Custom404.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;