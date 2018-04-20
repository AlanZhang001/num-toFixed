let buildConfig = {};
var extend = require('extend');
var path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 公共的配置
let commonConfig = {
    entry: {
        index: './src/index.js'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'text-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: '[name]'
    },
    watch: false,
    devtool: ''
};

buildConfig['build'] = extend(true,{},commonConfig,{
    output: {
        filename: '[name].js'
    }
});

buildConfig['build-min'] = extend(true,{},commonConfig,{
    output: {
        filename: '[name].min.js'
    },
    plugins:[
        new UglifyJsPlugin()
    ]
});

module.exports = env => {
    let currentType = env.NODE_ENV;
    return buildConfig[currentType];
};
