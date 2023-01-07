"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _inputLong = require("./input-long");
Object.keys(_inputLong).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputLong[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputLong[key];
    }
  });
});
var _inputShort = require("./input-short");
Object.keys(_inputShort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputShort[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputShort[key];
    }
  });
});
var _inputMobile = require("./input-mobile");
Object.keys(_inputMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputMobile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputMobile[key];
    }
  });
});
var _checkbox = require("./checkbox");
Object.keys(_checkbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkbox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkbox[key];
    }
  });
});