"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryButtonTextCSS = exports.PrimaryButtonTextCSS = exports.ButtonTextCSS = void 0;
var _index = require("../../colors/index");
const PrimaryButtonTextCSS = "\n    color: ".concat(_index.colors.white, ";\n\n    &:hover {\n        background: ").concat(_index.colors.gradientMain, ";\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n    \n    &:hover::after {\n        margin-top: -2px;\n        display: block;\n        content: '';\n        width: 100%;\n        bottom: 0; \n        height: 2px;\n        background-image: ").concat(_index.colors.gradientMain, ";\n    }\n\n    &::after {\n        margin-top: -2px;\n        display: block;\n        content: '';\n        width: 100%;\n        bottom: 0; \n        height: 2px;\n        background-color: ").concat(_index.colors.white, ";\n    }\n");
exports.PrimaryButtonTextCSS = PrimaryButtonTextCSS;
const SecondaryButtonTextCSS = "\n    color: ".concat(_index.colors.midnight200, ";\n\n    &:hover {\n        background: ").concat(_index.colors.gradientMain, ";\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n\n    &:hover::after {\n        margin-top: -2px;\n        display: block;\n        content: '';\n        width: 100%;\n        bottom: 0; \n        height: 2px;\n        background-image: ").concat(_index.colors.gradientMain, ";\n    }\n");
exports.SecondaryButtonTextCSS = SecondaryButtonTextCSS;
const ButtonTextCSS = "\n    display: table;\n    user-select: none;\n\n    font-family: 'HK Grotesk', sans-serif;\n    text-align: center;\n    font-size: 1.1250rem;\n    font-weight: bold;\n\n    transition: all 0.13s linear; \n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n";
exports.ButtonTextCSS = ButtonTextCSS;