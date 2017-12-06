var nodeExternals = require('webpack-node-externals');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: {
        home:'./src/index'
    },
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }},
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
            ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        watchOptions: {
            poll: 2500
        }
    },
    plugins:[HtmlWebpackPluginConfig]
}
