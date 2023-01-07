"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerComponentContainer = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _TimerCSS = require("./TimerCSS");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TimerComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _TimerCSS.TimerCSS);
const TimerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), _TimerCSS.TimerContainerCSS);
const TimerHeading = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _TimerCSS.TimerHeadingCSS);
const Timer = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _TimerCSS.TimerNumsCSS);
const TimerLabels = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _TimerCSS.TimerLabelsCSS);
const TimerComponentContainer = _ref => {
  let {
    isActive,
    time
  } = _ref;
  const [timeRemaining, setTimeRemaining] = (0, _react.useState)(time);
  const getTime = (0, _react.useCallback)(() => {
    let newTime = timeRemaining - 1;
    setTimeRemaining(newTime);
  }, [timeRemaining]);
  (0, _react.useEffect)(() => {
    if (isActive && timeRemaining > 0) {
      const interval = setInterval(() => getTime(), 1000);
      return () => clearInterval(interval);
    }
  }, [getTime, timeRemaining, isActive]);
  const formatTime = () => {
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor(timeRemaining / 60) % 60;
    let hours = Math.floor(timeRemaining / 3600) % 24;
    let days = Math.floor(timeRemaining / 86400);
    let res = '';
    if (days < 10) {
      res += '0' + days + ':';
    } else {
      res += days + ':';
    }
    if (hours < 10) {
      res += '0' + hours + ':';
    } else {
      res += hours + ':';
    }
    if (minutes < 10) {
      res += '0' + minutes + ':';
    } else {
      res += minutes + ':';
    }
    if (seconds < 10) {
      res += '0' + seconds;
    } else {
      res += seconds;
    }
    return res;
  };
  return /*#__PURE__*/_react.default.createElement(TimerComponent, null, /*#__PURE__*/_react.default.createElement(TimerHeading, null, "HACKING ENDS IN..."), /*#__PURE__*/_react.default.createElement(TimerContainer, null, /*#__PURE__*/_react.default.createElement(Timer, null, formatTime()), /*#__PURE__*/_react.default.createElement(TimerLabels, null, /*#__PURE__*/_react.default.createElement("p", null, "day"), /*#__PURE__*/_react.default.createElement("p", null, "hr"), /*#__PURE__*/_react.default.createElement("p", null, "min"), /*#__PURE__*/_react.default.createElement("p", null, "sec"))));
};
exports.TimerComponentContainer = TimerComponentContainer;