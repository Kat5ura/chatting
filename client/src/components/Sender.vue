<template>
    <div class="sender">
        <input v-model="msg" @keydown.enter="handleSend" placeholder="type in a message..." type="text">
        <button @click="handleSend">Send</button>
    </div>

</template>
<style scoped>
    .sender {
        padding-bottom: 10px;
        display: flex;
        height: 40px;
        line-height: 40px;
        width: 96%;
        position: fixed;
        border-bottom: 1px skyblue solid;
    }

    .sender input {
        flex: 3;
        border: 1px solid #ffefef;
        padding-left: 15px;
        color: #333;
    }

    .sender input:focus {
        outline: #b8ffe9 1px ridge;
    }

    .sender button {
        flex: 1;
        border: none;
        background-color: #fedecf;
        outline: none;
        color: #fff;
        padding: 0;
    }

    .sender button:active {
        background-color: #ededbe;
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
                        dateTime: new Date().toDateString()
                    })
                    this.msg = ''
                }
            }
        }
    }

</script>