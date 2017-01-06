/**
 * Created by liuqi453 on 1/4/17.
 */
import Home from './components/Home.vue'
import ChatSolo from './components/ChatSolo.vue'
import ChatLobby from './components/ChatLobby.vue'
import ChatRoom from './components/ChatRoom.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/lobby',
        component: ChatLobby
    },
    {
        path: '/room',
        component: ChatRoom
    },
    {
        path: '/chat/:userId',
        name: 'chat',
        component: ChatSolo
    }
]

export default routes