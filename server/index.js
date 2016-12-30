/**
 * Created by liuqi453 on 12/28/16.
 */
var path = require('path')

var express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../webpack.config.js')

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
    socket.emit('news', {msg: 'Hello world'})
    socket.on('new online', function (data) {
        socket.emit('welcome info', {msg: 'Welcome you, Dear ' + data.name})
        socket.broadcast.emit('welcome info', {msg: 'Welcome new guy, Dear ' + data.name})
    })

    socket.on('send message', function (msg, cb) {
        cb && setTimeout(() => cb(), 1500)
        socket.broadcast.emit('receive message', msg)
    })

})

server.listen(5000, function () {
    console.log('listening to 5000 port')
})
