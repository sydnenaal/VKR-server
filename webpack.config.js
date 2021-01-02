const path = require('path')
const pkg = require('./package.json')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { main: './index.js' },
  target: 'node',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js'],
  },
}
