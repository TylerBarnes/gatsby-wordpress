"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _header = _interopRequireDefault(require("./header"));

var _menu = _interopRequireDefault(require("./menu"));

require("../assets/style.css");

const Layout = ({
  children
}) => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
  style: {
    margin: `0 auto`
  },
  maxW: "90%",
  w: 900,
  alignSelf: "center"
}, /*#__PURE__*/_react.default.createElement(_core.Box, {
  mb: 10,
  mt: 20
}, /*#__PURE__*/_react.default.createElement(_header.default, null)), /*#__PURE__*/_react.default.createElement(_menu.default, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
  mb: 100
}, children)));

var _default = Layout;
exports.default = _default;