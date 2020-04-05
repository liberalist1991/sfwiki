import Vue from 'vue';
import DocConfig from '@PWD/docs/doc.config';
import DocsMap from '../doc-entry';
const uppercamelcase = require('uppercamelcase');

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => DocConfig.navEnter || ''
  }];

  const navs = DocConfig.nav || [];
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.children.forEach(page => addRoute(page));
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
          addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    let {
      path
    } = page;
    if (path) {
      path = path.replace('/', '');
      console.log(uppercamelcase(path))
      const component = DocsMap[uppercamelcase(path)];

      if (!component) {
        return;
      }

      route.push({
        name: path,
        component,
        path: `/${path}`,
        meta: {
          path,
          name: page.title
        }
      });      
    }
  }
  return route;
};

export default registerRoute
