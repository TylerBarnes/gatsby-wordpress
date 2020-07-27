"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _layout = _interopRequireDefault(require("../components/layout"));

var _default = () => /*#__PURE__*/_react.default.createElement(_layout.default, null, /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Heading, {
  as: "h1",
  size: "xl"
}, "Oops, that's a 404")));

exports.default = _default;