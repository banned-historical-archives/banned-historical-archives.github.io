import BlockIcon from '@mui/icons-material/Block';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useRouter } from 'next/router';
import GitHubIcon from '@mui/icons-material/GitHub';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
  const [inputValue, setInputValue] = useState('');
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
            onClick={() => router.push('/')}
          >
            和谐历史档案馆
          </Typography>

          <Paper
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={inputValue}
              onChange={(x) => setInputValue(x.target.value)}
              placeholder="全站搜索"
            />
            <IconButton onClick={() => {
              window.open(
                'https://bing.com/search?q=' + encodeURIComponent('site: banned-historical-archives.github.io ' + inputValue),
                '_blank',
              );
            }}>
              <SearchIcon />
            </IconButton>
          </Paper>
          <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
            {routes.map(({ name, path }) => {
              return (
                <Button
                  key={path}
                  onClick={() => {
                    router.push(path);
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              );
            })}
            <Button
              href="https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues"
              target="_blank"
              sx={{ my: 2, color: 'white' }}
            >
              <GitHubIcon sx={{ mr: 1 }} />
              讨论
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
