import * as React from 'react';
import { Tooltip } from '#/components/Tooltip';
import { DARK_THEME, LIGHT_THEME } from '#/components/themes';
import { ThemeContext } from 'styled-components';

export const InverseTooltip = (props: any) => {
  const themeContext = React.useContext(ThemeContext);
  return <Tooltip {...props} theme={themeContext.name == 'dark' ? LIGHT_THEME : DARK_THEME} />;
};
