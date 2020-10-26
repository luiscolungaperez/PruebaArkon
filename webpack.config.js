const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const liveReload = require('webpack-livereload-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { 
              name: 'assets/[hash].[ext]'
            },
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new liveReload()
  ]
}
