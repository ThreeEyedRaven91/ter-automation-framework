import express from 'express';
import bodyParser from 'body-parser'
import http from 'http';
import Helper from '../helpers';
import cors from 'cors';
import open from 'open';
import '@babel/polyfill';
import APIController from './controllers';

const server = express();
const port = Helper.config.content.port || 5051;
const appServer = http.createServer(server);

server.use(bodyParser.json());
server.use(cors());
server.use('/', express.static(__dirname + '/../client'));
server.use('/api', APIController);

appServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  open(`http://localhost:${port}`);
});