"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _imageCards = require("./image-cards");
Object.keys(_imageCards).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _imageCards[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _imageCards[key];
    }
  });
});