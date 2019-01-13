<template>
    <div>
        <h3>我是页面1</h3>
        <p>route获取msg：{{$route.params.msg}},id: {{$route.params.id}},foo:{{$route.query.foo}}</p>
        <p>props获取msg：{{msg}},id: {{id}},foo:{{foo}}</p>
        <button @click="goToPage2">go to page2</button>
    </div>
</template>

<script>
    export default {
        props: ['id','msg','foo'],
        methods: {
            goToPage2() {
                this.$router.push({name:'page2',params:{id:'1',msg:'message'},query:{foo:'bar'}})
                // this.$router.push('/home/page2/id/msg?foo=bar')
            }
        },
    }
</script>

<style scoped>

</style>