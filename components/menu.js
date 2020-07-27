"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _core = require("@chakra-ui/core");

var _getUrlPath = require("../utils/get-url-path");

var _default = () => {
  const {
    wpMenu
  } = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `);
  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 10,
    style: {
      maxWidth: `100%`
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Menu, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    autoFlow: "column"
  }, wpMenu.menuItems.nodes.map((menuItem, i) => {
    var _menuItem$connectedNo, _menuItem$connectedNo2, _menuItem$connectedNo3;

    if (menuItem.parentId) {
      return null;
    }

    const path = (_menuItem$connectedNo = menuItem === null || menuItem === void 0 ? void 0 : (_menuItem$connectedNo2 = menuItem.connectedNode) === null || _menuItem$connectedNo2 === void 0 ? void 0 : (_menuItem$connectedNo3 = _menuItem$connectedNo2.node) === null || _menuItem$connectedNo3 === void 0 ? void 0 : _menuItem$connectedNo3.uri) !== null && _menuItem$connectedNo !== void 0 ? _menuItem$connectedNo : menuItem.url;
    return /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
      key: i + menuItem.url,
      style: {
        display: `block`
      },
      to: (0, _getUrlPath.normalizePath)(path)
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      w: "100%",
      as: _core.Button
    }, menuItem.label));
  })))) : null;
};

exports.default = _default;