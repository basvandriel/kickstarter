const path = require('path');

exports.BUILD_PATH = '/build';

const entries = {
    common: './src/scripts/common.js',
};

const output = {
    path: path.resolve(build_path),
    filename: '[hash:8].js', chunkFilename: '[chunkhash:8].js'
};

const aliases = {
    styles: path.resolve(src_path, 'style/'),
    scripts: path.resolve(src_path, 'scripts/')
};

module.exports = {
    context: path.resolve(__dirname),
    entry: entries,
    output: output,
    resolve: { alias: aliases },
    devServer: { contentBase: path.join(__dirname, BUILD_PATH) },
    plugins: require('./webpack.plugins'),
    module: { rules: require('./webpack.loaders') },
};