const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { Template } = require('webpack');

module.exports = {
    mode: 'production',
    // 指定入口
    entry: './src/main.js',
    // 指定出口
    output: {
        path: join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html')
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    devServer: {
        open: true,
        port: 30000
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                // 从后往前解析
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|gif|jpeg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 字节
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6][ext]'
                }
            }, {
                test: /\.js$/i,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}