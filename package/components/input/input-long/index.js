"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InputLongAnswer = require("./InputLongAnswer");
Object.keys(_InputLongAnswer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputLongAnswer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputLongAnswer[key];
    }
  });
});