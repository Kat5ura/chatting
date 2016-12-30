<template>
    <div class="messager" v-if="haveMessage">
        <message v-for="message in messages" :data="message" :key="message.uuid"></message>
    </div>
</template>
<style scoped>
    .messager {
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
