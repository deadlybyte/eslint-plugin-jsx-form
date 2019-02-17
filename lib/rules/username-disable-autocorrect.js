/**
 * @fileoverview Disable autocorrect for inputs that are used for a username.
 * @author Carl Saunders
 */
"use strict";

const elementType = require("jsx-ast-utils/elementType");
const getProp = require("jsx-ast-utils/getProp");
const getLiteralPropValue = require("jsx-ast-utils/getLiteralPropValue");
const hasProp = require("jsx-ast-utils/hasProp");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = context => ({
  JSXOpeningElement: node => {
    const isInput = elementType(node) === "input";

    if (isInput) {
      let inputNameValue;
      let inputIdValue;

      if (hasProp(node.attributes, "name")) {
        inputNameValue = getLiteralPropValue(getProp(node.attributes, "name"));
      }

      if (hasProp(node.attributes, "id")) {
        inputIdValue = getLiteralPropValue(getProp(node.attributes, "id"));
      }

      if (inputNameValue === "username" || inputIdValue === "username") {
        const autocorrectValue = getLiteralPropValue(
          getProp(node.attributes, "autocorrect")
        );
        if (
          !autocorrectValue ||
          (autocorrectValue !== "none" && autocorrectValue !== "off")
        ) {
          context.report({
            node,
            message: 'Set "autocorrect" attribute to "off" for username inputs'
          });
        }
      }
    }
  }
});
