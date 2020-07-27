"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _core = require("@chakra-ui/core");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _layout = _interopRequireDefault(require("../../components/layout"));

var _getUrlPath = require("../../utils/get-url-path");

function BlogPost({
  data
}) {
  var _featuredImage$node, _featuredImage$node$r;

  const {
    nextPage,
    previousPage,
    page
  } = data;
  const {
    title,
    content,
    featuredImage
  } = page;
  return /*#__PURE__*/_react.default.createElement(_layout.default, null, /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h1",
    size: "xl",
    mb: 5
  }, title, " /"), !!(featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$node = featuredImage.node) === null || _featuredImage$node === void 0 ? void 0 : (_featuredImage$node$r = _featuredImage$node.remoteFile) === null || _featuredImage$node$r === void 0 ? void 0 : _featuredImage$node$r.childImageSharp) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 5
  }, /*#__PURE__*/_react.default.createElement(_gatsbyImage.default, {
    fluid: featuredImage.node.remoteFile.childImageSharp.fluid
  })), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), !!nextPage && /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: (0, _getUrlPath.normalizePath)(nextPage.uri)
  }, "Next: ", nextPage.title, " --", /*#__PURE__*/_react.default.createElement("p", null, "....")), /*#__PURE__*/_react.default.createElement("br", null), !!previousPage && /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: (0, _getUrlPath.normalizePath)(previousPage.uri)
  }, "Previous: ", previousPage.title));
}

var _default = BlogPost;
exports.default = _default;