<template>
    <div class="home">
        this is a home page
        <div class="my-info">
            <div class="head-img">
                <img src="" alt="">
            </div>
            <div class="my-info-body">

            </div>
        </div>
        <ul class="users">
            <li class="user" v-for="(user, key) in onlineUsers" key="key">
                <span>{{user.name}}</span>
                <button @click="chatWith(key)" v-if="myId !== key">Chat</button>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .home {
        padding: 10px 5px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }

    .my-info {
        height: 120px;
        display: flex;
    }

    .head-img {
        width: 120px;
        border: 1px solid #cfcfcf;
    }

    .my-info-body {
        border: 1px solid #cfc;
        flex: auto;
    }

    .users {
        list-style: none;
        margin-top: 10px;
        padding: 0;
        flex: 1;
    }

    .user {
        padding: 5px;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }

    .user button {
        width: 60px;
        border: 1px solid #fce;
        border-radius: 20px;
        background-color: #fff;
        outline: none;
        user-select: none;
    }

    .user button:active {
        background-color: #f9a;
        color: #fff;
    }

</style>
<script>
    import connect from '../io/init'

    let socket = connect()

    export default{
        data () {
            return {
                onlineUsers: {},
                myId: ''
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
                vm.myId = socket.id
            })

        },

        methods: {
            chatWith (key) {
                this.$router.push({
                    name: 'chat',
                    params: {
                        userId: key
                    }
                })
            }
        }
    }

</script>
