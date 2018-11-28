import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'

Vue.use(Router);


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/form',
    //     name: 'forms',
    //     component: Forms
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import('./views/About.vue')
    // }
]

export default new Router({
    routes,
    // strict: process.env.NODE_ENV !== 'production',
})