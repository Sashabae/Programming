import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    extends: ["prettier"],
  },
  pluginJs.configs.recommended, eslintConfigPrettier,
];
