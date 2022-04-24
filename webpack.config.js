const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'wallet-connector.js',
		library: 'wallet_connector',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: 'babel-loader',
		}],
	},
	resolve: {
		fallback: {
			"crypto": require.resolve("crypto-browserify"),
			"stream": require.resolve("stream-browserify"),
			"assert": require.resolve("assert"),
			"http": require.resolve("stream-http"),
			"https": require.resolve("https-browserify"),
			"os": require.resolve("os-browserify"),
			"url": require.resolve("url")
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer']
		})
	]
};