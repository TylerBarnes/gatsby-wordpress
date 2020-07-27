"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _ContentCardFlex = _interopRequireDefault(require("../../components/content-blocks/ContentCardFlex"));

var _GenericPageSection = _interopRequireDefault(require("../../components/page-sections/GenericPageSection"));

const taglist1 = [{
  link: '#',
  tag: 'Tag 1'
}, {
  link: '#',
  tag: 'Tag 2'
}, {
  link: '#',
  tag: 'Tag 3'
}, {
  link: '#',
  tag: 'Tag 4'
}, {
  link: '#',
  tag: 'Tag 5'
}, {
  link: '#',
  tag: 'Tag 6'
}, {
  link: '#',
  tag: 'Tag 7'
}, {
  link: '#',
  tag: 'Tag 8'
}, {
  link: '#',
  tag: 'Tag 9'
}];
const taglist2 = [{
  link: '#',
  tag: 'Tag 1'
}, {
  link: '#',
  tag: 'Tag 2'
}, {
  link: '#',
  tag: 'Tag 3'
}, {
  link: '#',
  tag: 'Tag 4'
}];

var _default = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_GenericPageSection.default, {
    pad: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Content Card (FLEXIBLE HEIGHTS"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("em", null, "Note: on this page, when there are references to layouts breaking down, it probably means that the card height is taller than the design due to excess content."))), /*#__PURE__*/_react.default.createElement("p", null, "Content Cards can be for either stories (Story Card) or events (Event Card). They come in the following sizes:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "1/3 (S): 344px wide, 2:1 image"), /*#__PURE__*/_react.default.createElement("li", null, "1/2 (M): 528px wide, 2:1 image "), /*#__PURE__*/_react.default.createElement("li", null, "2/3 (L): 712px wide, 2:1 image"), /*#__PURE__*/_react.default.createElement("li", null, "5/6 (XL): 896px wide, 3:1 image"), /*#__PURE__*/_react.default.createElement("li", null, "1-Full (XXL): 1080px wide, 3:1 image")), /*#__PURE__*/_react.default.createElement("p", null, "At mobile (screens smaller than 656px wide), all Content Card sizes display identically at 256px wide."), /*#__PURE__*/_react.default.createElement("p", null, "At tablet (screens between 656px-1199px wide), all Content Card sizes display identically at 528px wide with a 2:1 image (identical to the \"M\" size above)"), /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("h2", null, "1/3 (S) Content Card"), /*#__PURE__*/_react.default.createElement("p", null, "This size card displays at 256px wide on mobile and 344px wide on all larger screens."), /*#__PURE__*/_react.default.createElement("p", null, "When an image is present, there is a 150 character limit on the excerpt."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage1,
    tags: taglist2
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Badger Bowl Firsts",
    category: "UW NOW",
    excerpt: "First played in 1902, the Rose Bowl is the nation\u2019s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage6,
    tags: taglist1
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Even with the 150 character exerpt limit, a long title can push the limits of the card height. The following example has a title that spans 4 lines on mobile, and the result is that ", /*#__PURE__*/_react.default.createElement("strike", null, "the header section looks cramped"), " the card height grows larger."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "UW NOW",
    excerpt: "First played in 1902, the Rose Bowl is the nation\u2019s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "#",
    tags: taglist2,
    img: data.cardImage6
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "We probably will want to impose a character limit on titles as well in order to prevent this issue."), /*#__PURE__*/_react.default.createElement("p", null, "When there is no image, the excerpt limit is 250 characters."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "#",
    tags: taglist2
  }), /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 3",
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "Global Hot Spots",
    venue: "Fluno Center",
    location: "Madison",
    img: data.cardImage3
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "If we add an end date, this card still looks okay at mobile despite the long title. But at tablet and desktop, the two-line date plus the long title cause ", /*#__PURE__*/_react.default.createElement("strike", null, "a breakdown"), " the card height to increase. "), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 3",
    endDate: "Apr. 5",
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "Global Hot Spots",
    venue: "Fluno Center",
    location: "Madison",
    img: data.cardImage3
  }), /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Mar. 31",
    title: "Higher Education Cybersecurity: UW\u2013Madison Is Moving FORWARD!",
    category: "HEALTHY AGING SERIES",
    venue: "Capitol Lakes Retirement Community",
    location: "Madison"
  }), /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "#",
    tags: taglist2
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h2", null, "1/2 (M) Content Card"), /*#__PURE__*/_react.default.createElement("p", null, "This size card displays at 256px wide on mobile and 528px wide on all larger screens."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage1,
    tags: taglist2,
    size: "M"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Event Card (M):"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 3",
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "Global Hot Spots",
    venue: "Fluno Center",
    location: "Madison",
    img: data.cardImage3,
    size: "M"
  }), /*#__PURE__*/_react.default.createElement("p", null, "(M) card size can be shown without an image."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Mar. 31",
    title: "Higher Education Cybersecurity: UW\u2013Madison Is Moving FORWARD!",
    category: "HEALTHY AGING SERIES",
    venue: "Capitol Lakes Retirement Community",
    location: "Madison",
    size: "M"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Story card (M), no image"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "#",
    tags: taglist2,
    size: "M"
  }), /*#__PURE__*/_react.default.createElement("h2", null, "2/3 (L) Content Card"), /*#__PURE__*/_react.default.createElement("p", null, "This size card displays at 256px wide on mobile, 528px wide at tablet, and 712px on all larger screens."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage1,
    tags: taglist2,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Event Card (L):"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 3",
    title: "The Past, Present, and Future of Rainstorms ",
    category: "Global Hot Spots",
    venue: "Fluno Center",
    location: "Madison",
    img: data.cardImage3,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement("p", null, "Images are required for (L) size cards."), /*#__PURE__*/_react.default.createElement("p", null, "In the example above, the title is cut off at two lines and the content fits within the maximum height for the card. In the example below, the title is longer and the Card ", /*#__PURE__*/_react.default.createElement("strike", null, "layout begins to break down"), " height increases (at desktop)."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 3",
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "Global Hot Spots",
    venue: "Fluno Center",
    location: "Madison",
    img: data.cardImage3,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "When we use a very long title on a story, the ", /*#__PURE__*/_react.default.createElement("strike", null, "layout begins to break down"), " card height increases."), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "UW NOW",
    excerpt: "First played in 1902, the Rose Bowl is the nation\u2019s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "#",
    tags: taglist2,
    img: data.cardImage7,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement("p", null, "The long title works okay when there is no excerpt"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World",
    category: "UW NOW",
    excerpt: "First played in 1902",
    url: "#",
    tags: taglist2,
    img: data.cardImage7,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h2", null, "5/6 (XL) Content Card"), /*#__PURE__*/_react.default.createElement("p", null, "This size card displays at 256px wide on mobile, 528px wide at tablet, and 896px on all larger screens."), /*#__PURE__*/_react.default.createElement("p", null, "At desktop size, this size has an image with a 3:1 aspect ratio (896 x 298). At smaller sizes, the card will use the standard 2:1 image size. "), /*#__PURE__*/_react.default.createElement("p", null, "Event Card (XL):"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 29",
    endDate: "May 3",
    title: "The Kentucky Derby",
    category: "Athletic Travel",
    venue: "Churchill Downs",
    location: "Louisville, KY",
    img: data.cardImage5,
    featureImg: data.cardImage4,
    size: "XL"
  }), /*#__PURE__*/_react.default.createElement("h2", null, "1-Full (XXL) Content Card"), /*#__PURE__*/_react.default.createElement("p", null, "This size card displays at 256px wide on mobile, 528px wide at tablet, and 1080px on all larger screens."), /*#__PURE__*/_react.default.createElement("p", null, "At desktop size, this size has an image with a 3:1 aspect ratio (1080 x 360). At smaller sizes, the card will use the standard 2:1 image size. "), /*#__PURE__*/_react.default.createElement("p", null, "Event Card (XXL):"), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    startDate: "Apr. 29",
    endDate: "May 3",
    title: "The Kentucky Derby",
    category: "Athletic Travel",
    venue: "Churchill Downs",
    location: "Louisville, KY",
    img: data.cardImage5,
    featureImg: data.cardImage4,
    size: "XXL"
  })));
};

exports.default = _default;
const pageQuery = graphql`
query {
    cardImage1: file(relativePath: { eq: "Feb_Richard_Davis_Web_01@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage2: file(relativePath: { eq: "12_DutchWaterways_header@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage3: file(relativePath: { eq: "17LEARN_JakeWood_manis_29.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage4: file(relativePath: { eq: "lead_720_405@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage5: file(relativePath: { eq: "lead_720_405-2-1-a@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage6: file(relativePath: { eq: "fball_ILL_band18_0556-3@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage7: file(relativePath: { eq: "19AP_DowntownMadisonInc_NewFacesNPlaces_Manis_13@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
  }
`;
exports.pageQuery = pageQuery;