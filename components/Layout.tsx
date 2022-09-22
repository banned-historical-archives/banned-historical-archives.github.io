import Stack from '@mui/material/Stack';
import { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';

import Skeleton from '@mui/material/Skeleton';
import 'nprogress/nprogress.css'
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactElement }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Stack
        sx={{ position: 'absolute', height: '100%', width: '100%' }}
        direction="column"
      >
        <Navbar />
        {loading ? (
          <Stack spacing={1} p={2}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rectangular" height={60} />
          </Stack>
        ) : (
          <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {children}
          </main>
        )}
        <Footer />
      </Stack>
    </>
  );
}
