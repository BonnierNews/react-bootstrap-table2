"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _sizePerPageOption = _interopRequireDefault(require("./size-per-page-option"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';
var SizePerPageDropDown = function SizePerPageDropDown(props) {
  var open = props.open,
    tableId = props.tableId,
    hidden = props.hidden,
    onClick = props.onClick,
    onBlur = props.onBlur,
    options = props.options,
    className = props.className,
    variation = props.variation,
    bootstrap4 = props.bootstrap4,
    btnContextual = props.btnContextual,
    optionRenderer = props.optionRenderer,
    currSizePerPage = props.currSizePerPage,
    onSizePerPageChange = props.onSizePerPageChange;
  var dropDownStyle = {
    visibility: hidden ? 'hidden' : 'visible'
  };
  var openClass = open ? 'open show' : '';
  var dropdownClasses = (0, _classnames["default"])(openClass, sizePerPageDefaultClass, variation, className);
  var id = tableId ? "".concat(tableId, "-pageDropDown") : 'pageDropDown';
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: dropDownStyle,
    className: dropdownClasses
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: id,
    type: "button",
    className: "btn ".concat(btnContextual, " dropdown-toggle"),
    "data-toggle": "dropdown",
    "aria-expanded": open,
    onClick: onClick,
    onBlur: onBlur
  }, currSizePerPage, ' ', bootstrap4 ? null : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "caret"
  }))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dropdown-menu ".concat(openClass),
    role: "menu",
    "aria-labelledby": id
  }, options.map(function (option) {
    if (optionRenderer) {
      return optionRenderer(_objectSpread(_objectSpread({}, option), {}, {
        onSizePerPageChange: onSizePerPageChange
      }));
    }
    return /*#__PURE__*/_react["default"].createElement(_sizePerPageOption["default"], _extends({}, option, {
      key: option.text,
      bootstrap4: bootstrap4,
      onSizePerPageChange: onSizePerPageChange
    }));
  })));
};
SizePerPageDropDown.propTypes = {
  currSizePerPage: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].array.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  onSizePerPageChange: _propTypes["default"].func.isRequired,
  bootstrap4: _propTypes["default"].bool,
  tableId: _propTypes["default"].string,
  open: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool,
  btnContextual: _propTypes["default"].string,
  variation: _propTypes["default"].oneOf(['dropdown', 'dropup']),
  className: _propTypes["default"].string,
  optionRenderer: _propTypes["default"].func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: '',
  optionRenderer: null,
  bootstrap4: false,
  tableId: null
};
var _default = exports["default"] = SizePerPageDropDown;