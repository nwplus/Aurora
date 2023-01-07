"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Radial = require("./Radial");
Object.keys(_Radial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Radial[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radial[key];
    }
  });
});