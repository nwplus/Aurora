"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarComponent = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _CalendarCSS = require("./CalendarCSS");
var _tag_filled = _interopRequireDefault(require("../../../assets/tag_filled.svg"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const CalendarTitle = _styledComponents.default.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _CalendarCSS.CalendarTitleCSS);

// Calendar
const CalendarComponent = _ref => {
  let {
    description,
    active,
    title,
    date
  } = _ref;
  // If description is too long, cut it
  const checkDescription = () => {
    let modified_calendar_description = description;
    if (description.length > 64) {
      modified_calendar_description = description.substring(0, 64) + " ...";
    }
    return modified_calendar_description;
  };
  const calendarStyles = () => {
    // true
    if (active) {
      // Active calendar
      return {
        CalendarActiveCSS: _CalendarCSS.CalendarActiveCSS
      };
    }
    // false
    else {
      // Inactive calendar
      return {
        CalendarInactiveCSS: _CalendarCSS.CalendarInactiveCSS
      };
    }
  };
  const CalendarComponent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n  "])), calendarStyles);

  // Tag image should not be visible for inactive calendars
  const TagVisibility = () => {
    let tagstyles = "";
    // false
    if (!active) {
      // Active calendar
      tagstyles += "display:none;";
    }
    return tagstyles;
  };
  const CalendarTag = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n    ", "\n  "])), _CalendarCSS.CalendarTagCSS, TagVisibility());
  return (
    /*#__PURE__*/
    // CalendarDes will disappear if the text inside it is empty
    _react.default.createElement(CalendarComponent, null, /*#__PURE__*/_react.default.createElement(CalendarTitle, null, title, /*#__PURE__*/_react.default.createElement(CalendarTag, null, /*#__PURE__*/_react.default.createElement("img", {
      src: _tag_filled.default,
      alt: "tag"
    }))), /*#__PURE__*/_react.default.createElement("p", null, date), /*#__PURE__*/_react.default.createElement("p", null, checkDescription()))
  );
};
exports.CalendarComponent = CalendarComponent;