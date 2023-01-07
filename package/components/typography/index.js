"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Typography = require("./Typography");
Object.keys(_Typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typography[key];
    }
  });
});