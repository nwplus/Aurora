"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonNavigationCSS = void 0;
var _index = require("../../colors/index");
const ButtonNavigationCSS = "\n    position: absolute;\n    padding: 0;\n    background: none;\n    border: none;\n\n    font-family: 'HK Grotesk', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 1.5rem;\n    line-height: 48px;\n    /* identical to box height, or 200% */\n\n    display: table;\n    align-items: center;\n\n    color: ".concat(_index.colors.white, ";\n\n    &:hover {\n        background: ").concat(_index.colors.gradientMain, ";\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n    }");
exports.ButtonNavigationCSS = ButtonNavigationCSS;