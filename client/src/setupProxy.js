const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"], //if anyone tries to access /api or /auth/google ,redirect them to http://localhost:5000 and tag on the route
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
