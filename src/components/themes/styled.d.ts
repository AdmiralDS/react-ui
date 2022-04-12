import 'styled-components';
import type { Theme } from './index';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    description?: string;
  }
}
