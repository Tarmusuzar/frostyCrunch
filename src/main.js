import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { createRouter, createWebHistory } from 'vue-router'
import MainDiscover from './components/MainDiscover.vue'
import MainHome from './components/MainHome.vue'
import MainMenu from './components/MainMenu.vue'
import MainRuv from './components/MainRuv.vue'
import ComingSoon from  './components/ComingSoon.vue'
import AdminDashboard from './components/Admin/AdminDashboard'
import PlaceOrder from './components/Admin/PlaceOrder/PlaceOrder'
import Login from './components/Admin/LogIn'
import CreateOwn from'./components/CreateOwn'

const router = createRouter({
    scrollBehavior(_, _3, savedPosition){
        return savedPosition
    },
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: MainHome
        },
        {
            path:'/discover',
            component: MainDiscover
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/createown',
            component: CreateOwn
        },
        {
            path:'/menu',
            component: MainMenu
        },
        {
            path:'/ruv',
            component: MainRuv
        },
        {
            path:'/admin',
            component: AdminDashboard
        },
        {
            path:'/placeOrder',
            component: PlaceOrder
        },
        { 
            path:'/:notFound(.*)',
            component: ComingSoon
        },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
