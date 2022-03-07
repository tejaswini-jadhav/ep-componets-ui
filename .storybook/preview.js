import { addDecorator } from '@storybook/react';
import StylesDecorator from './styles-decorator';
import '../src/index.css';

addDecorator(StylesDecorator);

const customViewports = {
  '1366x690': {
    name: '1366 x 690',
    styles: {
      width: '1366px',
      height: '690px',
    },
  },
  '1366x720': {
    name: '1366 x 720',
    styles: {
      width: '1366px',
      height: '720px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
