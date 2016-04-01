var path = require('path')
var webpack = require('webpack')

module.exports = {
    //TODO: devtool cheap-module-eval-source-map은 멀까? 
    devtool: 'cheap-module-eval-source-map',
    //TODO: webpack-hot-middleware도 알필요가 있다. 이후 서버 방식에 대해서도 생각이 필요하다.
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css?$/,
                loaders: ['style', 'raw'],
                include: __dirname
            }
        ]
    }
}
