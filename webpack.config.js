let path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.(tsx?)/i,
            use: ["babel-loader"],
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
  }