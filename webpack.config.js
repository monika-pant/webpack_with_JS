const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  
  entry: {
    app: './src/js/app.js',
    print: './src/js/print.js',
    login:'./src/js/login.js'
  }, 
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    
  },
  devtool: 'inline-source-map',
  plugins: [
        //  new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
          filename:'index.html',
          template:'src/index.html'
        }),
        new HtmlWebpackPlugin({
          filename:'login.html',
          template:'src/login.html',
          chunks:['login']
        })
        ],
  output: {
    
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
        //    /i am not bundling images and directly usig them from 'src' folder
           {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                       'file-loader'
                     ]
                   }
         ]
     }
};