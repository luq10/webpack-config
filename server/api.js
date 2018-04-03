const express     = require('express');
const bodyParser  = require('body-parser');

const app = express();

app
  .use(bodyParser.json())
  .use('*', (req, res, next) => {
    console.log('api get request', req.originalUrl, req.body);
    console.log('api send response');

    res.json({
      a: 1,
      b: 2
    });
  });

app.listen(3001, () => console.log('Example app listening on port 3001!'));
