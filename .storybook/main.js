module.exports = {
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
