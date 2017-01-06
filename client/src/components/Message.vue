<template>
    <div class="message">
        <div class="message-content" :class="[data.from ? 'from-' + data.from : '']">
            <div class="message-sender" v-if="data.from !== 'system'">{{data.from === 'myself' ? 'Me' :
                data.userName}}
            </div>
            <div v-if="data.from === 'system'" class="message-system">{{data.msg}}</div>
            <div class="message-body" v-else>
                {{data.msg}}
                <span v-text="data.status" v-show="data.status !== 'OK'"></span>
            </div>
            <div class="message-time">{{data.dateTime}}</div>
        </div>
    </div>
</template>
<style scoped>
    .message {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px 0;
        flex-shrink: 0;
    }

    .from-others .message-time {
        text-align: end;
    }

    .message-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .message-body {
        max-width: 66%;
        padding: 12px 16px;
        margin: 10px 0;
        border: 1px solid #acebac;
        border-radius: 1px;
        font-size: 18px;
        word-wrap: break-word;
        text-wrap: normal;
        color: #333;
        background-color: #fff;
    }

    .from-myself {

    }

    .from-system {
        align-items: center;
    }

    .from-others {
        align-items: flex-end;
    }

    .message-time {
        font-size: 10px;
        color: #ababab;
    }

    .message-system {
        padding: 4px 10px;
        margin-bottom: 5px;
        border: 1px solid #fcfcfc;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        background-color: #aaa;
        color: #fcfcfc;
    }

    .message-sender {
        font-size: 10px;
        color: #555;
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
