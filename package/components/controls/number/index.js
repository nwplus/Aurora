"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Number = require("./Number");
Object.keys(_Number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Number[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Number[key];
    }
  });
});