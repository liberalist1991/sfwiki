const fs = require('fs');
const path = require('path');

const libPath = process.cwd() + '/libs';
let hasLibs = fs.existsSync(libPath);
const paks = path.resolve(libPath);

module.exports = function() {
  if (!hasLibs) {
    return []
  }
  const comps = fs.readdirSync(paks);

  return comps.filter(comp => {
      return fs.statSync(path.resolve(paks, comp)).isDirectory()
  })
};
