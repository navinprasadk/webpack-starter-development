const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // It indicates which module webpack should use to begin building out its internal dependency graph
  entry: {
    // index:'./src/index.js',
    app: "./src/index.js"
    // print: "./src/print.js",
    // another: './src/another-module.js'
  },
  // Source map is used to track down the errors in original source code instead of bundle.js
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    // Cleans the /dist folder before each build
    new CleanWebpackPlugin(["dist"]),
    // It will generate an HTML5 file for you that includes all your webpack bundles in the body using script tag
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
    // UglifyJSPlugin is a minifier, used to drop the dead code from the bundle
    // new UglifyJSPlugin()
    // new webpack.optimize.CommonsChunkPlugin({
    //    name: 'common' // Specify the common bundle's name.
    //  })
  ],
  // It tells webpack where to emit the bundles it creates and how to name these files
  output: {
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    // Loaders enable webpack to process more than just JavaScript files
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
