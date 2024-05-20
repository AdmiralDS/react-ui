import type { Theme } from '.';
import { LIGHT_THEME } from '../light';

export function applyDefaultTheme({ theme }: any): { theme: Theme } {
  // Since styled-components defaults the `theme` prop to an empty object
  // inside of the styled component if a ThemeProvider is not present,
  // we check against the number of keys.
  return { theme: Object.keys(theme).length === 0 ? LIGHT_THEME : theme };
}
