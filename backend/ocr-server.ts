import express from 'express';
import ocr from './ocr';
import { join } from 'path';
import { unlinkSync } from 'fs';
import cors from 'cors';
import timeout from 'connect-timeout';
const app = express();
app.use(cors());
app.use(timeout('500s'));

const tempFile = join(process.cwd(), './paddle/temp/lock.jpg');
try {
  unlinkSync(tempFile);
} catch (e) {}

app.get('/', async (req, res) => {
  const path = (req.query.img_path as string).split('/books/')[1];
  console.log(path);

  const r = await ocr(path);
  console.log('done', path);
  res.json({
    ocr_result: r,
  });
});

const port = 8099;
app.listen(port, () => {
  console.log(`OCR server listening on port ${port}`)
})