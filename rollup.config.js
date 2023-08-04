import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./dist/cjs/index.cjs",
      format: "cjs",
    },
    {
      file: "./dist/es/index.mjs",
      format: "es",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
};
