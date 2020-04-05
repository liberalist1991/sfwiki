const path = require('path');
function resolve(p) {
    return path.resolve(__dirname, '../../node_modules', p)
}
module.exports = {
  "presets": [
    [
      resolve("babel-preset-es2015"),
      {
        "modules": "commonjs",
        "loose": true
      }
    ],
    resolve("babel-preset-stage-0")
  ],

  "plugins": [
    resolve("babel-plugin-transform-runtime")
  ]
}
