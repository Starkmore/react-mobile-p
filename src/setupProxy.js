const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://api.sqydt.easysq.cn",
      changeOrigin: true,
      pathRewrite: {
        "/api": ""
      }
    })
  );
};
