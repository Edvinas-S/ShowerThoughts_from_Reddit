import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.prototype.moment = moment
