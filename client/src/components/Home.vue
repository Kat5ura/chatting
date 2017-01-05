<template>
    <div class="home">
        this is a home page
        <div class="my-info"></div>
        <div class="users">
            <ul>
                <li v-for="(user, key) in onlineUsers" key="key">{{user.name}}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
    import Sender from './Sender.vue'
    import Messager from './Messager.vue'
    import connect from '../io/init'

    let socket = connect()

    export default{
        data () {
            return {
                onlineUsers: {}
            }
        },

        created () {
            var vm = this

            window.onclose = function () {
                socket.disconnect()
            }

            socket.emit('online users', null)

            socket.on('online users', function (users) {
                vm.onlineUsers = users
            })

        },
    }

</script>
