# Disable spellcheck for inputs that are used for a email. (email-disable-spellcheck)

Some browsers try to help the user by spell checking words and marking those incorrectly spelt with an underline, but this can be frustrating for users when filling in an email address on a form. Setting the **spellcheck** attribute to `false` will disable this feature.

## Rule Details

This rule aims to warn when the spellcheck attribute is not set to false on an element that is used for collecting a user's email address.

Examples of **incorrect** code for this rule:

```html
<input type="email" />
<input type="email" spellcheck="true" />
<input name="email" />
<input name="email" spellcheck="true" />
<input id="email" />
<input id="email" spellcheck="true" />
```

Examples of **correct** code for this rule:

```html
<input type="email" spellcheck="false" />
<input name="email" spellcheck="false" />
<input id="email" spellcheck="false" />
```

## When Not To Use It

Turn off this rule when the email can be spell checked by the user.

## Further Reading

https://dev.to/deadlybyte/3-html5-input-attributes-to-help-mobile-users-1ofp#spellcheck
