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
    port:8080
  },
  devtool: 'inline-source-map',
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
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
              ]             
          },
          {
            test: /\.html$/,
            use: [
              {
              loader:'file-loader',
              options:{
                name:'[name].[ext]',
                chunks:['name']
              }
            }
          ],
            exclude:path.resolve(__dirname,'src/index.html')
        }
         ]
     },
     plugins: [ 
        new CleanWebpackPlugin(['dist']),   
         new HtmlWebpackPlugin({
           //explicit file name, else it will work as SPA , trating other fle as a template
          filename:'index.html',
          template:'src/index.html',
          /**if we dont specify then it will inject all the bundles into our HTML
          empty chunks array means no bundle to include
          **/
          chunks:['app','print']
        })
        ]
};