<template>
    <div class="chat-app">
        <Sender @send-message="handleSendMessage"/>
        <Messager :messages="messages"></Messager>
    </div>
</template>
<style scoped>
    .chat-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 8px;
        background-color: #f8f8f8;
    }
</style>
<script>
    import Sender from './Sender.vue'
    import Messager from './Messager.vue'
    import connect from '../io/init'

    let socket = connect()

    export default{
        data () {
            return {
                messages: []
            }
        },

        components: {
            Sender,
            Messager
        },

        created () {
            var vm = this

            window.onclose = function () {
                socket.disconnect()
            }

            socket.on('new message', function (msg) {
                msg.status = 'OK'
                console.log('received : ' + msg)
                vm.messages.unshift(msg)
            })

            socket.on('system message', function (msg) {
                msg.from = 'system'
                msg.status = 'OK'
                vm.messages.unshift(msg)
            })
        },

        methods: {
            handleSendMessage (msg) {
                let vm = this
                msg.status = 'Sending...'
                msg.from = 'myself'
                vm.messages.unshift(msg)
                socket.emit('new message', msg, function () {
                    vm.messages.forEach(function (item) {
                        if (item.uuid === msg.uuid) {
                            item.status = 'OK'
                        }
                    })
                })
            }
        }
    }

</script>
