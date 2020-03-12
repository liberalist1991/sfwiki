import Vue from 'vue';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import "codemirror/theme/neo.css"

import App from './index.vue';
import FocusDoc, { Progress } from 'sfui-doc';
import routes from './router';
import layoutMd from './layout-md';
import isMobile from '../scripts/isMobile';

if (isMobile()) {
    location.href = './mobile.html'
}

Vue.use(VueClipboard)
Vue.use(Vuep /*, { codemirror options } */)
// or Vue.component('Vuep', Vuep)
Vue.component('layoutMd', layoutMd)

Vue.use(VueRouter).use(FocusDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

Progress(router);

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});

router.afterEach(() => {     
  document.querySelector('.sfui-doc__center').scrollTop = 0;
 
  setTimeout(() => {
    resetA()
  }, 100)
})
function resetA() {
  document.querySelectorAll('.sfui-doc-container a').forEach(a => {
    a.setAttribute('target', '_blank')
  })
}

resetA()

