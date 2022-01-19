const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname + '/dist'),
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/images/favicon-32x32.png"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
                type: 'asset/resource',
        
            },
        ],
    }
}