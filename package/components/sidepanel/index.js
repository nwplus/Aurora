"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SidePanel = require("./SidePanel");
Object.keys(_SidePanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SidePanel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SidePanel[key];
    }
  });
});