"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputShort = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _InputShortCSS = require("./InputShortCSS");
var _colors = require("../../colors");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const getDisabledOrErrorStyles = p => {
  if (p.disabled) {
    return "border-color: ".concat(_colors.colors.grey500, "; color:").concat(_colors.colors.grey500, "; &:hover {\n      border-color: ").concat(_colors.colors.grey500, ";\n    }");
  }
  if (p.error) {
    return "border-color: ".concat(_colors.colors.red500, ";  &:hover {\n      border-color: ").concat(_colors.colors.red500, ";\n    }\n    &:focus {\n      color: white;\n    }\n    ");
  }
};
const InputShortComponent = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  ", "\n"])), _InputShortCSS.InputShortComponentCSS, p => getDisabledOrErrorStyles(p));
const ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", ";\n"])), _InputShortCSS.errorMessageCSS);
const InputShort = _ref => {
  let {
    disabled,
    isEmptyError,
    placeholder,
    onChange
  } = _ref;
  const [text, setText] = (0, _react.useState)("");
  const [errorText, setErrorText] = (0, _react.useState)("");
  const textOverMaxCharacterLimit = text.length > 50;
  const showEmptyErrorStyles = isEmptyError && text.length === 0;
  const showErrorMessage = (showEmptyErrorStyles || textOverMaxCharacterLimit) && !disabled;
  const changeHandler = e => {
    setText(e.target.value);
    onChange(e);
  };
  (0, _react.useEffect)(() => {
    if (showEmptyErrorStyles) {
      setErrorText("Please enter an input");
    } else if (textOverMaxCharacterLimit) {
      setErrorText("Looks like you're above 50 characters! Try again.");
    }
  }, [text, showEmptyErrorStyles, textOverMaxCharacterLimit]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(InputShortComponent, {
    id: "input-short-component",
    disabled: disabled,
    error: showEmptyErrorStyles || textOverMaxCharacterLimit,
    placeholder: placeholder,
    defaultValue: text,
    onChange: changeHandler
  }), showErrorMessage && /*#__PURE__*/_react.default.createElement(ErrorMessage, null, errorText));
};
exports.InputShort = InputShort;