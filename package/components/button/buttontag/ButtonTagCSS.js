"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InactiveCSS = exports.HoverCSS = exports.FocusCSS = exports.ButtonTagCSS = exports.ActiveCSS = void 0;
var _index = require("../../colors/index");
const ActiveCSS = "\n    color: ".concat(_index.colors.white, ";\n    border: 2px solid ").concat(_index.colors.white, ";\n    background: transparent;\n");
exports.ActiveCSS = ActiveCSS;
const HoverCSS = "\n    color: ".concat(_index.colors.emerald400, ";\n    border: 2px solid ").concat(_index.colors.emerald400, ";\n    background: transparent;\n");
exports.HoverCSS = HoverCSS;
const InactiveCSS = "\n    cursor: default;\n    color: ".concat(_index.colors.grey500, ";\n    border: 2px solid ").concat(_index.colors.grey500, ";\n    background: transparent;\n");
exports.InactiveCSS = InactiveCSS;
const FocusCSS = "\n    background: ".concat(_index.colors.gradientMain, ";\n    color: ").concat(_index.colors.midnight600, ";\n");
exports.FocusCSS = FocusCSS;
const ButtonTagCSS = "\n    display: flex;\n    user-select: none;\n    border-radius: 8px;\n    text-align: center;\n    padding: 11px 24px;\n    font-size: 1.125rem;\n\n    font-family: \"\", sans-serif;\n\n    transition: all 0.13s linear;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n";
exports.ButtonTagCSS = ButtonTagCSS;