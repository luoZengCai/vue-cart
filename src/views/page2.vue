<template>
    <div>
        <h3>我是页面2</h3>
        <p>{{id}}</p>
        <p>{{msg}}</p>
        <p>{{$route.query.foo}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                default: ''
            },
            msg: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style scoped>

</style>