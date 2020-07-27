"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _CommunicationForm = _interopRequireDefault(require("../../components/content-blocks/CommunicationForm"));

var _GenericPageSection = _interopRequireDefault(require("../../components/page-sections/GenericPageSection"));

var _MobileHr = _interopRequireDefault(require("../../components/parts/MobileHr"));

var _default = () => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Communication Form"), /*#__PURE__*/_react.default.createElement("h2", null, "Done so far:"), /*#__PURE__*/_react.default.createElement("p", null, "After typing two characters into the First Name field, the rest of the form will reveal itself."), /*#__PURE__*/_react.default.createElement("p", null, "After all fields have been entered (which currently means at least 2 characters in each field), the submit button will become active.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("strong", null, "NOTE: use letters for the postal code field for now (proper validation to come later)")), /*#__PURE__*/_react.default.createElement("h2", null, "Not done yet:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Proper validation of all fields based on specific rules"), /*#__PURE__*/_react.default.createElement("li", null, "Display of form validation messages"), /*#__PURE__*/_react.default.createElement("li", null, "Addition of country dropdown, country/postal code interaction"))), /*#__PURE__*/_react.default.createElement(_CommunicationForm.default, null), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)));
};

exports.default = _default;