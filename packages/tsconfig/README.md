# @vcm/tsconfig

Shared compiler configuration.

- `base.json` — strict, plus `noUncheckedIndexedAccess`,
  `noFallthroughCasesInSwitch`, `verbatimModuleSyntax` and no unused
  locals/parameters. For packages without JSX.
- `react.json` — extends base, adds DOM libs and `react-jsx`.

```json
{ "extends": "@vcm/tsconfig/react.json", "include": ["src"] }
```
