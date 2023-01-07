"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessageCSS = exports.InputShortComponentCSS = void 0;
var _colors = require("../../colors");
const InputShortComponentCSS = "\nposition: relative;\n  background-color: transparent;\n  width: 29.6rem;\n  height: 1.375rem;\n  border-radius: 8px;\n  border: 2px solid white;\n  gap: 10px;\n  color: white;\n  outline: none;\n  z-index: 0;\n\n  padding: 13px;\n  font-family: \"HK Grotesk\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.3rem;\n  transition: 0.4s;\n\n  ::placeholder {\n    color: ".concat(_colors.colors.grey500, ";\n  }\n\n  &:hover {\n    border-color: ").concat(_colors.colors.emerald400, ";\n  }\n\n  &:focus {\n    color: ").concat(_colors.colors.emerald400, ";\n    border-color:white;\n  }\n");
exports.InputShortComponentCSS = InputShortComponentCSS;
const errorMessageCSS = "\nfont-size: 1.2rem;\ncolor: ".concat(_colors.colors.red500, ";\nfont-family: \"HK Grotesk\", sans-serif;\nfont-style: normal;\nfont-weight: 400;\npadding: 4px 0;\nmargin-top: 4px;\n");
exports.errorMessageCSS = errorMessageCSS;