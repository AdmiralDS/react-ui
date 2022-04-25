import '@emotion/react';
import type { Theme as LibTheme } from 'components/themes';

declare module '@emotion/react' {
  export interface Theme extends LibTheme {
    description?: string;
  }
}
