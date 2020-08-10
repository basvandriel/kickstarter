const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
            attributes: {
                urlFilter: (attribute, value, resourcePath) => {
                    console.log("Building stuff for: " + attribute);
                    console.log(value);
                    // The `attribute` argument contains a name of the HTML attribute.
                    // The `value` argument contains a value of the HTML attribute.
                    // The `resourcePath` argument contains a path to the loaded HTML file.

                    if (/\.pdf$/.test(value)) {
                        return true;
                    }

                    return true;
                },
            }
        }
    },
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === 'development' }
        }, 'css-loader', 'sass-loader'],
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }],
    },
    {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file-loader'
    },
    {
        test: /\.pdf$/,
        use: {
            loader: 'file-loader',
        }
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/, exclude: /images/,
        use: [{
            loader: 'file-loader',
            query: { name: '[name].[hash].[ext]', outputPath: 'fonts/' }
        }],
    }
];