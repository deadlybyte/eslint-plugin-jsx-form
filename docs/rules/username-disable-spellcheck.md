# Disable spellcheck for input that are used for a username. (username-disable-spellcheck)

Some browsers try to help the user by spell checking words and marking those incorrectly spelt with an underline, but this can be frustrating for users when filling in a username on a form. Setting the **spellcheck** attribute to `false` will disable this feature.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```html
<input name="username" />
<input name="username" spellcheck="true" />
<input id="username" />
<input id="username" spellcheck="true" />
```

Examples of **correct** code for this rule:

```html
<input name="username" spellcheck="false" />
<input id="username" spellcheck="false" />
```

## When Not To Use It

Turn off this rule when the username can be spell checked by the user.

## Further Reading

https://dev.to/deadlybyte/3-html5-input-attributes-to-help-mobile-users-1ofp#spellcheck
