import Vue from 'vue';
import Router from 'vue-router';
import Lodash from 'lodash';
import store from './store';

Vue.use(Router)

const route = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            index: 1,
            meta: {title:'首页',keyword:'success-list',description:'维修工列表'},
            component: () => import('./views/site/Index.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {title:'登陆',keyword:'success-list',description:'维修工列表'},
            index: 2,
            component:() => import('./views/site/Login.vue')
        },
        {
            path: '/resume',
            name: '简历',
            meta: {title:'简历',keyword:'success-list',description:'维修工列表'},
            index: 3,
            component:() => import('./views/site/Resume.vue')
        }
    ]
});

// 路由守卫
route.beforeEach((to, from, next) => {
    var not_login_routes = [
        '/login', '/', '/index', '/resume'
    ];
    Lodash.forEach(this, function (v) {
        if (v == to.path){
            store.state.activeMenuIndex = v.index;
        }
    });
    // store.state.meta.title = this.title;
    document.title = to.meta.title;
    // document.keywords = store.state.meta.keywords;
    // document.description = store.state.meta.description;
    if (not_login_routes.find(function(value){
        return value == to.path;
    })){
        next();
    }else{
        const isGuest = localStorage.user?false:true
        if (isGuest){
            next('/login')
        }else{
            next();
        }
    }
});

export default route
