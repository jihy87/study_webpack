var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none', //production(배포), development(개발), none
  entry: './index.js',
  output: {
    filename: 'bundle.js', //[name][chunkhash].js
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      },
      // {
      //   test: /\.css$/, //css확장명을 가진 파일을 대상으로
      //   use: ['style-loader', 'css-loader'] //해당 로더를 사용하겠다는 구문. css-loader: css문법을 스크립트로 변환 하여 bundle.js안에 삽입. style-loader: inline으로 css style 선언. [2번째 읽기, 1번째 읽기]
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'scss-loader']
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],
}