const webpack = require('webpack');

module.exports = {
    context: __dirname+'/js',
    entry: ['bootstrap', './src/index.js'],
    output: {
        path: __dirname+'/js',
        publicPath: '/js/',
        filename: "index.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.woff2?/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf/, loader: "file-loader" },
            { test: /\.eot/, loader: "file-loader" },
            { test: /\.svg/, loader: "file-loader" },
            { test: /\.glsl/, loader: "webpack-glsl-loader" },
            { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin(
            {
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Tether: "tether",
                "window.Tether": "tether"
            }
        )
    ]
};
