import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Help from '@/components/Help'
import Edit from '@/components/Edit'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/new',
      name: 'New',
      component: New
    }
  ]
});
