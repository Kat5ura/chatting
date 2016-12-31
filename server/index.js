/**
 * Created by liuqi453 on 12/28/16.
 */
var path = require('path')

var express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../webpack.config.js')

var uuid = require('uuid')

var app = express()

var server = require('http').Server(app)

var io = require('socket.io')(server)

var compiler = webpack(webpackDevConfig)


app.use('/lib', express.static(
    path.resolve(__dirname, '../client/lib')
))

app.use('/dist', express.static(
    path.resolve(__dirname, '../dist')
))

app.use(webpackDevMiddleware(compiler, {

    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.resolve('client/index.html'))
})


io.on('connection', function (socket) {


    socket.on('user connected', function (data) {
        socket.name = data.name
        socket.emit('system message', {
            uuid: uuid.v4(),
            msg: 'Welcome, Dear ' + socket.name,
            dateTime: new Date().toDateString()
        })
        socket.broadcast.emit('system message', {
            uuid: uuid.v4(),
            msg: socket.name + ' in...',
            dateTime: new Date().toDateString()
        })
    })

    socket.on('new message', function (msg, cb) {
        cb && cb()
        msg.from = 'others'
        msg.sender = socket.name
        socket.broadcast.emit('new message', msg)
    })

    socket.on('disconnected', function () {
        socket.broadcast.emit('system message', {
            uuid: uuid.v4(),
            msg: socket.name + ' out..',
            dateTime: new Date().toDateString()
        })
    })

})

server.listen(5000, function () {
    console.log('listening to 5000 port')
})
