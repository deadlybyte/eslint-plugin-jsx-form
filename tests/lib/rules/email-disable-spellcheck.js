/**
 * @fileoverview Disable spellcheck for inputs that are used for a email.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/email-disable-spellcheck"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("email-disable-spellcheck", rule, {
  valid: [
    '<input type="email" spellcheck="false" />',
    '<input name="email" spellcheck="false" />',
    '<input id="email" spellcheck="false" />'
  ],

  invalid: [
    {
      code: '<input type="email" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input type="email" spellcheck="true" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="EmAiL" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" spellcheck="true" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="EmAiL" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" spellcheck="true" />',
      errors: [
        {
          message: 'Set "spellcheck" attribute to "false" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
