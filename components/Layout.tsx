import Stack from '@mui/material/Stack';
import { ReactElement } from 'react';
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Stack
        sx={{ position: 'absolute', height: '100%', width: '100%' }}
        direction="column"
      >
        <Navbar />
        <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>{children}</main>
        <Footer />
      </Stack>
    </>
  );
}
