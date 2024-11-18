import { Client } from '@elastic/elasticsearch';
import * as dotenv from 'dotenv';
dotenv.config();

const esClient = new Client({
  node: process.env['ES_URL'] || 'http://localhost:9200',
  auth: {
    username: process.env['ES_USERNAME']! || 'elastic',
    password: process.env['ES_PASSWORD']! || 'password',
  },
});
export default esClient;
