import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersIndex from './views/UsersIndex';
import UsersEdit from './views/UsersEdit';
import UsersCreate from './views/UsersCreate';



Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
        path: '/users',
        name: 'users.index',
        component: UsersIndex,
      },
      {
      path: '/users/:id/edit',
      name: 'users.edit',
      component: UsersEdit,
      },
      {
      path: '/users/create',
      name: 'users.create',
      component: UsersCreate,
        },
/*         {
       path: '/404',
        name: '404',
        component: NotFound,
        },
        {
          path: '*',
        redirect: '/404',
      },
*/
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
