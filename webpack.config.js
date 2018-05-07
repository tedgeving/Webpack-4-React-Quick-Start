const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

// const CleanWebpackPlugin = require('clean-webpack-plugin') const
// HtmlWebpackPlugin = require('html-webpack-plugin'); const ReactRootPlugin =
// require('html-webpack-react-root-plugin')

const webpackConfig = {

    plugins: [
        new HtmlWebPackPlugin({template: "./src/index.html", filename: "./index.html"}),
        new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css"})

    ],
    module: {
        rules: [
            {
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 9000

    },
    devtool: 'eval'
}

module.exports = webpackConfig