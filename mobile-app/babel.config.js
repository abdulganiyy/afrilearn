module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      "nativewind/babel",
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          alias: { "~": "./src" },
          extensions: [".ts", ".tsx"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}
