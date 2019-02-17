# Disable autocorrect for inputs that are used for a username. (username-disable-autocorrect)

iOS will try to help the user and auto correct words that it thinks are mistakes, but this can be frustrating for users when filling in a username on a form. Setting the **autocorrect** attribute to `off` will disable this feature.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```html
<input name="username" />
<input name="username" autocorrect="on" />
<input id="username" />
<input id="username" autocorrect="on" />
```

Examples of **correct** code for this rule:

```html
<input name="username" autocorrect="off" />
<input id="username" autocorrect="off" />
```

## When Not To Use It

Turn off this rule when the username can be auto corrected by the browser.

## Further Reading

https://dev.to/deadlybyte/3-html5-input-attributes-to-help-mobile-users-1ofp#autocorrect
