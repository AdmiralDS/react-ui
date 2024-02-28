import * as React from 'react';

import { lightThemeText } from './lightTheme';
import { darkThemeText } from './darkTheme';

export function LightThemeCss(props: React.StyleHTMLAttributes<HTMLStyleElement>): JSX.Element {
  return <style type="text/css" children={lightThemeText} {...props} />;
}

export function DarkThemeCss(props: React.StyleHTMLAttributes<HTMLStyleElement>): JSX.Element {
  return <style type="text/css" children={darkThemeText} {...props} />;
}
