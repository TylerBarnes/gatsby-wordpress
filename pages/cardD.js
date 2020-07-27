"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _ContentCardD = _interopRequireDefault(require("../../components/content-blocks/ContentCardD"));

var _PromoCardD = _interopRequireDefault(require("../../components/content-blocks/PromoCardD"));

var _GenericPageSection = _interopRequireDefault(require("../../components/page-sections/GenericPageSection"));

var _MobileHr = _interopRequireDefault(require("../../components/parts/MobileHr"));

var _default = () => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Card D (square tile card)"), /*#__PURE__*/_react.default.createElement("p", null, "This is Card 'D' - the square tile card. These are usually found in tile grids."), /*#__PURE__*/_react.default.createElement("p", null, "There are several variations. first, here are some event cards."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 23",
    endDate: "Feb. 28",
    title: "Wisconsin vs. Rutgers \u2013 Indianapolis Basketball Game Watch",
    category: "GAME WATCH",
    venue: "Keystone Sports Review",
    location: "Indianapolis, IN",
    url: "#####"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "On mobile, these should be 256px wide, with an 18px padding."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 26",
    title: "Coachella Valley",
    category: "UW NOW",
    venue: "La Quinta Resort and Club",
    location: "La Quinta, CA",
    url: "######"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "On tablet and larger, these should be 344px wide, with 32px padding."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 26",
    title: "WAA: Tucson Chapter Founders\u2019 Day Celebration",
    category: "Founder's Day",
    venue: "The Lodge at Ventana Canyon",
    location: "Tucson, AZ",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "The date should be 24px font size in mobile, 32px at larger screen sizes."), /*#__PURE__*/_react.default.createElement("p", null, "There should be 12px space between the date and title in mobile, 24px at larger sizes."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Feb. 27",
    title: "UW-Madison Nobel Prize Laureate \u2013 Jonathan Patz in Los Angeles",
    category: "Global Hotspots",
    venue: "Aquarium of the Pacific",
    location: "Long Beach, CA",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "There should be 12px (18px) spacing above and below the category text, and 12px (18px) above and below the red separator bar."), /*#__PURE__*/_react.default.createElement("p", null, "Sometimes there is no category. If so, the red separator should go directly below the title text (same spacing rules apply)."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 22",
    endDate: "Apr. 4",
    title: "Singapore, Thailand, Angkor Wat",
    category: "Travel",
    location: "Southeast Asia",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "The red title text should be Mrs. Eaves Narrow, Bold & Italic - 20px/24px. "), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 31",
    title: "Higher Education Cybersecurity: UW\u2013Madison Is Moving FORWARD!",
    category: "HEALTHY AGING SERIES",
    venue: "Capitol Lakes Retirement Community",
    location: "Madison",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "The category text should be 13px/14px, and boldness at \"Black\"."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Apr. 3",
    title: "The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World",
    category: "Global Hotspots",
    venue: "Fluno Center",
    location: "Madison",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Venue & location lines should be 16px/18px. Location should be bold. "), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Apr. 23",
    title: "UW\u2013Madison Day at the State Capitol",
    venue: "Park Hotel",
    location: "Madison",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "The date and title should present as clickable links, changing color and showing underline when the card is hovered over."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    startDate: "Mar. 22",
    endDate: "Apr. 4",
    title: "Singapore, Thailand, Angkor Wat",
    category: "Travel",
    location: "Southeast Asia",
    url: "/"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Now here are some story cards."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "More than Madison and Milwaukee",
    category: "story",
    excerpt: "Ever since his days as a high schooler in Racine, Wisconsin,  Tito Diaz has worked to connect multicultural students with academic success.",
    url: "#"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Padding should be 18px at mobile and 32px at desktop."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "One on One at One Alumni Place: Deborah Blum MA\u201982",
    category: "video",
    excerpt: "WAA chief alumni officer Sarah Schutt talks with author Deb Blum  MA\u201982 about her latest book, Poison Squad. Blum is a former UW professor of  journalism, and Poison Squad is the university\u2019s 2019\u201320 selection for Go Big Read.",
    url: "#"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "The entire card is a clickable link; but the title should present as a clickable text link, along with the \"Read More\" text after the excerpt."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "We Can Guess Your Generation Based on Your Snow-Day Schedule",
    category: "poll",
    excerpt: "Few gifts are better to UW students than a school-wide snow day. Tell us  how you\u2019d spend your snow day and we\u2019ll guess your generation.",
    url: "#"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Excerpt copy should be 16px at mobile and 18px at desktop."), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "The Long and Winding Road from Major to Career",
    category: "story",
    excerpt: "From YouTube star to professional BMX rider, Badger alums have proven the versalitity of a UW diploma. ",
    urlText: "Via On Wisconsin Magazine.",
    linkStyle: "arrow",
    url: "#"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "\xA0"), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "Badgering: Sasanehsaeh Pyawasay \u201907, MS\u201909",
    category: "story",
    excerpt: "As the University of Wisconsin System\u2019s first Native American student success coordinator, Sasanehsaeh Pyawasay  advocates on behalf of Native students \u2014 particularly those from within the 12 tribes resident in Wisconsin.",
    url: "#"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "\xA0"), /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "Proud to be a Badger: Roger Hamilton",
    category: "story",
    excerpt: "As we watched the procession of first responders pass at the memorial for Officer Garrett Swasey, my two boys  and I were thrilled to see a University of Wisconsin Police vehicle. I\u2019m proud to be a Badger!",
    url: "#"
  }), /*#__PURE__*/_react.default.createElement("p", null, "\xA0")), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "Academy Award Badgers",
    category: "story",
    excerpt: "The Academy Awards nominations were just announced. Are any Badgers on the list?",
    url: "#####"
  }), /*#__PURE__*/_react.default.createElement("p", null, "\xA0")), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement(_ContentCardD.default, {
    title: "Former Fox News anchor Greta Van Susteren featured in Wisconsin Alumni Association\u2019s Thank You, 72 podcast and radio series",
    category: "podcast",
    excerpt: "Outagamie County native talks about life as an attorney, broadcaster, and the \u201Ctrial of the century.\u201D",
    url: "######",
    urlText: "listen"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Promo Card (square tile card)"), /*#__PURE__*/_react.default.createElement("p", null, "This is the Promotional variant of Card 'D'. These are usually found in tile grids as accents."), /*#__PURE__*/_react.default.createElement("p", null, "On mobile, these should be 256px wide."), /*#__PURE__*/_react.default.createElement(_PromoCardD.default, {
    title: "Get Out And Travel",
    url: "####"
  })), /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, null, /*#__PURE__*/_react.default.createElement(_MobileHr.default, null)));
};

exports.default = _default;