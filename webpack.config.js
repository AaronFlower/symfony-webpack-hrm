const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssTextPlugin = new ExtractTextPlugin('style.[name].css')
const join = require('path').join

module.exports = {
	entry: {
		base: ['./web/js/base.js', 'webpack-dev-server/client?http://localhost:9000', 'webpack/hot/only-dev-server'],
		main: ['./web/js/main.js', 'webpack-dev-server/client?http://localhost:9000', 'webpack/hot/only-dev-server']
	},

	output: {
		filename: '[name].js',
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
				use: cssTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				}),
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new HotModuleReplacementPlugin(),
		cssTextPlugin
		// new ExtractTextPlugin('style.css')
	]
}