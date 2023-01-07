"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ButtonNavigation = require("./ButtonNavigation");
Object.keys(_ButtonNavigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonNavigation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonNavigation[key];
    }
  });
});