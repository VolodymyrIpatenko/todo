module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.scss$/,
        use: ['css-loader', 'style-loader', 'scss-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
