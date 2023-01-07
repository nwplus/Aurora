"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _signupmodal = require("./signupmodal");
Object.keys(_signupmodal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _signupmodal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signupmodal[key];
    }
  });
});