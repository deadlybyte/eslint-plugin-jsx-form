/**
 * @fileoverview Disable autocapitalize for inputs that are used for a username.
 * @author Carl Saunders
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/username-disable-autocapitalize"),
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
ruleTester.run("username-autocapitalize", rule, {
  valid: [
    '<input name="username" autocapitalize="none" />',
    '<input name="username" autocapitalize="off" />',
    '<input id="username" autocapitalize="none" />',
    '<input id="username" autocapitalize="off" />'
  ],

  invalid: [
    {
      code: '<input name="UsErNaMe" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" autocapitalize="on" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" autocapitalize="sentences" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" autocapitalize="words" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input name="username" autocapitalize="characters" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="UsErNaMe" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" autocapitalize="on" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" autocapitalize="words" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" autocapitalize="sentences" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    },
    {
      code: '<input id="username" autocapitalize="characters" />',
      errors: [
        {
          message:
            'Set "autocapitalize" attribute to "none" or "off" for username inputs',
          type: "JSXOpeningElement"
        }
      ]
    }
  ]
});
