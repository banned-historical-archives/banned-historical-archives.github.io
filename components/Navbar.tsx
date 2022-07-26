import BlockIcon from '@mui/icons-material/Block';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useRouter } from 'next/router'

const routes = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '文稿',
    path: '/articles',
  },
  {
    name: '音乐',
    path: '/music',
  },
];

export default function Navbar() {
  const router = useRouter();
  return (
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
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            style={{
              color: 'white',
            }}
            href="/"
            onClick={() => router.replace('/')}
          >
            和谐历史档案馆
          </Typography>

          <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
            {routes.map(({ name, path }) => {
              return (
                <Button
                  key={path}
                  onClick={() => router.replace(path)}
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
  );
}
