
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const conf = require('./build/doc.conf');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const getIPAdress = require('./build/localIP');
const entryDoc = require('./build/entry-doc')

entryDoc()

const port = 8088

conf.plugins.push(new OpenBrowserPlugin({ url: `http://${getIPAdress()}:${port}` }))
//启动服务
new WebpackDevServer(webpack(conf), {
    hot: true,
    disableHostCheck: true,
    headers: {
        'Set-Cookie': []
    },
}).listen(port);

fs.watch(path.resolve(process.cwd(), 'docs/md'), function (event, filename) {
  entryDoc()
});

fs.watch(path.resolve(process.cwd(), 'libs'), function (event, filename) {
  entryDoc()
});
