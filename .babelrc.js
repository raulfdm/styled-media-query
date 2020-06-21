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
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
          "@babel/preset-typescript",
        ],
      ],
    },
  },
};
