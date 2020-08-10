const path = require('path');
const fs = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { src_path, build_path } = require('./webpack.config');

const plugins = [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css', chunkFilename: '[id].css'
    }),
    new CopyPlugin({
        patterns: [{ from: path.resolve(src_path, 'robots.txt') }]
    }),
];

const TEMPLATE_DIR = path.join(__dirname, 'src');
const HTML_REGEX = /\.html$/;

const views = fs.readdirSync(TEMPLATE_DIR).filter(file => HTML_REGEX.test(file));

views.forEach(page => {
    plugins.push(new HtmlWebPackPlugin({ template: `./src/${page}`, filename: page, favicon: 'src/favicon.ico' }));
});

module.exports = plugins;