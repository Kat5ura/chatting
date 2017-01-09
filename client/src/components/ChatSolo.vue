<template>
    <div class="app">
        <Chat @send-message="handleSendMsg"/>
    </div>
</template>
<style>
    body {
        margin: 0;
        padding: 0;
    }

    .app {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>
<script>
    import Chat from './Chat.vue'
    import connect from '../io/init'

    let socket = connect()

    export default{
        data () {
            return {
                chatId: ''
            }
        },
        components: {
            Chat
        },

        created () {
            this.chatId = this.$route.params.chatId
        },

        methods: {
            handleSendMsg (message) {
                let msg = message.data,
                    cb = message.cb

                msg.type = 'solo'
                msg.chatId = this.chatId

                socket.emit('new message', msg, function () {
                    cb();
                })
            }
        }
    }

</script>