/**
 * Created by liuqi453 on 12/28/16.
 */
var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var webpack = require('webpack')


module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './client/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        // new HtmlwebpackPlugin({
        //     title: 'Webpack-demos',
        //     filename: 'index.html'
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:5000'
        })
    ]
};