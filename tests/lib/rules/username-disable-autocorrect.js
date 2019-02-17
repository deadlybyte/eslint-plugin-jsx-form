/**
 * @fileoverview Disable autocorrect for inputs that are used for a username.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/username-disable-autocorrect"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("username-disable-autocorrect", rule, {
  valid: [
    '<input name="username" autocorrect="off" />',
    '<input id="username" autocorrect="off" />'
  ],

  invalid: [
    {
      code: '<input name="username" />',
      errors: [
        {
          message: 'Set "autocorrect" attribute to "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" autocorrect="on" />',
      errors: [
        {
          message: 'Set "autocorrect" attribute to "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" />',
      errors: [
        {
          message: 'Set "autocorrect" attribute to "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" autocorrect="on" />',
      errors: [
        {
          message: 'Set "autocorrect" attribute to "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
