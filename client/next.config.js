module.exports = {
  distDir: "build",
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 500;
    return config;
  },
};
