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
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Header Nav Menu"), /*#__PURE__*/_react.default.createElement("p", null, "The header nav menu appears at the top of all pages"), /*#__PURE__*/_react.default.createElement("h3", null, "Things that are working:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Red bar menu hidden at mobile, shown at larger sizes"), /*#__PURE__*/_react.default.createElement("li", null, "Supplemental text nav (\"Lorem, Ipsum\") hidden at mobile, shown at larger sizes"), /*#__PURE__*/_react.default.createElement("li", null, "Hamburger menu open/close toggle"), /*#__PURE__*/_react.default.createElement("li", null, "Dropdown \"Large Main\" menu item styles (fonts, colors, padding, hover/active interactions)"), /*#__PURE__*/_react.default.createElement("li", null, "Dropdown \"Utility\" menu item styles (fonts, colors, padding, hover/active interactions)"), /*#__PURE__*/_react.default.createElement("li", null, "Dropdown Social Network menu item styles (icons, colors, padding, hover/active interactions)")), /*#__PURE__*/_react.default.createElement("h3", null, "Things ", /*#__PURE__*/_react.default.createElement("em", null, "sort of / partially"), " working"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Secondary menu at mobile size (see notes)")), /*#__PURE__*/_react.default.createElement("h3", null, "Things not working yet:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Search (does nothing)"), /*#__PURE__*/_react.default.createElement("li", null, "Logo zoom"), /*#__PURE__*/_react.default.createElement("li", null, "Background SVG image on dropdown menu")), /*#__PURE__*/_react.default.createElement("h2", null, "Testing the dropdown menu at mobile:"), /*#__PURE__*/_react.default.createElement("p", null, "In order to test the dropdown menu properly at mobie size, you will need to first open Chrome Developer Tools (Command + Option + I on Mac). Then from inside Developer Tools you will need to turn on responsive mode (Command + Shift + M). This will cause your browser to emulate a mobile device - among other things, there will be no \"hover\" state."), /*#__PURE__*/_react.default.createElement("p", null, "Once you've got your browser set up properly, you can click to open the main dropdown menu and then click on Any of the main nav items (with the red triangles) to open the secondary nav menu.  "), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Once you've opened the secondary nav, you are at a dead-end. The controls to close secondary nav and revert back to the primary nav are not working yet."), ". (This dead-end is so severe that you will need to reload the page or go to a new page in order to get out of it. You may actually need to get a new computer. I make no guarantees.)")));
};

exports.default = _default;