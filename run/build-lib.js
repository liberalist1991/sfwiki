
const webpack = require('webpack');
const conf = require('./build/lib.conf');
const entryLib = require('./build/entry-lib')
entryLib()
webpack(conf, (err, stats) => {
    console.log(err || stats.toString({
        chunks: false,
        colors: true
    }));
});
