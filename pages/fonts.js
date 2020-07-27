"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = _interopRequireDefault(require("../../components/Layout"));

var _PageSection = _interopRequireDefault(require("../../components/page-sections/PageSection"));

var _cssVariables = require("../../components/css-variables");

const pageBlock = ({
  className
}) => {
  return /*#__PURE__*/_react.default.createElement(_Layout.default, null, /*#__PURE__*/_react.default.createElement(_PageSection.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Text Styles and sizes"), /*#__PURE__*/_react.default.createElement("p", null, "Font sizes increase from mobile at 656px screen width."), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__cardTitle`
  }, "Card Title Style"), /*#__PURE__*/_react.default.createElement("p", null, "Mrs. Eaves XL Serif Narrow OT, Bold & Italic, #c5050c, 24px/32px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__cardTitleSmall`
  }, "Card D Title Style"), /*#__PURE__*/_react.default.createElement("p", null, "Mrs. Eaves XL Serif Narrow OT, Bold & Italic, #c5050c, 20px/24px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__cardDate`
  }, "Card Date Style"), /*#__PURE__*/_react.default.createElement("p", null, "Mrs. Eaves XL Serif  OT, Bold & Italic, #3c3c3c, 42px/52px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__cardDateSmall`
  }, "Card D Date Style"), /*#__PURE__*/_react.default.createElement("p", null, "Mrs. Eaves XL Serif  OT, Bold & Italic, #3c3c3c, 24px/32px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__category`
  }, "Category Style"), /*#__PURE__*/_react.default.createElement("p", null, "Verlag Black (font-weight 800), uppercase, #777777, 13px/14px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__venue`
  }, "Venue Style"), /*#__PURE__*/_react.default.createElement("p", null, "Verlag Book, #3c3c3c, 16px/18px"), /*#__PURE__*/_react.default.createElement("div", {
    className: `${className}__location`
  }, "Location Style"), /*#__PURE__*/_react.default.createElement("p", null, "Verlag Bold, #3c3c3c, 16px/18px"))));
};

const styledPageBlock = (0, _styledComponents.default)(pageBlock)`
    padding: 2rem;
    
    p {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        font-size: ${_cssVariables.sizes.s14};
        border-bottom: 1px solid #000;
    }
    &__cardTitle {
        ${_cssVariables.mixins.cardTitle}
    }
    &__cardTitleSmall {
        ${_cssVariables.mixins.cardTitle}
        font-size: ${_cssVariables.sizes.s20};
        @media screen and ${_cssVariables.breakpoints.tabletS} {
            font-size: ${_cssVariables.sizes.s24};
        }
    }
    &__cardDate {
        ${_cssVariables.mixins.cardDate}
    }
    &__cardDateSmall {
        ${_cssVariables.mixins.cardDate}
        font-size: ${_cssVariables.sizes.s24};
        @media screen and ${_cssVariables.breakpoints.tabletS} {
            font-size: ${_cssVariables.sizes.s32};
        }
    }
    &__category {
        ${_cssVariables.mixins.category}
    }
    &__venue {
        ${_cssVariables.mixins.venue}
    }
    &__location {
        ${_cssVariables.mixins.location}
    }
`;
var _default = styledPageBlock;
exports.default = _default;