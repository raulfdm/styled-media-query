import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";

import pkgJson from "./package.json";

const baseConfig = {
  input: "src/index.js",
  external: ["styled-components"],
};

export default [
  {
    ...baseConfig,
    output: {
      name: pkgJson.name,
      file: pkgJson.browser,
      format: "umd",
      sourcemap: true,
      exports: "named",
      globals: {
        "styled-components": "styledComponents",
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
      }),
      nodePolyfills(),
    ],
  },
  {
    ...baseConfig,
    output: [
      {
        file: pkgJson.module,
        format: "es",
        sourcemap: true,
      },
      {
        file: pkgJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],

    plugins: [
      babel({
        babelHelpers: "bundled",
      }),
    ],
  },
];
