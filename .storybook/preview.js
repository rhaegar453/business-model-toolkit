import './style.css'
import {withThemes} from '@react-theming/storybook-addon';
/* import { theme } from '../src/utils/theme'; */
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, ThemeType } from '../src/utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

addDecorator(withThemes(ThemeProvider,[theme]))
