/**
 * Created by liuqi453 on 12/29/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import connect from './io/init'

Vue.use(VueRouter)

connect()

const router = new VueRouter({
    routes
})


new Vue({
    render (h) {
        return (
            <router-view></router-view>
        )
    },
    router
}).$mount('#app')