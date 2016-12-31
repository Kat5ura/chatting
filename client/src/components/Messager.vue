<template>
    <div class="messager" v-if="haveMessage">
        <message v-for="message in messages" :data="message" :key="message.uuid"></message>
    </div>
</template>
<style scoped>
    .messager {
        margin-top: 50px;
        padding: 5px 5px 15px 5px;
        display: flex;
        flex-direction: column;
        align-content: stretch;
        justify-content: flex-start;
        overflow: scroll;
        height: 100%;
        background-color: #f8f8f8;
    }
</style>
<script>
    import Message from './Message.vue'

    export default{
        props: {
            messages: {
                type: Array,
                'default': []
            }
        },

        computed: {
            haveMessage () {
                return this.messages.length > 0
            }
        },

        components: {
            message: Message
        }
    }

</script>
