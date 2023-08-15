import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import LogoSvg from './Logo.svg';

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/AdmiralDS',
  brandImage: LogoSvg,
  brandTitle: `version 6.0.0`,
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
