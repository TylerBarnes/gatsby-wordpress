"use strict";

exports.__esModule = true;
exports.fragments = void 0;

var _gatsby = require("gatsby");

const fragments = (0, _gatsby.graphql)`
  fragment HeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;
exports.fragments = fragments;