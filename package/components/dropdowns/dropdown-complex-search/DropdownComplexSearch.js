"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownComplexSearchComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _DropdownComplexSearchCSS = require("./DropdownComplexSearchCSS");
var _colors = require("../../colors");
var _icons = require("../../../assets/icons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), _DropdownComplexSearchCSS.WrapperCSS);
const Image = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  filter: saturate(0);\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n"])));
const Input = _styledComponents.default.input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  padding-left: 40px;\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n\n  &:hover {\n\tcolor: ", "\n    border: 2px solid ", ";\n  }\n\n  border: ", ";\n"])), _DropdownComplexSearchCSS.InputCSS, _ref => {
  let {
    showOptions
  } = _ref;
  return showOptions ? "7px 7px 0 0 " : "7px";
}, _ref2 => {
  let {
    showOptions
  } = _ref2;
  return showOptions ? "2px solid ".concat(_colors.colors.emerald400) : "2px solid ".concat(_colors.colors.grey500);
}, _ref3 => {
  let {
    selectedOption
  } = _ref3;
  return selectedOption ? "".concat(_colors.colors.emerald400) : "".concat(_colors.colors.grey500);
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
const OptionsWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _DropdownComplexSearchCSS.OptionsWrapperCSS);
const Option = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  width: 320px;\n  border-radius: ", ";\n  margin-bottom: ", ";\n"])), _DropdownComplexSearchCSS.OptionCSS, _ref6 => {
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
const ErrorMsg = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), _DropdownComplexSearchCSS.ErrorMsgCSS);
const DropdownComplexSearchComponent = _ref8 => {
  let {
    placeholder,
    options,
    error,
    onChange: _onChange
  } = _ref8;
  const [showOptions, setShowOptions] = (0, _react.useState)(false);
  const [selectedOption, setSelectedOption] = (0, _react.useState)("");
  const [hasError, setHasError] = (0, _react.useState)(error);
  (0, _react.useEffect)(() => {
    if (hasError && selectedOption !== "") {
      setHasError(false);
    }
  }, [hasError, selectedOption]);

  // Render "Start typing to search"
  const renderStartTypingToSearch = () => {
    return /*#__PURE__*/_react.default.createElement(OptionsWrapper, null, /*#__PURE__*/_react.default.createElement(Option, null, "Start typing to search..."));
  };

  // Loop through options to filter schools when typing and renders it
  const RenderNotListedSchool = value => {
    // Render "My school is not listed, use "event.target.value"
    return /*#__PURE__*/_react.default.createElement(OptionsWrapper, null, /*#__PURE__*/_react.default.createElement(Option, {
      onClick: () => {
        setSelectedOption(value);
        setShowOptions(false);
        setHasError(false);
      }
    }, "My school is not listed, use ", value));
  };
  const renderFilteredSchools = filteredSchools => {
    return /*#__PURE__*/_react.default.createElement(OptionsWrapper, null, filteredSchools.map((option, index) => {
      return /*#__PURE__*/_react.default.createElement(Option, {
        key: index,
        onClick: () => {
          setSelectedOption(option);
          setShowOptions(false);
          setHasError(false);
        },
        isLastOption: index === filteredSchools.length - 1
      }, option);
    }));
  };
  const filterSchools = value => {
    // Loop through options to filter schools when typing
    const filteredSchools = [];
    for (let i = 0; i < options.length; i++) {
      // If found school, append to filteredSchools
      if (options[i].toLowerCase().includes(value.toLowerCase())) {
        filteredSchools.push(options[i]);
      }
    }
    return filteredSchools;
  };
  const displayPrompt = value => {
    if (!value) {
      return renderStartTypingToSearch();
    } else {
      // Loop through options to filter schools when typing
      if (filterSchools(value).length > 0) {
        // Render items in filteredSchools as options
        return renderFilteredSchools(filterSchools(value));
      } else {
        return RenderNotListedSchool(value);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Image, {
    src: _icons.Search,
    alt: "Search icon"
  }), /*#__PURE__*/_react.default.createElement(Input, {
    placeholder: placeholder,
    showOptions: showOptions,
    selectedOption: selectedOption,
    onInput: () => setShowOptions(true),
    value: selectedOption,
    error: hasError,
    onChange: e => {
      setSelectedOption(e.target.value);
      _onChange(e);
    },
    onClick: () => setShowOptions(true)
  }), showOptions && displayPrompt(selectedOption), !showOptions && hasError && /*#__PURE__*/_react.default.createElement(ErrorMsg, null, "Please enter your school"));
};
exports.DropdownComplexSearchComponent = DropdownComplexSearchComponent;