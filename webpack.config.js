const webpack = require('webpack')
const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]'
                        },
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'file-loader'

            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 6060,
        open: true,
        contentBase: './public'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new miniCssExtractPlugin({
            filename: './public/style.css'
        }),
        new htmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ]

}