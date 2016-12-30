/**
 * Created by liuqi453 on 12/30/16.
 */
let socket = undefined

const connect = () => {
    if (socket) return socket

    socket = io.connect('http://127.0.0.1:5000')

    return socket
}

export default connect