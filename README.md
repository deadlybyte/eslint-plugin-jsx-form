# eslint-plugin-jsx-form

Static AST checker for HTML form rules on JSX elements.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsx-form`:

```
$ npm install eslint-plugin-username-autocapitalize --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jsx-form` globally.

## Usage

Add `jsx-form` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jsx-form"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jsx-form/rule-name": 2
  }
}
```

## Supported Rules

- email-disable-autocapitalize
- email-disable-spellcheck
- username-disable-autocapitalize
- username-disable-autocorrect
- username-disable-spellcheck
