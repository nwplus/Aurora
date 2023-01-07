"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ButtonText = require("./ButtonText");
Object.keys(_ButtonText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonText[key];
    }
  });
});