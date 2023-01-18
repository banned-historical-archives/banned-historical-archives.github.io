import { Client } from '@elastic/elasticsearch';
import { readFileSync } from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

const esClient = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: process.env['ES_PASSWORD']!,
  },
  tls: {
    ca: readFileSync(path.join(__dirname, './es_http_ca.crt')),
    rejectUnauthorized: false,
  },
});
export default esClient;
