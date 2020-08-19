const path = require('path')

const serverConfig = {
	entry: './index.js',
	mode: 'development',
	target: 'node',
	externals: {
		express: 'express',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'file-loader',
				options: {
					name: 'public/media/[name].[ext]',
					publicPath: (url) => url.replace(/public/, ''),
					emit: false,
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								exportOnlyLocals: true,
							},
						},
					},
				],
			},
			{
				test: [/js$/, /jsx$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: { presets: ['react-app'] },
			},
		],
	},
};

module.exports = [serverConfig];
