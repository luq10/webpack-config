const express     = require('express');
const proxy       = require('http-proxy-middleware');
const bodyParser  = require('body-parser');
const proxyConfig = require('./proxy.config');

const app = express();

app
  .use(bodyParser.json())
  .use(proxyConfig.url, proxy(proxyConfig.data))
  .use(express.static('dist'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
