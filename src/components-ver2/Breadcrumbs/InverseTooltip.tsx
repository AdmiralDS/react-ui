import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { DARK_THEME, LIGHT_THEME } from '#src/components/themes';
import { ThemeContext } from 'styled-components';

export const InverseTooltip = (props: any) => {
  const themeContext = React.useContext(ThemeContext);
  return <Tooltip {...props} theme={themeContext.name == 'dark' ? LIGHT_THEME : DARK_THEME} />;
};
