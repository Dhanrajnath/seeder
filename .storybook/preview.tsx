import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import './storybook.css';
import theme from '../src/utils/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
