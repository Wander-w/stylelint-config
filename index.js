module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-html/html",
    "stylelint-config-html/vue",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "declaration-block-trailing-semicolon": null,
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "no-descending-specificity": null,
    /** -webkit- 禁止自动修复-webkit-前缀 */
    "value-no-vendor-prefix": null,
    /** 字体 */
    "font-family-no-missing-generic-family-keyword": null,
    /** 单引号 */
    "string-quotes": "single",
  },
};
