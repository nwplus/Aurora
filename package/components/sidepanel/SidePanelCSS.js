"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidePanelCSS = void 0;
var _index = require("../colors/index");
const SidePanelCSS = "\n\nwidth: 139px;\nheight: 26px;\n\ndisplay: flex;\njustify-content: center;\n\nfont-family: 'HK Grotesk', sans-serif;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 1.6rem;\nline-height: 26px;\n\nletter-spacing: -0.45px;\n\ntransition: 300ms;\n\ncolor: ".concat(_index.colors.white, ";\nbackground: transparent;\npadding: 18px 66px 18px 66px;\n\n&:hover {\n    background: ").concat(_index.colors.midnight500, ";\n    cursor: pointer;\n    align-items: center;\n}\n");
exports.SidePanelCSS = SidePanelCSS;