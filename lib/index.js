/**
 * @fileoverview Static AST checker for HTML form rules on JSX elements.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    rules: {
      "jsx-form/email-disable-autocapitalize": 2,
      "jsx-form/email-disable-spellcheck": 2,
      "jsx-form/username-disable-autocapitalize": 2,
      "jsx-form/username-disable-autocorrect": 2,
      "jsx-form/username-disable-spellcheck": 2
    }
  }
};
