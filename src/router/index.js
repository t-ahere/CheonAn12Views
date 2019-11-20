import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import V1 from '@/components/view1'
import V2 from '@/components/view2'
import V3 from '@/components/view3'
import V4 from '@/components/view4'
import V5 from '@/components/view5'
import V6 from '@/components/view6'
import V7 from '@/components/view7'
import V8 from '@/components/view8'
import V9 from '@/components/view9'
import V10 from '@/components/view10'
import V11 from '@/components/view11'
import V12 from '@/components/view12'
import Signup from '@/components/Signup'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/v1',
      name: 'v1',
      component: V1
    },{
      path: '/v2',
      name: 'v2',
      component: V2
    },{
      path: '/v3',
      name: 'v3',
      component: V3
    },{
      path: '/v4',
      name: 'v4',
      component: V4
    },{
      path: '/v5',
      name: 'v5',
      component: V5
    },{
      path: '/v6',
      name: 'v6',
      component: V6
    },{
      path: '/v7',
      name: 'v7',
      component: V7
    },{
      path: '/v8',
      name: 'v8',
      component: V8
    },{
      path: '/v9',
      name: 'v9',
      component: V9
    },{
      path: '/v10',
      name: 'v10',
      component: V10
    },{
      path: '/v11',
      name: 'v11',
      component: V11
    },{
      path: '/v12',
      name: 'v12',
      component: V12
    },{
      path: '/signup',
      name: 'Signup',
      component: Signup
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
