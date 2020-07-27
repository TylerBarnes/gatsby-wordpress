"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _gatsby = require("gatsby");

var _gatsbyInline = _interopRequireDefault(require("../assets/svg/gatsby.inline.svg"));

var _default = () => /*#__PURE__*/_react.default.createElement(_core.Heading, {
  as: "h1"
}, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
  to: "/"
}, /*#__PURE__*/_react.default.createElement(_core.Grid, {
  gridTemplateColumns: "50px 1fr",
  gridGap: "20px"
}, /*#__PURE__*/_react.default.createElement(_core.Box, {
  maxW: 50
}, /*#__PURE__*/_react.default.createElement(_gatsbyInline.default, null)), /*#__PURE__*/_react.default.createElement("span", {
  style: {
    transform: `translateY(5px)`,
    display: `inline-block`
  }
}, "Gatsby Source WordPress V4 demo"))));

exports.default = _default;