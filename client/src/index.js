/**
 * Created by liuqi453 on 12/29/16.
 */
import Vue from 'vue'
import App from './components/App.vue'

import connect from './io/init'

connect()

new Vue({
    render (h) {
        return (
            <App />
        )
    }
}).$mount('#app')