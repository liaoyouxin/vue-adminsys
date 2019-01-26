import Vue from 'vue'
import Router from 'vue-router'
import Console from '@/pages/ControlView/index'
import Layout from '@/pages/layout'
import User from '@/pages/UserView/user'
import Manage from '@/pages/GoodView/manage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
	  redirect:'/console',
			children:[
				{
					path:'/console',
					component:Console
				},
				{
					path: '/user',
					component: User
				},
				{
					path: '/manage',
					component: Manage
				}
			]
    }
  ]
})
