import Vue from 'vue';
import App from './App.vue';
import VueClipboard from 'vue-clipboard2'
import titleMixin from './mixins/titleMixin';
import { Inkline } from '@inkline/inkline/src';
import * as components from '@inkline/inkline/src/components';
import '@inkline/inkline/src/inkline.scss';
import './icons.js';
import router from './router'

Vue.use(Inkline, { components });
// VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
Vue.mixin(titleMixin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
