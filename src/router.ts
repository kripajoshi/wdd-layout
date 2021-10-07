import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from './pages/Home.vue'
import Pricing from './pages/Pricing.vue'
import Interns from './pages/Interns.vue'
import Contact from './pages/Contact.vue'
import Admin from './pages/Admin.vue'


const routes: RouteRecordRaw[] = [
    {
        path: '/', component: Home
    
    },
    {
        path: '/pricing', component: Pricing
    },
    {
        path: '/interns', component: Interns
    },
    {
        path: '/contact', component: Contact
    },
    {
        path: '/admin', component: Admin
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;