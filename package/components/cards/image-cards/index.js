"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ImageCard = require("./ImageCard");
Object.keys(_ImageCard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ImageCard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ImageCard[key];
    }
  });
});