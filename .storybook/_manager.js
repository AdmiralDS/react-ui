import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { version } from '../package.json';
import LogoSvg from './Logo.svg';

const theme = create({
  brandImage: LogoSvg,
  brandTitle: `version ${version}`,
});

addons.setConfig({
  theme,
});
