import Vue from 'vue'
import VueRouter from 'vue-router'

//路由的配置文件
Vue.use(VueRouter)
var router= new VueRouter({
    routes:[
        {path:"/login",component:resolve=>require(['../components/login.vue'],resolve)},
    ]
})

export default router