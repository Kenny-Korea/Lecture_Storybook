// configuration file for storybook itself

module.exports = {
  // stories.xx 라는 확장자는 갖고 있으면 storybook이 읽어들임
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
};
