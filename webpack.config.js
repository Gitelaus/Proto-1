const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                query:{
                    presets: ['react', 'es2015']
                },
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/modules/common/common.scss',
                        }
                    }]
                })
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
    plugins:[HtmlWebpackPluginConfig,
        new ExtractTextPlugin({filename:"styles.css",
            allChunks: true})]
}
