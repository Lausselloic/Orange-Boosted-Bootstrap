// Note: addon-measure is forced to false in order to avoid it enabled in ZeroHeight
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        measure: false
      }
    },
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/html"
}
