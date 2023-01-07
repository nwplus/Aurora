"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _CheckboxComponent = require("./CheckboxComponent");
Object.keys(_CheckboxComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CheckboxComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CheckboxComponent[key];
    }
  });
});