// 项目入口文件
<template>
    
    <div>
        <h1>这是主页面</h1>
        <router-link to="/login">登陆</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data:function(){
        return {}
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    //上面两个指令 一个规定css语法
    //另一个是就是样式作用在当前组件
</style>