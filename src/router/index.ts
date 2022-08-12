import {createRouter, createWebHashHistory} from 'vue-router'

import Index from '../view/index.vue'

const routes = [
    {
        path: '/',
        component: Index
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router