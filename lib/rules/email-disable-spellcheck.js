/**
 * @fileoverview Disable spellcheck for inputs that are used for a email.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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
        const spellcheckValue = getLiteralPropValue(
          getProp(node.attributes, "spellcheck")
        );
        if (spellcheckValue === undefined || spellcheckValue === true) {
          context.report({
            node,
            message: 'Set "spellcheck" attribute to "false" for email inputs'
          });
        }
      }
    }
  }
});
