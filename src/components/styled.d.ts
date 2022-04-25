import 'styled-components';
import type { Theme } from './themes/index';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    description?: string;
  }
}
