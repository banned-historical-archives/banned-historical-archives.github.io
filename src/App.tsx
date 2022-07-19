import { Link, Route, Routes } from 'react-router-dom'
import ArticleComponent from './components/Article';
import Stack from '@mui/material/Stack';

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager('./pages/*.tsx')

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  return {
    name,
    path: name === 'Home' ? '/' : name === 'Article' ? `/${name.toLowerCase()}/:id` : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
})

export default function App() {
  return (
    <Stack sx={{ position: 'absolute', height: '100%', width: '100%' }} direction="column">
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          if (path == '/articles') {
            return (
              <Route path={path} element={<RouteComp />}>
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