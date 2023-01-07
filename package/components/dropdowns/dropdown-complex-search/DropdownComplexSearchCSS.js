"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperCSS = exports.OptionsWrapperCSS = exports.OptionCSS = exports.InputCSS = exports.ErrorMsgCSS = void 0;
var _colors = require("../../colors");
const WrapperCSS = "\n    font-family: 'HK Grotesk', sans-serif;\n    transition: 300ms;\n    position: relative;\n    cursor: pointer;\n";
exports.WrapperCSS = WrapperCSS;
const InputCSS = "\n    font-size: 16px;\n    width: 275px;\n    height: 40px;\n    background: transparent;\n    display: flex;\n    outline: none;\n    padding-left: 12px;\n    border: 2px solid ".concat(_colors.colors.grey500, ";\n    color: ").concat(_colors.colors.grey500, ";\n\n    ::placeholder {\n        color: ").concat(_colors.colors.grey500, ";\n    }\n\n    &:focus {\n        border: 2px solid ").concat(_colors.colors.emerald400, ";\n        color: ").concat(_colors.colors.emerald400, ";\n    }\n");
exports.InputCSS = InputCSS;
const OptionsWrapperCSS = "\nbackground: ".concat(_colors.colors.midnight400, ";\nwidth: 317px;\nborder: 2px solid ").concat(_colors.colors.emerald400, ";\nborder-radius: 0 0 7px 7px;\nmargin-top: -1px;\noverflow: hidden;\n");
exports.OptionsWrapperCSS = OptionsWrapperCSS;
const OptionCSS = "\nfont-size: 14px;\npadding: 8px 12px;\nbox-sizing: border-box;\nwidth: 289px;\ncolor: ".concat(_colors.colors.midnight600, ";\nmargin: auto;\n\n&:hover {\n  background: ").concat(_colors.colors.midnight300, ";\n  font-weight: 700;\n}");
exports.OptionCSS = OptionCSS;
const ErrorMsgCSS = "\ncolor: ".concat(_colors.colors.red500, ";\nmargin-top: 8px;\n");
exports.ErrorMsgCSS = ErrorMsgCSS;