import  '../src/css/index.css'
import Vue from 'vue'
import App from './components/App.vue' //把声明的组件对象拿过来
import router from './router'//路由规则的对象
import  axios from  'axios'
import  vueResource from 'vue-resource'
import login from  './components/login.vue'
//核心文件 全局的配置都在这个文件里面配置
Vue.prototype.$axios=axios
Vue.use(vueResource)
new Vue({
    methods:{
        show(){
            axios.get()
        }
    },
    router,
    render:h => h(App)
}).$mount("#app")