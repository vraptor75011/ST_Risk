const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    //    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.graphql?$/,
        use: [
          {
            loader: 'webpack-graphql-loader',
            options: {
              //
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    //    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.env', to: '.env', toType: 'file' }],
    }),
  ],
};
