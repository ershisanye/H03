const path=require('path')
const webpack  = require('webpack')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: './src/index.js', // 入口
    output: {   // 出口
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer:{
      open:true,
     //port:3000,
      //contentBase:'./src',
      hot:true,
    },
    //插件
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin()
  ],
  module:{//使用外部模块
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
    //   {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
    //   {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
    //   {test:/\.(png|svg|jpg|gif)$/,use:['url-loader']},
      {test:/\.vue$/,use:['vue-loader']}
    ]

  }
};