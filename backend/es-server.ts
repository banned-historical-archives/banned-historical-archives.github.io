import express from 'express'
import cors from 'cors';
import timeout from 'connect-timeout';
import esClient from './connect-es';

const app = express();
app.use(cors());
app.use(timeout('500s'));

app.get('/', async (req, res) => {
  const keyword = req.query.keyword as string;
  const from = parseInt((req.query.from as string) || '0');
  const size = parseInt((req.query.size as string) || '10');
  if (!keyword || keyword.length < 2) {
    res.json({ ok: false });
    return;
  }
  const search_res = await esClient.search({
    index: 'article',
    from,
    size,
    query: { match: { content: keyword } },
    highlight: {
      fields: { content: {} },
    },
  });
  res.json({
    ok: true,
    ...search_res,
  });
});

const port = 8100;
app.listen(port, () => {
  console.log(`elasticsearch server listening on port ${port}`);
});