const fs = require('fs');
const path = require('path');

// const paks = path.resolve(__dirname, '../docs/pc/md');
const paks = path.resolve(process.cwd() + '/docs/md');

module.exports = function() {
  const comps = fs.readdirSync(paks);

  return comps.filter(comp => {
      return fs.statSync(path.resolve(paks, comp)).isFile()
  }).map(name => {
      return name.replace('.md', '')
  })
};
