const {
  VueLoaderPlugin
} = require('vue-loader');
const path = require('path')
module.exports = {
  resolveLoader: {
    modules: [path.join(__dirname, '../../node_modules')]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }]
    },

    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    },

    {
      test: /\.js$/,
      exclude: /node_modules/,

      use: {
        loader: 'babel-loader',
        options: require('./babel.config')
      }
    },

    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },

    {
      test: /\.styl(us)?$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    },
    {
      test: /\.md$/,
      use: [
        'vue-loader',
        'vue-md-loader'
      ]
    },
    {
      test: /\.(ttf|svg|png|jpeg|jpg)$/i,
      loader: 'url-loader'
    }
    ]
  },

  performance: {
    hints: false
  },

  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [path.join(__dirname, '../../node_modules')],
    alias: {
      '@PWD': path.resolve(process.cwd())
    }
  }
};
