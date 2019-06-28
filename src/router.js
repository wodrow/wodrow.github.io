import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/site/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/resume',
            name: 'resume',
            component: function () {
                return import('./views/site/Resume.vue');
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/site/About.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: function () {
                return import('./views/site/Test.vue');
            }
        }
    ]
})
