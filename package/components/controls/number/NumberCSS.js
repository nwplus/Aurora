"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnfilledContainerCSS = exports.FilledContainerCSS = void 0;
var _colors = require("../../colors");
const ContainerCSS = "\n  font-family: \"HK Grotesk\", sans-serif;\n  display: flex;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid ".concat(_colors.colors.midnight400, ";\n  height: 34px;\n  width: 34px;\n  justify-content: center;\n  align-items: center;\n");
const UnfilledContainerCSS = "\n  ".concat(ContainerCSS, ";\n  color: ").concat(_colors.colors.midnight400, ";\n  background: transparent;\n");
exports.UnfilledContainerCSS = UnfilledContainerCSS;
const FilledContainerCSS = "\n  ".concat(ContainerCSS, ";\n  color: ").concat(_colors.colors.white, ";\n  background: ").concat(_colors.colors.midnight400, ";\n");
exports.FilledContainerCSS = FilledContainerCSS;