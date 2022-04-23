const path = require('path');
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
};