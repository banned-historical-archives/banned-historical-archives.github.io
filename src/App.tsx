import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import BlockIcon from '@mui/icons-material/Block';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Home from './pages/Home';
import Music from './pages/Music';
import Articles from './pages/Articles';

import loadable from '@loadable/component';
import Loading from './components/Loading';

const LoadableArticle = loadable(() => import('./components/Article'), {
  fallback: <Loading/>
});

const routes = [
  {
    name: '首页',
    path: '/',
    component: Home,
  },
  {
    name: '文稿',
    path: '/articles',
    component: Articles,
  },
  {
    name: '音乐',
    path: '/music',
    component: Music,
  },
];

export default function App() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{ position: 'absolute', height: '100%', width: '100%' }}
      direction="column"
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div style={{ position: 'relative' }}>
              <BlockIcon
                sx={{
                  width: 20,
                  position: 'absolute',

                  bottom: '50%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
              <MenuBookIcon />
            </div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 1,
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/', { replace: true })}
            >
              和谐历史档案馆
            </Typography>

            <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
              {routes.map(({ name, path }) => {
                return (
                  <Button
                    key={path}
                    onClick={() => navigate(path, { replace: true })}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {name}
                  </Button>
                );
              })}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          if (path == '/articles') {
            return (
              <Route key={path} path={path} element={<RouteComp />}>
                <Route path=":id" element={<LoadableArticle />} />
              </Route>
            );
          }
          return <Route key={path} path={path} element={<RouteComp />}></Route>;
        })}
      </Routes>
    </Stack>
  );
}