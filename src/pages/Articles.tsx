import Stack from '@mui/material/Stack';
import loadable from '@loadable/component';
import Loading from '../components/Loading';

const LoadableComponent = loadable(() => import('../components/ArticleList'), {
  fallback: <Loading/>
});

export default function Articles() {
  return (
    <Stack sx={{ flex: 1 }}>
      <LoadableComponent />
    </Stack>
  );
}
