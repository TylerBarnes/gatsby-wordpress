"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.query = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _blogPost = _interopRequireDefault(require("../../components/template-parts/blog-post"));

var _default = ({
  data
}) => /*#__PURE__*/_react.default.createElement(_blogPost.default, {
  data: data
});

exports.default = _default;
const query = (0, _gatsby.graphql)`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`;
exports.query = query;