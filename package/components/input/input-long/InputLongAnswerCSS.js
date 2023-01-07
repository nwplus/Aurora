"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFilledStyle = exports.InputLongAnswerCSS = exports.InputCSS = exports.ErrorMessageCSS = void 0;
var _index = require("../../colors/index");
const InputLongAnswerCSS = "\n    width: 800px;\n    display: flex;\n    flex-direction: column;\n";
exports.InputLongAnswerCSS = InputLongAnswerCSS;
const InputCSS = "\n    height: 303px; \n    width: calc(100% - 100px);\n    overflow-y: scroll; \n    color: ".concat(_index.colors.grey500, ";\n    border: 0.25rem solid ").concat(_index.colors.white, ";\n    border-radius: 10px;\n    background-color: ").concat(_index.colors.midnight600, ";\n    padding: 20px 100px 20px 20px; \n    position: relative;\n    resize: none; \n    font-family: 'HK Grotesk', sans-serif;\n    font-size: 1.3rem;\n    line-height: 1.8rem;\n    font-weight: 400;\n    z-index: 0;\n    display: inline-block;\n    transition: 0.4s;\n\n    &:focus {\n        outline: none;\n        border-color: ").concat(_index.colors.white, ";\n    }\n\n    &::-webkit-scrollbar {\n        width: 0.65rem; \n    }\n\n    &::-webkit-scrollbar-track {\n        background: ").concat(_index.colors.grey500, ";\n        background: rgba(0, 0, 0, 0);\n        border-radius: 100vw;\n        margin-block: .7rem;\n    }\n    \n    &::-webkit-scrollbar-thumb {\n        background: ").concat(_index.colors.grey500, ";\n        background: rgba(255, 255, 255, 1);\n        border-radius: 100vw;\n    }\n");
exports.InputCSS = InputCSS;
const ErrorMessageCSS = "\n    color: ".concat(_index.colors.red500, ";\n    width: 100%;\n    font-family: 'HK Grotesk', sans-serif;\n    text-align: left;\n    font-size: 1.1250rem;\n    line-height: 1.375rem;\n    font-weight: 400;\n");
exports.ErrorMessageCSS = ErrorMessageCSS;
const isFilledStyle = "\n    color: ".concat(_index.colors.emerald400, "; \n    &:hover {border-color: ").concat(_index.colors.emerald400, "} \n    &:focus {border-color:white}\n");
exports.isFilledStyle = isFilledStyle;