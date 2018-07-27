const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); // eslint-disable-line

module.exports = {
  configureWebpack: {
    plugins: [
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/',
        },
        {
          reload: false,
        },
      ),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        // so this assumes you have a file named `src/assets/styles/custom.scss`
        data: `@import "@/assets/styles/custom.scss";`,
      },
    },
  },
};
