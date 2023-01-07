"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ButtonTag = require("./ButtonTag");
Object.keys(_ButtonTag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonTag[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonTag[key];
    }
  });
});