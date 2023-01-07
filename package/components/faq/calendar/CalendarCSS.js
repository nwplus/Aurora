"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarTitleCSS = exports.CalendarTagCSS = exports.CalendarInactiveCSS = exports.CalendarActiveCSS = void 0;
var _index = require("../../colors/index");
const CalendarActiveCSS = "\n    padding: 10px 20px;\n    /* Midnight (Purple)/midnight-500 */\n\n    background: ".concat(_index.colors.midnight500, ";\n    border-radius: 6px;\n    display: inline-block;\n    color: ").concat(_index.colors.white, ";\n    text-align: left;\n    font-family: \"\", sans-serif;\n    width: 250px;\n\n    padding-left: 10px;\n    padding-right: 10px;\n");
exports.CalendarActiveCSS = CalendarActiveCSS;
const CalendarInactiveCSS = "\n    padding: 10px 20px;\n    /* Red/red-500 */\n    outline: ".concat(_index.colors.red500, " 2px solid;\n    border-radius: 6px;\n    display: inline-block;\n    color: ").concat(_index.colors.red500, ";\n    text-align: left;\n    font-family: \"\", sans-serif;\n    width: 250px;\n\n    padding-left: 10px;\n    padding-right: 10px;\n");
exports.CalendarInactiveCSS = CalendarInactiveCSS;
const CalendarTitleCSS = "\n    font-weight: bold;\n";
exports.CalendarTitleCSS = CalendarTitleCSS;
const CalendarTagCSS = "\n    text-align: right;\n    margin-top: -25px;\n    height: 20px;\n    width: auto;\n";
exports.CalendarTagCSS = CalendarTagCSS;