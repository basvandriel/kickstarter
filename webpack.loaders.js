module.exports = [
    [
        {
            test: /\.html$/,
            loader: 'html-loader'
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
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: 'file-loader?name=[name].[ext]'
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/, exclude: /images/,
            use: [{
                loader: 'file-loader',
                query: { name: '[name].[hash].[ext]', outputPath: 'fonts/' }
            }],
        }
    ]
];