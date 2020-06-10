<template>
    <div>
        <h1 @click="login">登陆{{msg}}</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    data:function(){
        return {msg:1}
    },
    methods:{
        login(){
            //发送一个异步请求
            // this.$axios.post('a.json',{name:"zs"}).then((re)=>{
            //     console.log("success")
            // }),(re)=>{
            //     console.log("failed")
            // }

            // this.$http.get('a.json').then(re=>{
            //     console.log(re.data.name)
            //     this.msg=re.data.name
            // })

        }
    }
}
</script>