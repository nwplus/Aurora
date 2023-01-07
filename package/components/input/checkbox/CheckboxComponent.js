"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxComponent = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Colors = require("../../colors/Colors");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CheckboxComponent = _ref => {
  let {
    disabled,
    variant,
    label,
    onClick: _onClick
  } = _ref;
  const [checked, setChecked] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (disabled) setChecked(false);
  }, [disabled]);
  switch (variant) {
    case 'control':
      return /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
        sx: {
          color: checked ? "".concat(_Colors.colors.emerald400) : "".concat(_Colors.colors.white),
          '&:hover > span': {
            color: disabled ? "".concat(_Colors.colors.muiGray) : "".concat(_Colors.colors.emerald400)
          },
          '&:disabled > span': {
            color: "gray"
          }
        },
        label: /*#__PURE__*/_react.default.createElement("div", null, label),
        control: /*#__PURE__*/_react.default.createElement(_material.Checkbox, {
          checked: checked,
          sx: {
            bgcolor: 'transparent',
            color: "".concat(_Colors.colors.white),
            '&.Mui-checked': {
              color: "".concat(_Colors.colors.emerald400)
            },
            '&:hover': {
              bgcolor: 'transparent',
              color: "".concat(_Colors.colors.emerald400),
              transition: '300ms'
            }
          },
          disabled: disabled,
          onClick: () => {
            setChecked(!checked);
            _onClick(!checked);
          }
        })
      });
    default:
      // PLACEHOLDER DEFAULT CHECKBOX
      return /*#__PURE__*/_react.default.createElement(_material.Checkbox, {
        defaultChecked: true,
        sx: {
          bgcolor: 'transparent',
          color: "".concat(_Colors.colors.white),
          '&.Mui-checked': {
            color: "#000"
          },
          '&:hover': {
            bgcolor: 'transparent',
            color: "#000"
          }
        }
      });
  }
};
exports.CheckboxComponent = CheckboxComponent;