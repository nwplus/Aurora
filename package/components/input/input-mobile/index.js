"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InputMobile = require("./InputMobile");
Object.keys(_InputMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputMobile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputMobile[key];
    }
  });
});