import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import BlockIcon from '@mui/icons-material/Block';
import ArticleComponent from './components/Article';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = import.meta.globEager('./pages/*.tsx')

const routes = Object.keys(pages).sort((a, b) => /Home.tsx$/.test(a) ? -1 : 1).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  return {
    name:
      name === 'Home'
        ? '首页'
        : name === 'Articles'
        ? '文稿'
        : name === 'Music'
        ? '音乐'
        : name,
    path:
      name === 'Home'
        ? '/'
        : name === 'Article'
        ? `/${name.toLowerCase()}/:id`
        : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
})

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
            <BlockIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
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
                <Route path=":id" element={<ArticleComponent />} />
              </Route>
            );
          }
          return <Route key={path} path={path} element={<RouteComp />}></Route>;
        })}
      </Routes>
    </Stack>
  );
}