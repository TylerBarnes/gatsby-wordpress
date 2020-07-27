"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _CardE = _interopRequireDefault(require("../../components/content-blocks/CardE"));

var _Container = _interopRequireDefault(require("../../components/parts/Container"));

var _PageSection = _interopRequireDefault(require("../../components/page-sections/PageSection"));

var _default = ({
  data
}) => {
  console.log(data);
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_PageSection.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Image with Caption (1:1)"), /*#__PURE__*/_react.default.createElement("p", null, "This is the \"image with caption\" component - also known as Card 'E'. These are usually found in a carousel."), /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.asset29,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  })), /*#__PURE__*/_react.default.createElement("p", null, "At mobile sizes, these should render at 254px wide."), /*#__PURE__*/_react.default.createElement("p", null, "At tablet and up, they should render at 344px wide."), /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.asset30,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  })), /*#__PURE__*/_react.default.createElement("p", null, "Captions should be 18px Verlag bold."), /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.square1,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  })), /*#__PURE__*/_react.default.createElement("p", null, "There should be 32px padding between the image and the caption, and 32px padding below the caption"), /*#__PURE__*/_react.default.createElement("p", null, "They should not have their own background color, but should take the background of the parent element they live in (such as a carousel)."), /*#__PURE__*/_react.default.createElement(_Container.default, null, /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.squareBucky,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  })), /*#__PURE__*/_react.default.createElement("p", null, "As for the spacing between two of these cards, or the total spacing between these cards and the element beneath them, that is a subject for a different time.  This page just shows what they should look like by themselves. The outside padding is just for visual separation between examples.")));
};

exports.default = _default;
const pageQuery = (0, _gatsby.graphql)`
query {
    asset29: file(relativePath: { eq: "asset-29@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    asset30: file(relativePath: { eq: "asset-30@2x.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    square1: file(relativePath: { eq: "square1@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      squareBucky: file(relativePath: { eq: "squareBucky@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
  }
`;
exports.pageQuery = pageQuery;