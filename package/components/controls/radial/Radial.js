"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radial = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _index = require("../../colors/index");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Radial = _ref => {
  let {
    active,
    checked,
    onClick: _onClick
  } = _ref;
  const [isChecked, setChecked] = (0, _react.useState)(checked);
  const getBorderColor = p => {
    if (!p.active) return "border-color: ".concat(_index.colors.grey600, ";");
    if (isChecked) return "border-color: ".concat(_index.colors.emerald400, ";");
    return "border-color: white;";
  };
  const Radial = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 23px;\n    width: 23px;\n    border: 3px solid;\n    border-radius: 100%;\n    cursor: ", ";\n    background: transparent;\n    position: relative;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n    transition: all 0.13s linear;\n    ", "\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: 1000;\n      border-radius: 100%;\n      height: 81%;\n      width: 81%;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n      background-color: ", ";\n      opacity: ", ";\n      transition: opacity 1s;\n    }\n  "])), p => p.active ? "pointer" : "default", p => getBorderColor(p), p => p.active ? "".concat(_index.colors.emerald400) : "".concat(_index.colors.grey600), _index.colors.emerald400, p => p.checked && p.active ? "1" : "0");
  return /*#__PURE__*/_react.default.createElement(Radial, {
    checked: isChecked,
    active: active,
    onClick: () => {
      setChecked(active ? !isChecked : false);
      _onClick();
    }
  });
};
exports.Radial = Radial;