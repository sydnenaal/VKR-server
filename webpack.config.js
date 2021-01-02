const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.ts'],
  target: 'node',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
