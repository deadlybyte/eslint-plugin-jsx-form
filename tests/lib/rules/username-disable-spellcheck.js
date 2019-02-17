/**
 * @fileoverview Disable spellcheck for input that are used for a username.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/username-disable-spellcheck"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("username-disable-spellcheck", rule, {
  valid: [
    '<input name="username" spellcheck="false" />',
    '<input id="username" spellcheck="false" />'
  ],
  invalid: [
    {
      code: '<input name="UsErNaMe" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" spellcheck="true" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="UsErNaMe" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" spellcheck="true" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
