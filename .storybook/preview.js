// configuration for stories that I write

import React from "react";
// Center와 addDecorator import 해주는 것 잊지 않기
import Center from "../src/components/Center/Center";
import { addDecorator } from "@storybook/react";

const theme = require("../path/to/your/theme");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // sorting option 추가 (from sb docs)
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

// global decorator 지정하는 방법
addDecorator((story) => <Center>{story()}</Center>);
