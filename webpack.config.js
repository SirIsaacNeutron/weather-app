const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "[name][hash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    // devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Weather",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
}
