import express from 'express';
import ocr from './ocr';
import { unlinkSync } from 'fs';
import cors from 'cors';
import timeout from 'connect-timeout';
const app = express();
app.use(cors());
app.use(timeout('500s'));

app.get('/', async (req, res) => {
  const path = (req.query.img_path as string).split('/books/')[1];
  const cache = req.query.cache === 'true';
  console.log(path);

  const r = await ocr({
    img: path,
    cache,
    resized_shape: parseInt(req.query.resize as string),
    // det_model: 'db_mobilenet_v3',
    // det_backend: 'pytorch',
    // det_model: 'db_mobilenet_v3',
    // det_backend: 'pytorch',
  });
  console.log('done', path);
  res.json({
    ocr_result: r,
  });
});

const port = 8099;
app.listen(port, () => {
  console.log(`OCR server listening on port ${port}`)
})