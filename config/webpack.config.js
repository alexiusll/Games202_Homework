/*
 * @Author: linkenzone
 * @Date: 2021-12-07 19:28:03
 * @Descripttion: Do not edit
 */

const path = require("path");

const entry = path.join(__dirname, "../src/index.tsx");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "../public/index.html"),
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  entry: { index: entry },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },

  // 此选项控制是否生成，以及如何生成 source map。
  devtool: "source-map",

  // loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。
  module: {
    rules: [
      // less loader
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          // loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      // css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // ts tsx loader
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        // options: {
        //   useBabel: true,
        //   babelCore: "@babel/core", // needed for Babel v7
        // },
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: "source-map-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin 将生成一个 HTML 文件。
    htmlWebpackPlugin,
  ],
  // 这些选项能设置模块如何被解析。
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: [".ts", ".tsx", ".js", ".json"],
    // 当正常解析失败时，重定向模块请求
    // fallback: {
    //   fs: false,
    //   path: false,
    //   zlib: false,
    // },
  },
  // 开发服务器(devServer)
  devServer: {
    host: "localhost",
    port: 3001,
    // 告诉服务器内容的来源。仅在需要提供静态文件时才进行配置
    // contentBase: "./dist",
  },
};
