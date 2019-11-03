const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
  app.use(
    "/api",
    proxy({
    target: "http://localhost:8080",
      changeOrigin: true,
    //   pathRewrite: {
    //     "^/api": "/api/"
    //   }
    })
  );

  app.use(morgan('combined'));
};