import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";

import pkgJson from "./package.json";

const baseConfig = {
  input: "src/index.ts",
  external: ["styled-components"],
};

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    ...baseConfig,
    output: {
      name: "StyledMediaQuery2",
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
      resolve({ extensions }),

      commonjs(),

      babel({
        extensions,
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
      resolve({ extensions }),

      commonjs(),

      babel({
        extensions,
        babelHelpers: "bundled",
      }),
    ],
  },
];
