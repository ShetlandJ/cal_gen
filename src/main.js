import Vue from 'vue'
import App from './App.vue'

import ICS from 'vue-ics'

Vue.use(ICS, {
  uidDomain: '',
  prodId: '123'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
