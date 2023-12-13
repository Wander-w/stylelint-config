module.exports = {
  extends: [
    /** 标准规范 */
    "stylelint-config-standard",
    /** prettier */
    "stylelint-prettier/recommended",
    /** scss */
    "stylelint-config-standard-scss",
    /** vue */
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-html/html",
    "stylelint-config-html/vue",
    /** 预设排序规则 */
    "stylelint-config-clean-order",
  ],
  rules: {
    "declaration-block-trailing-semicolon": null,
    "at-rule-no-unknown": null,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "no-descending-specificity": null,
    /** 禁止自动修复-webkit-前缀的值 */
    "value-no-vendor-prefix": null,
    /** 禁止自动修复-webkit-前缀的属性 */
    "property-no-vendor-prefix": null,
    /** 字体 */
    "font-family-no-missing-generic-family-keyword": null,
    /** 微信小程序尺寸单位 */
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    /** 微信小程序最外层 */
    "selector-type-no-unknown": [true, { ignoreTypes: ["page"] }],
    /** vue的 :deep() :global() :slotted() */
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["deep", "global", "slotted"] },
    ],
    /**
     * 可选值: 'content' | 'prefix'
     * content 会将媒体查询的 max-width 等转为 >= 这种,部分手机浏览器完全不支持
     */
    'media-feature-range-notation': 'prefix'
  },
};
