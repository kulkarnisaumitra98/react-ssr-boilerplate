const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const browserConfig = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: __dirname,
		filename: './public/bundle.js',
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
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
						options: { plugins: [autoprefixer()] },
					},
				],
			},
			{
				test: /js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: { presets: ['react-app'] },
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'public/css/[name].css',
		}),
	],
};


module.exports = [browserConfig];
