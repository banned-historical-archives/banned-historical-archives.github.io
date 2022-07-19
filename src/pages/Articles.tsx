import Stack from '@mui/material/Stack';
import { Routes, Route, Outlet } from 'react-router';
import ArticleList from '../components/ArticleList';

export default function Articles() {
  return (
    <Stack sx={{ flex: 1 }}>
      <ArticleList />
    </Stack>
  );
}
