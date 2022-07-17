import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as express from 'express';
import { createServer } from 'vite';
import * as api from './backend/api';
import * as bodyParser from 'body-parser';

async function createViteServer() {
  await api.init();
  const app = express();

  app.use(bodyParser.json({ limit: '10kb' }));
  app.use(bodyParser.urlencoded({ limit: '10kb' }));

  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
  // In middleware mode, if you want to use Vite's own HTML serving logic
  // use `'html'` as the `middlewareMode` (ref https://vitejs.dev/config/#server-middlewaremode)
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.post('/articles', api.get_articles);
  app.post('/article', api.get_article);
  app.post('/article_details', api.get_article_details);

  app.use('/static', express.static('resources'))

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const appHtml = await render(url);

      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      // If an error is caught, let Vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(3000);
}

createViteServer();
