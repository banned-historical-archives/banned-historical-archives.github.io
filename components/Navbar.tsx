import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import BlockIcon from '@mui/icons-material/Block';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const routes = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '文档',
    path: '/articles',
  },
  {
    name: '音乐',
    path: '/music',
  },
  {
    name: '图库',
    path: '/gallery',
  },
];

export default function Navbar() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {routes.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              href={item.path}
              target="_blank"
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              sx={{ position: 'relative', ml: 1, transform: 'translateY(4px)' }}
            >
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
            </Stack>
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

            <Search
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="全站搜索"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (process?.env?.LOCAL_SEARCH_ENGINE) {
                      window.open(
                        `${location.protocol}//${location.host}/search?keyword=` +
                          encodeURIComponent(inputValue),
                        '_blank',
                      );
                      return;
                    }
                    window.open(
                      'https://www.google.com/search?q=' +
                        encodeURIComponent(
                          'site:banned-historical-archives.github.io ' +
                            inputValue,
                        ),
                      '_blank',
                    );
                  }
                }}
                value={inputValue}
                onChange={(x) => setInputValue(x.target.value)}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Stack sx={{ flex: 1 }} />
            <Stack
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              direction="row"
              justifyContent="flex-end"
            >
              {routes.map(({ name, path }) => {
                return (
                  <Button
                    key={path}
                    sx={{ color: 'white' }}
                    onClick={() => router.push(path)}
                  >
                    {name}
                  </Button>
                );
              })}
              <Button
                href="https://github.com/banned-historical-archives/banned-historical-archives.github.io/issues"
                target="_blank"
                sx={{ color: 'white' }}
              >
                <GitHubIcon
                  sx={{
                    mr: 1,
                  }}
                />
                讨论
              </Button>
            </Stack>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: {
                  xs: 'flex',
                  sm: 'none',
                },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
