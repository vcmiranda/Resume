const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
  },
  configureWebpack: {
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
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    resolve: {
      alias: {
        '@': resolve('src/'),
      },
    },
  },
};
