/**
 * Created by liuqi453 on 12/30/16.
 */
let socket = undefined

let Mock = require('mockjs')

const connect = () => {
    if (socket) return socket

    socket = io.connect(SERVER_IP + ':' + PORT)

    const userName = Mock.Random.name()

    socket.emit('user connected', {
        name: userName
    })

    return socket
}

export default connect