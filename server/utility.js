/**
 * Created by liuqi453 on 1/9/17.
 */
var uuid = require('uuid')
var utility = {
    generateRoom: function (userList) {

        var userStr = userList.sort().toString()

        if (userStr in global.CHATROOMS) {
            return {
                room: global.CHATROOMS[userStr],
                users: userList.sort().toString()
            }
        }

        var roomId = uuid.v4()

        global.CHATROOMS[userStr] = roomId

        return {
            room: roomId,
            users: userStr
        }
    },

    uuid: uuid
}


module.exports = utility

