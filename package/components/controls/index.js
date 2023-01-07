"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _toggle = require("./toggle");
Object.keys(_toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _toggle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toggle[key];
    }
  });
});
var _number = require("./number");
Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _number[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _number[key];
    }
  });
});
var _radial = require("./radial");
Object.keys(_radial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _radial[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _radial[key];
    }
  });
});