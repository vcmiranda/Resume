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
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'docs/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
};
