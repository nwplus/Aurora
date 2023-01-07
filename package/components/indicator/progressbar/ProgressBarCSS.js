"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBarCSS = exports.FilledProgressBarCSS = void 0;
var _index = require("../../colors/index");
const ProgressBarCSS = "\n    height: 20px;\n    width: 320px;\n    background-color: ".concat(_index.colors.grey200, ";\n");
exports.ProgressBarCSS = ProgressBarCSS;
const FilledProgressBarCSS = "\n    background-color: ".concat(_index.colors.midnight300, ";\n    text-align: right;\n    height: 100%;\n    max-width: 100%;\n");
exports.FilledProgressBarCSS = FilledProgressBarCSS;