var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";
console.log("current env:", isDev ? "dev" : "prod");

module.exports = {
    entry: ['babel-polyfill', './src/main.js'], 
    output: {
        path: path.resolve(__dirname, './dist/battlereport'),
        publicPath: '/battlereport/', 
        chunkFilename: "js/[name].js",
        filename: "js/[name].js",
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        openPage: 'battlereport/',
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(vue|js)$/,
                loader: 'eslint-loader',
                include: [path.join(__dirname, "src")],
                exclude: /node_modules/,
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    fix: true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                // loader自下向上依次解析
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false, // 修复 img [object Module] 问题
                        limit: 8192,
                        name: "img/[name].[ext]"
                    }
                }],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'src/html/index.html',
            chunksSortMode: "none",
        }),
    ]
};