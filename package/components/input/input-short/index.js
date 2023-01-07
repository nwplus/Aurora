"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InputShort = require("./InputShort");
Object.keys(_InputShort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputShort[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputShort[key];
    }
  });
});