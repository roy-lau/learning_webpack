var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin; // 减小js体积

var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        path: __dirname + 'src/js/',
        app: '**/*.js'
    },
    output: {
        // publicPath: __dirname + 'dist/',
        path: __dirname + 'dist/js/',
        filename: '[name]-[chunkhash].js'
    },
    // 加载器(Loaders)
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            exclude: /(node_modules|bower_components)/,  // 不打包那些
            include: 'src/**',                              // 只打包那些
            //  另一种写法
            //  loader: 'babel-loader',
            //  query: {
            //    presets: ['es2015']
            //  }
        }, {
            test: /\.css$/,
            loader: 'style!css?importloaders=1!postcss'
        }, {
            test: /\.less/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.(jpg|png|gif|svg)$/i,
            loader: 'file-loader',
            query:{
                name: 'dist/imgs/[name]-[hash:5].[ext]'
            }
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    postcss: [
        require('autoprefixer')({
            broswers: ['lest 5 verions']  // 给css 添加浏览器前缀（最近5个版本的）
        })
    ],
    plugins: [
        new uglifyJsPlugin({ // 压缩js
            compress: {
                warnings: false // 禁用警告
            },
            sourceMap: true // 不启用sourceMap，默认是false
        }),
        new HtmlwebpackPlugin({ // 在index.html文件中加入title 'Webpack-demos',将打包好的js文件script到HTML中
            title: 'Webpack-demos',
            filename: 'dist/[name].html',  // output
            template: 'src/**/*.html',  // 模板html
            // inject: 'body'   设置script标签插入的位置
        }),
        /* HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件 */
        new webpack.HotModuleReplacementPlugin(),
        /* 使用了 NoErrorsPlugin 后页面中的报错不会阻塞，但是会在编译结束后报错 */
        new webpack.NoErrorsPlugin(),
        new OpenBrowserPlugin({ // 自动打开浏览器
            url: 'http://localhost:8080'
        })
    ]
};
