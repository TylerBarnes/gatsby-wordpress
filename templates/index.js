"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.query = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _reactPaginate = _interopRequireDefault(require("react-paginate"));

var _core = require("@chakra-ui/core");

var _layout = _interopRequireDefault(require("../components/layout"));

var _getUrlPath = require("../utils/get-url-path");

var _default = ({
  data,
  pageContext
}) => /*#__PURE__*/_react.default.createElement(_layout.default, null, /*#__PURE__*/_react.default.createElement(_core.Stack, {
  spacing: 5
}, data.allWpPost.nodes.map(page => {
  var _page$featuredImage, _page$featuredImage$n, _page$featuredImage$n2;

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    key: page.link
  }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: (0, _getUrlPath.normalizePath)(page.uri)
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    p: 5,
    shadow: "md",
    borderWidth: "1px"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    templateColumns: "1fr 2fr",
    gap: 6
  }, /*#__PURE__*/_react.default.createElement(_core.Box, null, !!(page === null || page === void 0 ? void 0 : (_page$featuredImage = page.featuredImage) === null || _page$featuredImage === void 0 ? void 0 : (_page$featuredImage$n = _page$featuredImage.node) === null || _page$featuredImage$n === void 0 ? void 0 : (_page$featuredImage$n2 = _page$featuredImage$n.remoteFile) === null || _page$featuredImage$n2 === void 0 ? void 0 : _page$featuredImage$n2.childImageSharp) && /*#__PURE__*/_react.default.createElement(_gatsbyImage.default, {
    fluid: page.featuredImage.node.remoteFile.childImageSharp.fluid
  })), /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h2",
    size: "md"
  }, page.title), !!page.author && !!page.author.name && /*#__PURE__*/_react.default.createElement(_core.Heading, {
    as: "h3",
    size: "sm"
  }, "Author: ", page.author.name), /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Text, {
    dangerouslySetInnerHTML: {
      __html: page.excerpt
    }
  })))))));
})), pageContext && pageContext.totalPages > 1 && /*#__PURE__*/_react.default.createElement(_core.Box, {
  mt: 10
}, /*#__PURE__*/_react.default.createElement(_reactPaginate.default, {
  previousLabel: (pageContext === null || pageContext === void 0 ? void 0 : pageContext.page) !== 1 && /*#__PURE__*/_react.default.createElement(_core.Button, null, "Previous page"),
  nextLabel: (pageContext === null || pageContext === void 0 ? void 0 : pageContext.totalPages) !== pageContext.page && /*#__PURE__*/_react.default.createElement(_core.Button, null, "Next page"),
  onPageChange: ({
    selected
  }) => {
    const page = selected + 1;
    const path = page === 1 ? `/blog/` : `/blog/${page}/`;
    (0, _gatsby.navigate)(path);
  },
  disableInitialCallback: true,
  breakLabel: "...",
  breakClassName: "break-me",
  pageCount: pageContext.totalPages,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5,
  containerClassName: "pagination",
  subContainerClassName: "pages pagination",
  activeClassName: "active",
  initialPage: pageContext.page - 1
})));

exports.default = _default;
const query = (0, _gatsby.graphql)`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
      }
    }
  }
`;
exports.query = query;