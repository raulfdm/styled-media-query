module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "3",
        useBuiltIns: "entry",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],
};
