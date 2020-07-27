"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _GenericPageSection = _interopRequireDefault(require("../../components/page-sections/GenericPageSection"));

var _default = () => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Footer"), /*#__PURE__*/_react.default.createElement("p", null, "The footer appears at the bottom of all pages:"), /*#__PURE__*/_react.default.createElement("p", null, "At mobile (screens smaller than 768px wide), the footer format changes to a single column."), /*#__PURE__*/_react.default.createElement("p", null, "Social Media icons currently do not change color when hovered over, this will be fixed in a future release"), /*#__PURE__*/_react.default.createElement("p", null, "Some consideration should be done for how we want the footer to appear when between the larger tablet sizes and the smaller 375 mobile size.")));
};

exports.default = _default;