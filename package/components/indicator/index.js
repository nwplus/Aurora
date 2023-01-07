"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _timer = require("./timer");
Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _timer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer[key];
    }
  });
});
var _progressbar = require("./progressbar");
Object.keys(_progressbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _progressbar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _progressbar[key];
    }
  });
});