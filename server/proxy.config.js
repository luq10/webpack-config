const restream = (proxyReq, req, res, options) => {
  if(req.originalUrl === '/api/login'){
    // Add secret field
    req.body = Object.assign({}, req.body, {
      secret: 123
    });
  }

  // @see: https://github.com/chimurai/http-proxy-middleware/issues/40#issuecomment-249430255
  if (req.body) {
    let bodyData = JSON.stringify(req.body);
    // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
    proxyReq.setHeader('Content-Type','application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    // stream the content
    proxyReq.write(bodyData);
  }
};

module.exports = {
  url: '/api',
  data: {
    target: 'http://localhost:3001',
    changeOrigin: true,
    onProxyReq: restream
  }
};
