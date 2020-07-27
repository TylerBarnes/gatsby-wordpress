"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.pageQuery = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _PageSection = _interopRequireDefault(require("../../components/page-sections/PageSection"));

var _ContentCardD = _interopRequireDefault(require("../../components/content-blocks/ContentCardD"));

var _GridCardD = _interopRequireDefault(require("../../components/content-modules/GridCardD"));

var _ContentCardFlex = _interopRequireDefault(require("../../components/content-blocks/ContentCardFlex"));

var _CardE = _interopRequireDefault(require("../../components/content-blocks/CardE"));

var _PromoCardD = _interopRequireDefault(require("../../components/content-blocks/PromoCardD"));

var _HeroIntroSection = _interopRequireDefault(require("../../components/page-sections/HeroIntroSection"));

var _CommunicationForm = _interopRequireDefault(require("../../components/content-blocks/CommunicationForm"));

var _SimpleSlider = _interopRequireDefault(require("../../components/content-modules/SimpleSlider"));

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
const eventbutton = [{
  link: '#',
  text: 'Calendar'
}];
const featuredbutton = [{
  link: '#',
  text: 'See all news and stories'
}];

var _default = ({
  data
}) => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_HeroIntroSection.default, {
    heroImage: data.homeBg,
    jumbo: true,
    heroHeading: "<span>Badger</span> ON",
    redHeading: "Continue Your Wisconsin Experience",
    excerpt: "<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It\u2019s a community built on meeting the needs of today\u2019s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On. </p>"
  }), /*#__PURE__*/_react.default.createElement(_PageSection.default, null, /*#__PURE__*/_react.default.createElement(_SimpleSlider.default, {
    className: "center",
    slidesToShow: "1",
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "100px"
  }, /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.asset29,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  }), /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.asset30,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  }), /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.square1,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  }), /*#__PURE__*/_react.default.createElement(_CardE.default, {
    img: data.squareBucky,
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
  }))), /*#__PURE__*/_react.default.createElement(_CommunicationForm.default, null), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Featured Stories",
    buttons: featuredbutton,
    alt: true
  }, /*#__PURE__*/_react.default.createElement(_SimpleSlider.default, {
    className: "center",
    slidesToShow: "1",
    dots: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "100px"
  }, /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "All About That Bass",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage1,
    tags: taglist2,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Four Conversation Starters Beyond \u201CHow about Them Badgers?\u201D",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage6,
    tags: taglist2,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "More than Madison and Milwaukee",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage3,
    tags: taglist2,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage7,
    tags: taglist2,
    size: "L"
  }), /*#__PURE__*/_react.default.createElement(_ContentCardFlex.default, {
    title: "Coachella Valley",
    category: "UW NOW",
    excerpt: "La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    url: "##",
    img: data.cardImage5,
    tags: taglist2,
    size: "L"
  }))), /*#__PURE__*/_react.default.createElement(_PageSection.default, {
    heading: "Events at a Glance",
    buttons: eventbutton,
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
  }), /*#__PURE__*/_react.default.createElement(_PromoCardD.default, {
    title: "Shop The UW Alumni Store",
    url: "####"
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

      gridBg: file(relativePath: { eq: "well-read-bucky-bg@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

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