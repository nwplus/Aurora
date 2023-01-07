"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownWrapperCSS = exports.dropdownOuterCSS = exports.dropdownInnerCSS = exports.dropdownArrowCSS = void 0;
var _index = require("../../colors/index");
const dropdownWrapperCSS = "\n\tfont-family: \"HK Grotesk\", sans-serif;\n\tborder-radius: 5px;\n\tborder-style: solid;\n\tborder-width: 2px;\n\tborder-color: ".concat(_index.colors.emerald400, ";\n\tcursor:pointer;\n");
exports.dropdownWrapperCSS = dropdownWrapperCSS;
const dropdownOuterCSS = "\n\tpadding: 12px;\n\tfont-weight: 700;\n\tfont-size: 18px;\n\tbackground: ".concat(_index.colors.white, ";\n\tcolor: black;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-radius: 5px 5px 0 0;\n");
exports.dropdownOuterCSS = dropdownOuterCSS;
const dropdownInnerCSS = "\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tpadding: 12px;\n\tcolor: ".concat(_index.colors.white, ";\n\tbackground: ").concat(_index.colors.midnight450, ";\n\tborder-radius: 0 0 5px 5px;\n");
exports.dropdownInnerCSS = dropdownInnerCSS;
const dropdownArrowCSS = "\n\tfont-size: 18px;\n\tpadding-right: 5px;\n";
exports.dropdownArrowCSS = dropdownArrowCSS;