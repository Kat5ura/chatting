<template>
    <div class="sender">
        <input v-model="msg" placeholder="type in a message..." type="text">
        <button @click="handleSend">Send</button>
    </div>

</template>
<style scoped>
    .sender {

    }
</style>
<script>

    let uuid = require('uuid')

    export default{
        data () {
            return {
                msg: ''
            }
        },

        methods: {
            handleSend () {
                if (this.msg) {
                    this.$emit('send-message', {
                        uuid: uuid.v4(),
                        msg: this.msg,
                        dateTime: new Date().toLocaleDateString()
                    })
                    this.msg = ''
                }
            }
        }
    }

</script>