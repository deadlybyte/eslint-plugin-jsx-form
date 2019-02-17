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
const constants = require("../constants");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = context => ({
  JSXOpeningElement: node => {
    const isInput = elementType(node) === constants.ELEMENT_INPUT_TYPE;

    if (isInput) {
      let inputTypeValue = "";
      let inputNameValue = "";
      let inputIdValue = "";

      if (hasProp(node.attributes, constants.TYPE_PROPERTY)) {
        inputTypeValue = getLiteralPropValue(
          getProp(node.attributes, constants.TYPE_PROPERTY)
        );
      }

      if (hasProp(node.attributes, constants.NAME_PROPERTY)) {
        inputNameValue = getLiteralPropValue(
          getProp(node.attributes, constants.NAME_PROPERTY)
        );
      }

      if (hasProp(node.attributes, constants.ID_PROPERTY)) {
        inputIdValue = getLiteralPropValue(
          getProp(node.attributes, constants.ID_PROPERTY)
        );
      }

      if (
        inputTypeValue.toUpperCase() === constants.EMAIL_MONIKER ||
        inputNameValue.toUpperCase() === constants.EMAIL_MONIKER ||
        inputIdValue.toUpperCase() === constants.EMAIL_MONIKER
      ) {
        const spellcheckValue = getLiteralPropValue(
          getProp(node.attributes, constants.SPELLCHECK_PROPERTY)
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
