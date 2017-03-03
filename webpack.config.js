var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist/js/',
        filename: 'scripts.min.js'
    },
    plugins: production ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ] : []
};
