"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SignupModal = require("./SignupModal");
Object.keys(_SignupModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SignupModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SignupModal[key];
    }
  });
});