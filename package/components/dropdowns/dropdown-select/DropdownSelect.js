"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSelectComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _DropdownSelectCSS = require("./DropdownSelectCSS");
var _colors = require("../../colors");
var _icons = require("../../../assets/icons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), _DropdownSelectCSS.WrapperCSS);
const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n", "\n\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n\n  &:hover {\n\tcolor: ", "\n    border: 2px solid ", ";\n  }\n\n  border: ", ";\n"])), _DropdownSelectCSS.InputCSS, _ref => {
  let {
    showOptions
  } = _ref;
  return showOptions ? "7px 7px 0 0 " : "7px";
}, _ref2 => {
  let {
    showOptions
  } = _ref2;
  return showOptions ? "2px solid ".concat(_colors.colors.emerald400) : " 2px solid white";
}, _ref3 => {
  let {
    selectedOption
  } = _ref3;
  return selectedOption ? "".concat(_colors.colors.emerald400) : "white";
}, _ref4 => {
  let {
    error
  } = _ref4;
  return error ? "white" : " ".concat(_colors.colors.emerald400);
}, _colors.colors.emerald400, _ref5 => {
  let {
    error
  } = _ref5;
  return error ? "2px solid ".concat(_colors.colors.red500) : "";
});
const OptionsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _DropdownSelectCSS.OptionsWrapperCSS);
const Option = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  border-radius: ", ";\n  margin-bottom: ", ";\n"])), _DropdownSelectCSS.OptionCSS, _ref6 => {
  let {
    isLastOption
  } = _ref6;
  return isLastOption ? "0 0 6px 6px" : "";
}, _ref7 => {
  let {
    isLastOption
  } = _ref7;
  return isLastOption ? "-1px" : "";
});
const ErrorMsg = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _DropdownSelectCSS.ErrorMsgCSS);
const Image = _styledComponents.default.img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  top: ", ";\n  filter: ", ";\n"])), _DropdownSelectCSS.ImageCSS, _ref8 => {
  let {
    showOptions
  } = _ref8;
  return showOptions ? "18px" : "21px";
}, _ref9 => {
  let {
    selectedOption,
    hasError,
    showOptions
  } = _ref9;
  return !selectedOption && !showOptions || hasError ? "saturate(0)" : "";
});
const DropdownSelectComponent = _ref10 => {
  let {
    placeholder,
    options,
    error,
    onClick: _onClick
  } = _ref10;
  const [showOptions, setShowOptions] = (0, _react.useState)(false);
  const [selectedOption, setSelectedOption] = (0, _react.useState)("");
  const [hasError, setHasError] = (0, _react.useState)(error);
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Input, {
    onClick: () => setShowOptions(!showOptions),
    placeholder: placeholder,
    showOptions: showOptions,
    selectedOption: selectedOption,
    value: selectedOption,
    error: hasError,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement(Image, {
    src: showOptions ? _icons.CaretLeft : _icons.CaretDown,
    alt: "Caret left",
    showOptions: showOptions,
    hasError: hasError,
    selectedOption: selectedOption
  }), showOptions && options.length > 0 && /*#__PURE__*/_react.default.createElement(OptionsWrapper, null, options.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      onClick: () => {
        setSelectedOption(option);
        setShowOptions(false);
        setHasError(false);
        _onClick(option);
      },
      isLastOption: index === options.length - 1
    }, option);
  })), !showOptions && hasError && /*#__PURE__*/_react.default.createElement(ErrorMsg, null, "Please select an option"));
};
exports.DropdownSelectComponent = DropdownSelectComponent;