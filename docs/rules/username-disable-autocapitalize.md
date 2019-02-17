# Disable autocapitalize for inputs that are used for a username. (username-disable-autocapitalize)

Some browsers try to help the user by auto-capitalizing words, but this can be frustrating for users when filling in a username on a form. Setting the **autocapitalize** attribute to `none` or `off` will disable this feature.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```html
<input name="username" />
<input name="username" autocapitalize="on" />
<input name="username" autocapitalize="sentences" />
<input name="username" autocapitalize="words" />
<input name="username" autocapitalize="characters" />
<input id="username" />
<input id="username" autocapitalize="on" />
<input id="username" autocapitalize="sentences" />
<input id="username" autocapitalize="words" />
<input id="username" autocapitalize="characters" />
```

Examples of **correct** code for this rule:

```html
<input name="username" autocapitalize="none" />
<input name="username" autocapitalize="off" />
<input id="username" autocapitalize="none" />
<input id="username" autocapitalize="off" />
```

## When Not To Use It

Turn off this rule when the username is case sensitive.

## Further Reading

https://dev.to/deadlybyte/3-html5-input-attributes-to-help-mobile-users-1ofp#autocapitalize
