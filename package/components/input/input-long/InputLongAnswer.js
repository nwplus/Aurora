"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLongAnswerComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../colors/index");
var _InputLongAnswerCSS = require("./InputLongAnswerCSS");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const getInputStateStyles = p => {
  const errorStyle = "\n    border: 0.25rem solid ".concat(_index.colors.red500, ";\n");
  let styles = '';
  if (!p.isEmpty) {
    styles += _InputLongAnswerCSS.isFilledStyle;
  } else {
    styles += errorStyle;
  }
  return styles;
};
const InputLongAnswer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _InputLongAnswerCSS.InputLongAnswerCSS);
const Input = _styledComponents.default.textarea(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), _InputLongAnswerCSS.InputCSS, p => getInputStateStyles(p));
const ErrorMessage = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _InputLongAnswerCSS.ErrorMessageCSS);
const InputLongAnswerComponent = _ref => {
  let {
    isEmpty,
    onChange
  } = _ref;
  const [text, setText] = (0, _react.useState)('');
  const [errorText, setErrorText] = (0, _react.useState)('');
  const changeHandler = e => {
    setText(e.target.value);
    onChange(e);
  };
  (0, _react.useEffect)(() => {
    let longAnswerComponent = document.getElementById('input-long-component');
    if (isEmpty) {
      setErrorText('Please enter your answer!');
      longAnswerComponent.style.borderColor = "".concat(_index.colors.red500);
    } else if (text.length > 650) {
      setErrorText("Looks like you're above 650 characters! Try again.");
      longAnswerComponent.style.borderColor = "".concat(_index.colors.red500);
    } else {
      setErrorText('');
      longAnswerComponent.style = _InputLongAnswerCSS.isFilledStyle;
    }
  }, [text, isEmpty]);
  return /*#__PURE__*/_react.default.createElement(InputLongAnswer, {
    isEmpty: isEmpty
  }, /*#__PURE__*/_react.default.createElement(Input, {
    id: "input-long-component",
    isEmpty: isEmpty,
    placeholder: "Maximum of 650 characters",
    defaultValue: text,
    onChange: changeHandler
  }), /*#__PURE__*/_react.default.createElement(ErrorMessage, {
    isEmpty: isEmpty
  }, errorText));
};
exports.InputLongAnswerComponent = InputLongAnswerComponent;