const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import plugin
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'web',  
    entry: path.join(__dirname, 'src', 'SnakeGame.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'snake.js',
        publicPath: '/', 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'), // Use your existing index.html
            filename: 'index.html',
        }),
    ],
};
