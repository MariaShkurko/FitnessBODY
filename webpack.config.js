const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        environment: {
            arrowFunction: false
        },
    },
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        compress: true,
        overlay: true,
        writeToDisk: true
    }
};
