import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/test.less';
import './assets/style/test.scss';
//Vue.use() 全局api 使用第三方插件
Vue.use(ElementUI);

new Vue({
    router,
    // store,
    render: h => h(App)
  }).$mount('#app')