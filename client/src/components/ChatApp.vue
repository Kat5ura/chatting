<template>
    <div class="chat-app">
        <Sender @send-message="handleSendMessage"/>
        <Messager :messages="messages"></Messager>
    </div>
</template>
<style scoped>
    .chat-app {

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
                messages: [],
                sender: 'Sender'
            }
        },

        components: {
            Sender,
            Messager
        },

        created () {
            var vm = this
            socket.on('receive message', function (msg) {
                msg.status = 'OK'
                vm.messages.unshift(msg)
            })
        },

        methods: {
            handleSendMessage (msg) {
                console.log(msg)
                let vm = this
                msg.from = vm.sender
                msg.status = 'Sending...'
                vm.messages.unshift(msg)
                socket.emit('send message', msg, function () {
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
