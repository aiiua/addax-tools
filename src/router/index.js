import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 统计代码
    // _hmt.push(['_trackPageview', pageURL]) 必须是以"/"（斜杠）开头的相对路径
    if (to.path) window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    next()
})

export default router
