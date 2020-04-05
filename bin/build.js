#!/usr/bin/env node

var optimist = require('optimist').usage(
    'sfwiki ' + require('../package.json').version
);

require('./config-optimist')(optimist);

var options = require('./convert-argv')(optimist, optimist.argv);

function processOptions(options) {
    global.cwd = process.cwd();
    switch (options.run) {
        case 'dev':        
            require('../run/dev');
            break;
        case 'build':        
            require('../run/build');
            break;
        case 'build:lib':        
            require('../run/build-lib');
            break;
        case 'test:lib':        
            require('../run/test-lib');
            break;
    }
}

processOptions(options);
