import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { version } from '../package.json';
import LogoSvg from './Logo.svg';

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/AdmiralDS',
  brandImage: LogoSvg,
  brandTitle: `version ${version}`,
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
