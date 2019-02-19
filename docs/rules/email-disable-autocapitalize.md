# Disable autocapitalize for inputs that are used for a email. (email-disable-autocapitalize)

Some browsers try to help the user by auto-capitalizing words, but this can be frustrating for users when filling in an email address on a form. Setting the **autocapitalize** attribute to `none` or `off` will disable this feature.

## Rule Details

This rule aims to warn when the autocapitalize attribute is not set to none or off on an element that is used for collecting a user's email address.

Examples of **incorrect** code for this rule:

```html
<input type="email" />
<input type="email" autocapitalize="on" />
<input type="email" autocapitalize="sentences" />
<input type="email" autocapitalize="words" />
<input type="email" autocapitalize="characters" />
<input name="email" />
<input name="email" autocapitalize="on" />
<input name="email" autocapitalize="sentences" />
<input name="email" autocapitalize="words" />
<input name="email" autocapitalize="characters" />
<input id="email" />
<input id="email" autocapitalize="on" />
<input id="email" autocapitalize="sentences" />
<input id="email" autocapitalize="words" />
<input id="email" autocapitalize="characters" />
```

Examples of **correct** code for this rule:

```html
<input type="email" autocapitalize="none" />
<input type="email" autocapitalize="off" />
<input name="email" autocapitalize="none" />
<input name="email" autocapitalize="off" />
<input id="email" autocapitalize="none" />
<input id="email" autocapitalize="off" />
```

## When Not To Use It

Turn off this rule when the email is case sensitive.

## Further Reading

https://dev.to/deadlybyte/3-html5-input-attributes-to-help-mobile-users-1ofp#autocapitalize
