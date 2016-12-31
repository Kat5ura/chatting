<template>
    <div class="app">
        <ChatApp/>
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
    import ChatApp from './ChatApp.vue'

    export default{
        components: {
            ChatApp
        }
    }

</script>
