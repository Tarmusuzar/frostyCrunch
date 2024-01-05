import { createApp } from 'vue'

import App from './App.vue'
import firebase from 'firebase/compat/app'; // Import the whole 'firebase' module
import 'firebase/compat/auth'; // Import other Firebase services as needed

const firebaseConfig = {
    
    apiKey: "AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY",
                authDomain: "my-vue-app-8da88.firebaseapp.com",
                databaseURL: "https://my-vue-app-8da88-default-rtdb.firebaseio.com",
                projectId: "my-vue-app-8da88",
                storageBucket: "my-vue-app-8da88.appspot.com",
                messagingSenderId: "460227304896",
                appId: "1:460227304896:web:b60519493132d4ebca7c25",
  };
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
import FetchedOrders from './components/Admin/AdminOrders/FetchedOrders'
import MainReviews from './components/MainReviews'

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
            path:'/reviews',
            component: MainReviews
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
            path:'/NnNKtqfDKRdi59FZOeL',
            component: FetchedOrders
        },
        { 
            path:'/:notFound(.*)',
            component: ComingSoon
        },
    ]
});

const app = createApp(App);
firebase.initializeApp(firebaseConfig); // Use the 'firebase' object directly

app.use(router);
app.mount('#app');
