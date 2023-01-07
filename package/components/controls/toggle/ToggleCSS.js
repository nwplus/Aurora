"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchCSS = exports.LabelCSS = exports.InputCSS = void 0;
var _colors = require("../../colors");
const LabelCSS = "\ndisplay: flex;\nalign-items: center;\ngap: 5px;\ncursor: pointer;\ncolor: white;\n\nfont-family: \"HK Grotesk\", sans-serif;\nfont-style: normal;\nfont-weight: 800;\nfont-size: 18px;\n";
exports.LabelCSS = LabelCSS;
const SwitchCSS = "\nposition: relative;\nwidth: 46px;\nheight: 20px;\nbackground: ".concat(_colors.colors.midnight500, ";\nborder-radius: 32px;\npadding: 4px;\ntransition: 300ms all;\nborder: 2px white solid;\n\n&:before {\n  transition: 300ms all;\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 35px;\n  top: 50%;\n  left: 4px;\n  background: ").concat(_colors.colors.midnight600, ";\n  transform: translate(0, -50%);\n}");
exports.SwitchCSS = SwitchCSS;
const InputCSS = "\nopacity: 0;\nposition: absolute;\ndisplay: none;";
exports.InputCSS = InputCSS;