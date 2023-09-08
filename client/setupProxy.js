const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the path you want to proxy (without query parameters)
    createProxyMiddleware({
      target: 'https://ipg1.apps.net.pk', // Specify the target URL of the API
      changeOrigin: true,
    })
  );
};
