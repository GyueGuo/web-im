import Vue from 'vue'
import App from './App'
import router from './routers'
import ajax from 'module_path/ajax'
import custom from 'module_path/custom.js'
import webIM from 'module_path/chat.js'
import * as cookieHandler from 'module_path/cookie'
import notification from 'module_path/notification'
import tranformHistoryMessage from 'module_path/tranformHistoryMessage'
import tranformReceivedMessage from 'module_path/tranformReceivedMessage'
import store from 'module_path/store'

Vue.config.productionTip = false

Vue.use(custom)

Vue.prototype.$ajax = ajax
Vue.prototype.$webIM = webIM
Vue.prototype.$cookie = cookieHandler
Vue.prototype.$notification = notification
Vue.prototype.$tranformHistoryMessage = tranformHistoryMessage
Vue.prototype.$tranformReceivedMessage = tranformReceivedMessage

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
