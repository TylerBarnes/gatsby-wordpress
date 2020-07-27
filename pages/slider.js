"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _SimpleSlider = _interopRequireDefault(require("../../components/content-modules/SimpleSlider"));

var _ContentCardD = _interopRequireDefault(require("../../components/content-blocks/ContentCardD"));

var _GenericPageSection = _interopRequireDefault(require("../../components/page-sections/GenericPageSection"));

var _default = () => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Here are some very preliminary carousel examples."), /*#__PURE__*/_react.default.createElement("p", null, "These carousels use a package called ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://react-slick.neostack.com/docs/example/simple-slider"
  }, "react-slick"), ", which is a React port of ", /*#__PURE__*/_react.default.createElement("a", {
    href: "http://kenwheeler.github.io/slick/"
  }, "slick carousel"), "."), /*#__PURE__*/_react.default.createElement("p", null, "These examples use the same set of six \"Card D\" tiles labeled Slide 1 through Slide 6 for easy reference."), /*#__PURE__*/_react.default.createElement("p", null, "By default Slide 1 is centered, which I think is probably what we want."), /*#__PURE__*/_react.default.createElement("p", null, "All of the examples are using the \"infinite\" setting, meaning the slides continue in a loop."), /*#__PURE__*/_react.default.createElement("p", null, "This first one has a 1000ms transition speed")), /*#__PURE__*/_react.default.createElement(_SimpleSlider.default, {
    className: "center",
    slidesToShow: "1",
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "100px"
  }, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 1",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 2",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 3",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 4",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 5",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 6",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement("p", null, "This next one has a 500ms transition speed")), /*#__PURE__*/_react.default.createElement(_SimpleSlider.default, {
    speed: "500",
    slidesToShow: "1",
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "10px"
  }, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 1",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 2",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 3",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 4",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 5",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 6",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement("p", null, "This next one has a 750ms transition speed. This one has a glitch - I have the initialSlide set to slide 5, which doesn't seem to play well with the infinite scroll feature. The active slide is way offscreen, and when you click the prev/next buttons it fast-forwards all the way to where the active slide is. I think the takeaway is that we can't use that custom initial slide feature, and we need to just put the one we want centered as the first item in the data we send.")), /*#__PURE__*/_react.default.createElement(_SimpleSlider.default, {
    speed: "750",
    slidesToShow: "1",
    initialSlide: "4",
    centerMode: true,
    dots: true,
    variableWidth: true,
    centerPadding: "10px"
  }, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 1",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 2",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 3",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 4",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 5",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Slide 6",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement("p", null, "All of these are set up to show the dot navigation at mobile, and hide it at tablet+, and to hide the prev/next arrow navigation at mobile and show it at tablet+."), /*#__PURE__*/_react.default.createElement("p", null, "The dots I have already styled so they should be pretty close.  The arrow/carat nav I have not styled yet."), /*#__PURE__*/_react.default.createElement("p", null, "Positioning of the prev/next nav is also an issue... they need to be absolutely positioned on the left and right, and they are at a different depth level than the slides themselves so we will probably need to adjust their positioning at every breakpoint to get them to fall between the slides as much as possible."), /*#__PURE__*/_react.default.createElement("p", null, "We are most likely NOT going to be able to vary the width between slides (adding extra room to accomodate the prev/next buttons, as the XD files show). We will need to work with even spacing."), /*#__PURE__*/_react.default.createElement("p", null, "Other things... keyboard navigation works out of the box once you've set focus on a slide. Swiping works out of the box also. ")));
};

exports.default = _default;