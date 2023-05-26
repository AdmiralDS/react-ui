import 'styled-components';
import type { Theme } from './themes';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    description?: string;
  }
}
