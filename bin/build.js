#!/usr/bin/env node

var optimist = require('optimist').usage(
    'sfnode ' + require('../package.json').version
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
    }
}

processOptions(options);
