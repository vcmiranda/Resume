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
      ],
    },
  },
};
