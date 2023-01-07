"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PillSecondaryCSS = exports.PillPrimaryCSS = exports.PillButtonCSS = void 0;
var _ButtonCSS = require("../button/ButtonCSS");
const PillPrimaryCSS = "\n    ".concat(_ButtonCSS.PrimaryCSS, "\n    border-radius: 100px;\n");
exports.PillPrimaryCSS = PillPrimaryCSS;
const PillSecondaryCSS = "\n    ".concat(_ButtonCSS.SecondaryCSS, "\n    border-radius: 100px;\n");
exports.PillSecondaryCSS = PillSecondaryCSS;
const PillButtonCSS = "\n    display: table;\n    user-select: none;\n    border-radius: 100px;\n    padding: 0.8rem 1.5rem;\n\n    font-family: \"\", sans-serif;\n    font-weight: bold;\n\n    transition: all 0.13s linear; \n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n";
exports.PillButtonCSS = PillButtonCSS;