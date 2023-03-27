const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyFilesWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/Game.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      buffer: false,
      os: false,
      assert: false,
      util: false,
      constants: false,
      child_process: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Biker Vroom",
      template: "src/index.html",
    }),
    new CopyFilesWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
        { from: "src/phaser.min.js", to: "phaser.min.js" },
        { from: "src/Scene1.js", to: "Scene1.js" },
        { from: "src/Scene2.js", to: "Scene2.js" },
        { from: "src/Scene3.js", to: "Scene3.js" },
        { from: "src/Game.js", to: "Game.js" },
      ],
    }),
  ],
  devServer: {
    contentBase: "./src",
  },
};
