const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            fallback: 'file-loader'
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
        open: true,
        static: path.resolve(__dirname, "./dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "SeederApp",
            filename: "index.html",
            template: path.resolve(__dirname, "./public/index.html"),
        }),
    ],
};
