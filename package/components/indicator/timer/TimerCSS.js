"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerNumsCSS = exports.TimerLabelsCSS = exports.TimerHeadingCSS = exports.TimerContainerCSS = exports.TimerCSS = void 0;
var _index = require("../../colors/index");
const TimerCSS = "\n    height: 160px; \n    width: 410px;\n    color: ".concat(_index.colors.white, ";\n    display: flex;\n    flex-direction: column;\n    font-family: 'HK Grotesk', sans-serif;\n    text-align: center;\n    font-weight: 600;\n");
exports.TimerCSS = TimerCSS;
const TimerHeadingCSS = "\n    font-size: 1.25rem;\n";
exports.TimerHeadingCSS = TimerHeadingCSS;
const TimerContainerCSS = "\n    display: flex;\n    flex-direction: column;  \n    width: 100%; \n";
exports.TimerContainerCSS = TimerContainerCSS;
const TimerNumsCSS = "\n    font-size: 4.5rem;\n    justify-content: center;\n    align-items: center;\n    width: 100%; \n";
exports.TimerNumsCSS = TimerNumsCSS;
const TimerLabelsCSS = "\n    font-size: 1rem;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n";
exports.TimerLabelsCSS = TimerLabelsCSS;