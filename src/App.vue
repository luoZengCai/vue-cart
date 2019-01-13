<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-input v-model="inputValue">el-button</el-input>
      <k-input v-model="inputValue"></k-input>
      {{inputValue}}
    </div>
    <hr>
    <div>
      <router-link :to="page1Path">page1</router-link>|
      <router-link to="/home/page2/id/msg?foo=bar">page2</router-link>|
      <router-link to="/login">login</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import kInput from './components/Input.vue';

export default {
  name: 'app',
  components: {
    kInput
  },
  data() {
    return {
      inputValue: 'message'
    }
  },
  computed: {
    page1Path() {
      return `/home/page1/id/${this.inputValue}?foo=qwe`
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  border-bottom: 2px solid green;
}
</style>
