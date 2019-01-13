import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';

Vue.use(Router)

function func({params,query}){
  return {
    id: params.id,
    msg: params.msg,
    foo: query.foo
  }
}
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/page1'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'page1/:id/:msg',
          name: 'page1',
          props: func,
          component: () => import(/* webpackChunkName: "about" */ './views/page1.vue')
        },
        {
          path: 'page2/:id/:msg',
          name: 'page2',
          props: true,
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/page2.vue')
        }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.path !== '/login'){
    if(store.state.isLogin){
      next()
    }else{
      next('/login?redirect='+to.path)
    }
  }else{
    next()
  }
})
export default router
