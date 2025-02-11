const path = require('path'); // ✅ Required for resolving file paths
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'web',  // Change from 'node' to 'web'
    entry: path.join(__dirname, 'src', 'SnakeGame.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'), // Change from 'lib' to 'dist'
        filename: 'snake.js',
        publicPath: '/', // Important for Netlify routing
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
};
