"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBarContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _ProgressBarCSS = require("./ProgressBarCSS");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const getProgressPercent = p => {
  return "\n    width: ".concat(p.progressPercent, "%;\n  ");
};
const ProgressBarComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _ProgressBarCSS.ProgressBarCSS);
const FilledProgressBar = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), _ProgressBarCSS.FilledProgressBarCSS, p => getProgressPercent(p));
const ProgressBarContainer = _ref => {
  let {
    progressPercent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(ProgressBarComponent, null, /*#__PURE__*/_react.default.createElement(FilledProgressBar, {
    progressPercent: progressPercent
  }));
};
exports.ProgressBarContainer = ProgressBarContainer;