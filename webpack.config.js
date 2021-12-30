const path = require("path");

module.exports = {
	mode: "development",
	// entry: './src/index.js', // 入口文件（简写形式）
	entry: {
		main: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"), // 打包后的路径
		filename: "bundle.js", // 打包后的文件名
        library: "mattTools",
        libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
