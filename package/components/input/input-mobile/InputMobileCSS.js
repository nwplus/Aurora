"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputMobileTransparentCSS = exports.InputMobileLightCSS = exports.InputMobileDarkCSS = exports.InputMobileCSS = void 0;
var _index = require("../../colors/index");
const InputMobileCSS = "\n\theight: 30px;\n\tborder-radius: 3px;\n\tpadding-left 10px;\n\tfont-family: 'HK Grotesk', sans-serif;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tfont-size: 14px;\n\toutline: none;\n\tborder: none;\n";
exports.InputMobileCSS = InputMobileCSS;
const InputMobileLightCSS = "\n\tbackground: ".concat(_index.colors.white, ";\n\tcolor: black;\n\t::-webkit-input-placeholder {\n\t\tcolor: ").concat(_index.colors.grey500, ";\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: ").concat(_index.colors.grey500, ";\n\t}\n");
exports.InputMobileLightCSS = InputMobileLightCSS;
const InputMobileDarkCSS = "\n\tbackground: ".concat(_index.colors.midnight500, ";\n\tcolor: ").concat(_index.colors.white, ";\n\t::-webkit-input-placeholder {\n\t\tcolor: ").concat(_index.colors.midnight400, ";\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: ").concat(_index.colors.midnight400, ";\n\t}\n");
exports.InputMobileDarkCSS = InputMobileDarkCSS;
const InputMobileTransparentCSS = "\n\tbackground: transparent;\n\t::-webkit-input-placeholder {\n\t\tcolor: ".concat(_index.colors.grey500, ";\n\t}\n\t:-ms-input-placeholder {\n\t\tcolor: ").concat(_index.colors.grey500, ";\n\t}\n");
exports.InputMobileTransparentCSS = InputMobileTransparentCSS;