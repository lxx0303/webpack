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
        })
    ]
}