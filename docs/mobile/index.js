import Vue from 'vue';
import VueRouter from 'vue-router';
import FocusDoc, { Progress }  from 'sfui-doc';
import App from './index.vue';
import routes from '../pc/router';
import isMobile from '../scripts/isMobile';
import layoutMd from '../pc/layout-md';

if (window === window.top && !isMobile()) {
   location.href = './index.html';
}

Vue.use(VueRouter).use(FocusDoc);
Vue.component('layoutMd', layoutMd)

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true)
});

Progress(router)

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});

router.afterEach(() => {       
  document.querySelector('.sfui-doc-container>section').scrollIntoView();
})