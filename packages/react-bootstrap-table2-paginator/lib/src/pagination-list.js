"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _pageButton = _interopRequireDefault(require("./page-button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PaginatonList = function PaginatonList(props) {
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "pagination react-bootstrap-table-page-btns-ul"
  }, props.pages.map(function (pageProps) {
    if (props.pageButtonRenderer) {
      return props.pageButtonRenderer(_objectSpread(_objectSpread({}, pageProps), {}, {
        onPageChange: props.onPageChange
      }));
    }
    return /*#__PURE__*/_react["default"].createElement(_pageButton["default"], _extends({
      key: pageProps.page
    }, pageProps, {
      onPageChange: props.onPageChange
    }));
  }));
};
PaginatonList.propTypes = {
  pages: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    page: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].number, _propTypes["default"].string]),
    active: _propTypes["default"].bool,
    disable: _propTypes["default"].bool,
    title: _propTypes["default"].string
  })).isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  pageButtonRenderer: _propTypes["default"].func
};
PaginatonList.defaultProps = {
  pageButtonRenderer: null
};
var _default = exports["default"] = PaginatonList;