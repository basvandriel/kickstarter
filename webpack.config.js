const path = require('path');

const BUILD_PATH = path.resolve(__dirname, 'build');

exports.src_path = path.resolve(__dirname, 'src');
exports.build_path = BUILD_PATH;

const entries = {
    common: './src/scripts/common.js',
};

const output = {
    path: BUILD_PATH,
    filename: '[hash:8].js', chunkFilename: '[chunkhash:8].js'
};

const aliases = {
    styles: path.resolve(__dirname, 'src/', 'style/'),
    scripts: path.resolve(__dirname, 'src/', 'scripts/')
};

module.exports = {
    entry: entries,
    output: output,
    resolve: { alias: aliases },
    devServer: { contentBase: path.join(__dirname, BUILD_PATH) },
    plugins: require('./webpack.plugins'),
    module: { rules: require('./webpack.loaders') },
};