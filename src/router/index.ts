import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/reg',
            name: 'reg',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Reg.vue'),
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Login.vue'),
        },
        {
            path: '/forgot',
            name: 'forgot',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Forgot.vue'),
        },
        {
            path: '/new-password',
            name: 'new-password',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NewPassword.vue'),
        },
        {
            path: '/incoming-call',
            name: 'incoming-call',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/IncomingCall.vue'),
        },
        {
            path: '/out-call',
            name: 'outgoing-call',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/OutgoingCall.vue'),
        },
        {
            path: '/chat',
            name: 'chat',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Chat.vue'),
            children: [
                {
                    path: ':chatId',
                    name: 'messages',
                    component: () => import('../views/Chat.vue'),
                    children: [
                        {
                            path: ':msgId',
                            name: 'single-message',
                            component: () => import('../views/Chat.vue'),
                        },
                    ],
                },
                {
                    path: 'analytics',
                    name: 'analytics',
                    component: () => import('../views/chat/Analytics.vue'),
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('../views/chat/ChatSettings.vue'),
                    children: [
                        {
                            path: ':slug',
                            name: 'settings',
                            component: () => import('../views/chat/ChatSetting/index.vue'),
                        },
                    ],
                },
                {
                    path: 'general-settings',
                    name: 'generalsettings',
                    component: () => import('../views/chat/GeneralSettings.vue'),
                    children: [
                        {
                            path: ':slug',
                            name: 'generalsettings',
                            component: () => import('../views/chat/GeneralSetting/index.vue'),
                        },
                    ],
                },
            ],
        },
    ],
})

export default router