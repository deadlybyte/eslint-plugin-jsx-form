/**
 * @fileoverview Disable autocapitalize for inputs that are used for a email.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/email-disable-autocapitalize"),
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
ruleTester.run("email-autocapitalize", rule, {
  valid: [
    '<input type="email" autocapitalize="none" />;',
    '<input type="email" autocapitalize="off" />;',
    '<input name="email" autocapitalize="none" />;',
    '<input name="email" autocapitalize="off" />;',
    '<input id="email" autocapitalize="none" />;',
    '<input id="email" autocapitalize="off" />;'
  ],

  invalid: [
    {
      code: '<input type="email" />;',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input type="email" autocapitalize="on" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input type="email" autocapitalize="sentences" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input type="email" autocapitalize="words" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input type="email" autocapitalize="characters" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="EmAiL" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" autocapitalize="on" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" autocapitalize="sentences" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" autocapitalize="words" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="email" autocapitalize="characters" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="EmAiL" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" autocapitalize="on" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" autocapitalize="sentences" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" autocapitalize="words" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="email" autocapitalize="characters" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for email inputs',
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
