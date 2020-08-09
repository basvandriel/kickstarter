const fs = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
];

const TEMPLATE_DIR = path.join(__dirname, 'src');
const HTML_REGEX = /.*\.(?html)/;

const views = fs.readdirSync(TEMPLATE_DIR).filter(file => HTML_REGEX.test(file));

views.forEach(page => {
    const filename = (page != 'index' ? page + "/" : "") + 'index.html';

    plugins.push(new HtmlWebPackPlugin({ template: `./src/${page}.js`, filename: filename }));
});

module.exports = plugins;