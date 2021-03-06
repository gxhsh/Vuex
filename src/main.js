// 导入vue 第三方包
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入和vue无关的第三方包
import 'normalize.css'
import axios from 'axios'
import './less/index.less'
import './css/style.css'


// 导入自己写的模块
//路由实例
import router from './router' 

//根组件
import App from './App'  

//接口配置
import api from './js/api-config.js';

//统一use启动vue插件
Vue.use(Vuex)
Vue.use(ElementUI)

//全局样式
// import '@less/index.less'

// 统一添加
axios.defaults.baseURL = 'http://localhost:8899'; // 一配置, 以后所有的请求就会自动使用这个域名
axios.defaults.withCredentials=true; // 浏览器有个安全机制, 如果是跨域请求, 浏览器是不会把本地cookie信息携带过去的
//统一扩展Vue原型
Vue.prototype.$http = axios;
Vue.prototype.$api=api;

// 导入自己封装的vue插件
import MyFilter from './filter'
Vue.use(MyFilter);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
