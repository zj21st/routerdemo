import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LogoutComponent from '@/components/logout'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/logout',
      name: 'LogoutRouter',
      component: LogoutComponent
    }, {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
