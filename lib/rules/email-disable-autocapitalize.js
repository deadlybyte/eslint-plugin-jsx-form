/**
 * @fileoverview Disable autocapitalize for inputs that are used for a email.
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
      let inputTypeValue;
      let inputNameValue;
      let inputIdValue;

      if (hasProp(node.attributes, "type")) {
        inputTypeValue = getLiteralPropValue(getProp(node.attributes, "type"));
      }

      if (hasProp(node.attributes, "name")) {
        inputNameValue = getLiteralPropValue(getProp(node.attributes, "name"));
      }

      if (hasProp(node.attributes, "id")) {
        inputIdValue = getLiteralPropValue(getProp(node.attributes, "id"));
      }

      if (
        inputTypeValue === "email" ||
        inputNameValue === "email" ||
        inputIdValue === "email"
      ) {
        const autocaptializeValue = getLiteralPropValue(
          getProp(node.attributes, "autocapitalize")
        );
        if (
          !autocaptializeValue ||
          (autocaptializeValue !== "none" && autocaptializeValue !== "off")
        ) {
          context.report({
            node,
            message:
              'Set "autocapitalize" attribute to "none" or "off" for email inputs'
          });
        }
      }
    }
  }
});
