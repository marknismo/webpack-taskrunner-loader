module.exports = {
  mode: "production",
  resolve: {
    fallback: {
      util: require.resolve("util/"),
    },
  },
  resolveLoader: {
    alias: {
      "taskrun-loader": require.resolve("./build-utils/taskrun-loader.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.txt$/, // set the file extension to watch
        use: "taskrun-loader",
      },
    ],
  },
  externals: ["child_process"],
};
