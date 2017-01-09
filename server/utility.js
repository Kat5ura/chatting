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

        return {
            room: uuid.v4(),
            users: userList.sort().toString()
        }
    },

    uuid: uuid
}


module.exports = utility

