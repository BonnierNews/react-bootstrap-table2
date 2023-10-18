"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _expandRow = _interopRequireDefault(require("./expand-row"));
var _utils = _interopRequireDefault(require("../utils"));
var _rowExpandContext = _interopRequireDefault(require("../contexts/row-expand-context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint react/prop-types: 0 */
var _default = exports["default"] = function _default(Component) {
  var renderWithExpansion = function renderWithExpansion(props, expandRow) {
    var parentClassName = '';
    var className = '';
    var key = props.value;
    var expanded = _utils["default"].contains(expandRow.expanded, key);
    var isClosing = _utils["default"].contains(expandRow.isClosing, key);
    var expandable = !expandRow.nonExpandable || !_utils["default"].contains(expandRow.nonExpandable, key);
    if (expanded) {
      parentClassName = _utils["default"].isFunction(expandRow.parentClassName) ? expandRow.parentClassName(expanded, props.row, props.rowIndex) : expandRow.parentClassName || '';
      className = _utils["default"].isFunction(expandRow.className) ? expandRow.className(expanded, props.row, props.rowIndex) : expandRow.className || '';
    }
    return [/*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
      key: key,
      expanded: expanded,
      expandable: expandable,
      expandRow: _objectSpread({}, expandRow),
      className: (0, _classnames["default"])(props.className, parentClassName)
    })), expanded || isClosing ? /*#__PURE__*/_react["default"].createElement(_expandRow["default"], {
      key: "".concat(key, "-expanding"),
      colSpan: props.visibleColumnSize,
      expanded: expanded,
      onClosed: function onClosed() {
        return expandRow.onClosed(key);
      },
      className: className
    }, expandRow.renderer(props.row, props.rowIndex)) : null];
  };
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(_rowExpandContext["default"].Consumer, null, function (expandRow) {
      return renderWithExpansion(props, expandRow);
    });
  };
};