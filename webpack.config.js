const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: 'eval',
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ['.js'],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    }
};
