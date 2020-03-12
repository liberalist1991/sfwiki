
const webpack = require('webpack');
const conf = require('./build/doc.conf');
const entryDoc = require('./build/entry-doc')
entryDoc()
webpack(conf, (err, stats) => {
    console.log(err || stats.toString({
        chunks: false,
        colors: true
    }));
});
