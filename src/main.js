// import './assets/main.css'

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import App from './App.vue'
// import router from './router'
import './assets/style.css'
import { createRouter, createWebHistory } from 'vue-router'
import home from './components/home.vue'
import HomePage from './components/home/HomePage.vue'
import AddToCart from './components/page/AddToCart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component:  HomePage},
        { path: '/home', component:  home},
        { path: '/addtocart', component:  AddToCart},
    ]
});
const app = createApp(App)
app.use(router)

const vfm = createVfm()
app.use(vfm).mount('#app')
