const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const join = require('path').join

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',
		'./web/js/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: join(__dirname, 'web/assets'),
		publicPath: '/assets/'
	},

	devServer: {
		contentBase: join(__dirname, 'web'),
		port: 9000,
		stats: {
			colors: true
		}
	},

	resolve: {
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				}),
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new HotModuleReplacementPlugin(),
		new ExtractTextPlugin('style.css')
	]
}