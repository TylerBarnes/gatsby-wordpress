"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _PageSection = _interopRequireDefault(require("../../components/page-sections/PageSection"));

var _GridCardD = _interopRequireDefault(require("../../components/content-modules/GridCardD"));

var _ContentCardD = _interopRequireDefault(require("../../components/content-blocks/ContentCardD"));

var _MobileHr = _interopRequireDefault(require("../../components/parts/MobileHr"));

const buttons1 = [{
  link: '#',
  text: 'Learn More'
}];
const buttons2 = [{
  link: '#',
  text: 'Learn More'
}, {
  link: '#',
  text: 'Learn Even More'
}];

var _default = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Basic Page Section",
    buttons: buttons1,
    excerpt: "<p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p> <p>The Basic Page Section consists of a few optional header elements at the top, and an optional buttons / CTA section at the end. </p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    alt: true,
    heading: "Page Section - alt background",
    buttons: buttons1,
    excerpt: "<p>This layout can also be used with a grey background, with no other style changes necessary. </p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Basic Page Section",
    buttons: buttons1,
    excerpt: "<p>In between the optional heading section and the optional button section, all sorts of content components can live.</p> <p>On this demo page, the 'middle part' will just be text. The text copy styles are based on the 'Chapter Page - Alt Module' from the XD files.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    alt: true,
    heading: "Let's Talk Buttons",
    buttons: buttons1,
    excerpt: "<p>At mobile sizes up to 655px, these buttons are 100% width, with a 36px margin on each side. </p><p>At 656px and wider, the button width is 'auto' based on the width of the text.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Two Buttons",
    buttons: buttons2,
    excerpt: "<p>The button / CTA section at the bottom can have one or two buttons in it.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    alt: true,
    heading: "Button Styles",
    buttons: buttons1,
    excerpt: "<p>The standard button style is background #c5050c, text white, 16px uppercase.</p> <p>Hovering over a button changes the background to #810000 and adds a drop shadow.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Background Image",
    buttons: buttons1,
    bgImage: data.gridBg,
    excerpt: "<p>A page section can also have a background image. That's pretty neat.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    alt: true,
    buttons: buttons1,
    excerpt: " <p>Sometimes a page section doesn't have a title at all. It just goes straight into the content.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "No Buttons",
    excerpt: "<p>And sometimes a page section doesn't have any buttons. Just a heading and some content.</p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Events at a Glance",
    buttons: buttons1,
    bgImage: data.gridBg
  }, /*#__PURE__*/_react.default.createElement(_GridCardD.default, null, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 23",
    endDate: "Feb. 28",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN",
    url: "#sgjserthsdghsdr"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 26",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA",
    url: "adfhadsfhasfdhgas"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 26",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ",
    url: "/afhasfhsadf"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 27",
    title: "UW-Madison Nobel Prize Laureate \u2013 Jonathan Patz in Los Angeles",
    category: "Global Hotspots",
    venue: "Aquarium of the Pacific",
    location: "Long Beach, CA",
    url: "/afgasdfgdasg"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 22",
    endDate: "Apr. 4",
    title: "Singapore, Thailand, Angkor Wat",
    category: "Travel",
    location: "Southeast Asia",
    url: "/sdfghsdgfhsdf"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 31",
    title: "Higher Education Cybersecurity: UW\u2013Madison Is Moving FORWARD!",
    category: "HEALTHY AGING SERIES",
    venue: "Capitol Lakes Retirement Community",
    location: "Madison",
    url: "/asfgasgasd"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Apr. 3",
    title: "The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World",
    category: "Global Hotspots",
    venue: "Fluno Center",
    location: "Madison",
    url: "/asdfgasdgasd"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Apr. 23",
    title: "UW\u2013Madison Day at the State Capitol",
    venue: "Park Hotel",
    location: "Madison",
    url: "/asdgasdgdasg"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 22",
    endDate: "Apr. 4",
    title: "Singapore, Thailand, Angkor Wat",
    category: "Travel",
    location: "Southeast Asia",
    url: "/fadsfds"
  }))));
};

exports.default = _default;
const pageQuery = graphql`
query {
    gridBg: file(relativePath: { eq: "well-read-bucky-bg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;
exports.pageQuery = pageQuery;