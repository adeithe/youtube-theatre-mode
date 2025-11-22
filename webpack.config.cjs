const path = require('path');

process.env.TARGET_BROWSER ??= 'firefox';

module.exports = {
	entry: {
		icons: ['./icons/16.png', './icons/32.png', './icons/48.png', './icons/64.png', './icons/128.png'],
		index: ['./src/index.ts', './src/style.css'],
		content_script: './src/injector.ts',
		manifest: './src/manifest.json',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /style\.css$/,
				type: 'asset/resource',
				generator: {
					filename: '[name][ext]',
				},
			},
			{
				test: /manifest\.json$/,
				type: 'asset/source',
				exclude: /node_modules/,
				use: {
					loader: 'wext-manifest-loader',
					options: {
						usePackageJSONVersion: true,
					},
				},
			},
			{
				test: /\.png$/,
				type: 'asset/resource',
				generator: {
					outputPath: 'images',
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	optimization: {
		usedExports: true,
	},
	output: {
		filename: '[name].js',
		assetModuleFilename: '[name][ext][query]',
		path: path.resolve(__dirname, 'dist'),
	},
}
