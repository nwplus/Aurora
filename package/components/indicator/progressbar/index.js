"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ProgressBar = require("./ProgressBar");
Object.keys(_ProgressBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ProgressBar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ProgressBar[key];
    }
  });
});