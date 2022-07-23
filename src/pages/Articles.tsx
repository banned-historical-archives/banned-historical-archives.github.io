import Stack from '@mui/material/Stack';
import loadable from '@loadable/component';

const LoadableComponent = loadable(() => import('../components/ArticleList'), {
  fallback: <></>
});

export default function Articles() {
  return (
    <Stack sx={{ flex: 1 }}>
      <LoadableComponent />
    </Stack>
  );
}
