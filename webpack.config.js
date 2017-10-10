const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'angular', 
            'angular-aria', 
            'angular-messages', 
            'angular-animate', 
            'angular-material', 
            'material-design-icons/iconfont/material-icons.css'
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        })
        //new UglifyJSPlugin()
    ],
    module: {
        //loaders: [, 
        //     test: /\.js$/,
        //     exclude: /(node_modules)/,
        //     loader: "ng-annotate?add=true!babel"
        //],
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg|ijmap)$/,
                loader: "url-loader?limit=10000"
            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "file-loader"
            // }, 
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};