<template>
    <div class="message" :class="{'mine': data.from}">
        <div class="message-content">
            <p>{{data.msg}}</p>
            <p>{{data.dateTime}} ---- {{data.status}}</p>
        </div>
    </div>
</template>
<style scoped>
    .message {

    }

    .message-content {

    }
</style>
<script>
    export default{
        props: {
            data: {
                type: Object,
                required: true
            }
        }

    }
</script>
