import { createContext } from 'react';
import type { FloatingButtonProps } from './';

export const FloatingButtonMenuContext = createContext<{
  dimension?: FloatingButtonProps['dimension'];
  appearance?: FloatingButtonProps['appearance'];
  disabled?: boolean;
}>({});

FloatingButtonMenuContext.displayName = 'FloatingButtonMenuContext';
