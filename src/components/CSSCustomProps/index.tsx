import * as React from 'react';

import { lightThemeText } from './lightTheme';
import { darkThemeText } from './darkTheme';

export function LightThemeCssVars(props: React.StyleHTMLAttributes<HTMLStyleElement>): JSX.Element {
  return <style type="text/css" children={lightThemeText} {...props} />;
}

export function DarkThemeCssVars(props: React.StyleHTMLAttributes<HTMLStyleElement>): JSX.Element {
  return <style type="text/css" children={darkThemeText} {...props} />;
}
