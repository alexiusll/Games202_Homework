/*
 * @Author: linkenzone
 * @Date: 2021-12-07 20:15:49
 * @Descripttion: Do not edit
 */

const path = require("path");

module.exports = {
  root: true,
  extends: ["alloy", "alloy/typescript"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    "@typescript-eslint/no-require-imports": 0,
  },
};
