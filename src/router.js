import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Jobs from './pages/Jobs.vue';
import Team from './pages/Team.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
    ]
});


export { router };