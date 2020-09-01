# Regular Expression Cheat Sheet

## Tokens

- `.` - Any Character Except New Line
- `\d` - Digit (0-9)
- `\D` - Not a Digit (0-9)
- `\w` - Word Character (a-z, A-Z, 0-9, \_)
- `\W` - Not a Word Character
- `\s` - Whitespace (space, tab, newline)
- `\S` - Not Whitespace (space, tab, newline)

- `\b` - Word Boundary
- `\B` - Not a Word Boundary
- `^` - Beginning of a String
- `$` - End of a String

- `[]` - Matches Characters in brackets
- `[^ ]` - Matches Characters NOT in brackets
- `|` - Either Or
- `( )` - Group

## Quantifiers

- `*` - 0 or More
- `+` - 1 or More
- `?` - 0 or One
- `{3}` - Exact Number
- `{3,}` - Minimum number (e.g. 3 or More)
- `{3,4}` - Range of Numbers (Minimum, Maximum)

## Some Characters to Escape

`[].*?{}\^$|+`

## Email Regex

`[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}` (use case-insensitive flag)

`[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}` (no flag required)

## Resources

- [Regex Playground](https://regex101.com/)
- [Dummy Data](https://raw.githubusercontent.com/CoreyMSchafer/code_snippets/master/Regular-Expressions/data.txt)
- [A word on Email Regexes](https://www.regular-expressions.info/email.html)
- [StackOverflow Password Regex](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)
- [Regex in JavaScript - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
