import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalNum: 1,
    isLogin: false
  },
  mutations: {
    addNum(state){
      state.globalNum += 1
    },
    login: state => {
      state.isLogin = true
    }
  },
  getters: {
    amout: state => {
      return state.globalNum + '元'
    }
  },
  actions: {
    asyncAddNum({commit}){//形参为store实例
      setTimeout(() => {
        commit('addNum')
      }, 1000);
    },
    login({commit}){
      return new Promise(resolve => {
        setTimeout(() => {
          commit('login')
          resolve(true)
        }, 1000);
      })
    }
  }
})
