const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const commonConfig = merge([
//   parts.module(),
//   parts.loadImages({ limit: 15000 }),
// ]);

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
   filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name].[ext]',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',

      }
      // {
      //   test: /\.svg$/,
      //   type: 'asset/resource',
      // }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         context: path.resolve(__dirname,"src/"),
      //         outputPath: 'images',
      //         publicPath: './images/',
      //         useRelativePaths: true
      //       }
      //     }
      //   ]
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'ToDue',
          template: './src/index.html'
      })
  ]
};
// exports.loadImages = ({ limit } = {}) => ({
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg)$/,
//         type: "asset",
//         parser: { dataUrlCondition: { maxSize: 15000 } },
//       },
//     ],
//   },
// });