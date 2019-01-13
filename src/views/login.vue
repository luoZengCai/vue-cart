<template>
    <div>
        登录页{{isLogin}}
        <br>
        <button @click="login">去登陆</button>
        <br>
        <p>{{$store.state.globalNum}}</p>
        <p>{{$store.getters.amout}}</p>
        <p>{{globalNum}}</p>
        <p>{{amout}}</p>
        <button @click="handleAddNum">累加</button>
        <button @click="handleAsyncAddNum">异步累加</button>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

    export default {
        methods: {
            async login() {
                await this.$store.dispatch('login')
                if (this.isLogin) {
                    // const redirect = this.$route.query.redirect
                    console.log(this.$route);
                    const {redirect} = this.$route.query
                    if (redirect) {
                        this.$router.push(redirect)
                    } else {
                        this.$router.push('/')
                    }
                } else {
                    alert('登录失败')
                }
            },
            ...mapMutations(['addNum']),
            ...mapActions(['asyncAddNum']),
            handleAddNum(){
                // this.$store.commit('addNum')
                this.addNum()
            },
            handleAsyncAddNum(){
                // this.$store.dispatch('asyncAddNum')
                this.asyncAddNum()
            }
        
        },
        computed: {
            ...mapState(['globalNum']),
            ...mapState(['isLogin']),
            ...mapGetters(['amout']),
        },
    }
</script>

<style scoped>

</style>