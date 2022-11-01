# stylelint-config-jaz

## Usage

### Install

```
pnpm add -D stylelint stylelint-config-jaz
```

### Edit `.stylelintrc.js`

```js
module.exports = {
  extends: ["stylelint-config-jaz"],
};
```

### VScode Automatic formatting

#### Install Plugin

- Stylelint 【stylelint.vscode-stylelint】

#### Edit `.vscode/settings.json`

```json
{
  "stylelint.validate": ["css", "scss", "vue", "html"],
  "stylelint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```
