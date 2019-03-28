import Vue from 'vue'
import Router from 'vue-router'
import UsersList from '@/components/users-list'
import UserInfo from '@/components/user-info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User list',
      component: UsersList,
    },
    {
      path: '/user/:id',
      name: 'User info',
      component: UserInfo,
    }
  ]
})
