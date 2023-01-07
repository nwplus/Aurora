"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Page = require("./Page");
Object.keys(_Page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Page[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Page[key];
    }
  });
});