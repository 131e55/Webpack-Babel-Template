module.exports = {
  entry: {
    page1: ["babel-polyfill", "./src/page1.js"],
    page2: ["babel-polyfill", "./src/page2.js"],
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].js"
  },
  module : {
    rules : [
      {
        test: /\.css/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ["env", {"modules": false}]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map"
}

