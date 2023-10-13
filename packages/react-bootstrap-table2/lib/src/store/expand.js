"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAnyExpands = exports.getExpandedRows = exports.expandableKeys = void 0;
var _utils = _interopRequireDefault(require("../utils"));
var _rows = require("./rows");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var isAnyExpands = exports.isAnyExpands = function isAnyExpands(data, keyField) {
  var expanded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var _loop = function _loop() {
      var rowKey = _utils["default"].get(data[i], keyField);
      if (typeof expanded.find(function (x) {
        return x === rowKey;
      }) !== 'undefined') {
        return {
          v: true
        };
      }
    },
    _ret;
  for (var i = 0; i < data.length; i += 1) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return false;
};
var expandableKeys = exports.expandableKeys = function expandableKeys(data, keyField) {
  var skips = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (skips.length === 0) {
    return data.map(function (row) {
      return _utils["default"].get(row, keyField);
    });
  }
  return data.filter(function (row) {
    return !_utils["default"].contains(skips, _utils["default"].get(row, keyField));
  }).map(function (row) {
    return _utils["default"].get(row, keyField);
  });
};
var getExpandedRows = exports.getExpandedRows = function getExpandedRows(data, keyField, expanded) {
  return expanded.map(function (k) {
    return (0, _rows.getRowByRowId)(data, keyField, k);
  });
};