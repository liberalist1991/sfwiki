const {
  VueLoaderPlugin
} = require('vue-loader');
const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.css', '.md']
  },
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
        use: 'babel-loader'
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

    alias: {
      '@PWD': path.resolve(process.cwd())
    }
  }
};
