import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';

const routes = [
  'index',
  'about',
  'join',
  'product/prod1'
];

const extractLess = new ExtractTextPlugin({
  filename: (getPath) => {
    return getPath('css/[name].[hash].css').replace('css/js', 'css');
  },
  allChunks: true,
});

const clean = new CleanWebpackPlugin('build');

const views = routes.map(route => new HtmlWebpackPlugin({
  filename: `view/${route}.html`,
  template: `${__dirname}/src/view/${route}.html`,
  chunks: ['common', 'js/common/vendor', 'js/global', `js/${route}`],
}));

const entrys = {
  ['js/common/vendor']: ['jquery'],
};
routes.forEach(route => entrys[`js/${route}`] = `${__dirname}/src/js/${route}.js`);
entrys['js/global'] = `${__dirname}/src/js/global.js`;


export default {
  entry: entrys,

  output: {
    filename: '[name].[chunkhash].js',
    path: `${__dirname}/build`,
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://localhost:9000/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'font/[name]-[hash].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'img/[name]-[hash].[ext]',
            },
          }
        ]
      },

      {
        test: require.resolve('jquery'),
        use: {
          loader: 'expose-loader',
          options: '$',
        },
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['ie>=9', '>1% in CN'],
                  }),
                ],
              },
            },
            {
              loader: 'less-loader',
              options: {}
            }
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common/[name].[hash].js',
      minChunks: 2,
    }),
    ...views,
    clean,
    extractLess,
  ],

  devServer: {
    port: 9000,
  },
};
