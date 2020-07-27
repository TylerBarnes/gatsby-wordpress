"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _HeroIntroSection = _interopRequireDefault(require("../../components/page-sections/HeroIntroSection"));

var _MobileHr = _interopRequireDefault(require("../../components/parts/MobileHr"));

var _default = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null), /*#__PURE__*/_react.default.createElement("p", null, "Here is the hero intro section for the home page. It features a taller image than other hero intro sections."), /*#__PURE__*/_react.default.createElement("p", null, "Height is set to 696px at mobile, 800px at tablet (656), and 1097px at desktop (1200)"), /*#__PURE__*/_react.default.createElement(_HeroIntroSection.default, {
    heroImage: data.homeBg,
    jumbo: true,
    heroHeading: "<span>Badger</span> ON",
    redHeading: "Continue Your Wisconsin Experience",
    excerpt: "<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It\u2019s a community built on meeting the needs of today\u2019s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On. </p>"
  }), /*#__PURE__*/_react.default.createElement(_MobileHr.default, null), /*#__PURE__*/_react.default.createElement("p", null, "Clicking on the down carat area will smoothly scroll you down to the heading of the red content area."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "This next hero intro section is based on the events page. This one features the standard image sizes for a hero section: 375px at mobile, 500px at tablet, 720px at desktop."), /*#__PURE__*/_react.default.createElement("p", null, "NOTE: the scroll on this one does not work; it will scroll you back up to the first example. There can only be one of these sections per page."), /*#__PURE__*/_react.default.createElement(_HeroIntroSection.default, {
    heroImage: data.eventsBg,
    heroHeading: "<span>Badger</span> ON",
    redHeading: "Events for Every Badger",
    excerpt: "<p>Being a Badger is better when we get together.  See what\u2019s happening near you, on campus, and around the globe.  With social, professional, cultural, and academic events, there\u2019s something for everyone. </p>"
  }), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."), /*#__PURE__*/_react.default.createElement("p", null, "..."));
};

exports.default = _default;
const pageQuery = graphql`
query {
    homeBg: file(relativePath: { eq: "pier-bg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    eventsBg: file(relativePath: { eq: "badger-events-hero@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    
  }
`;
exports.pageQuery = pageQuery;