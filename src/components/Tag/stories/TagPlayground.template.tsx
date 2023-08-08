import * as React from 'react';
import { Tag } from '@admiral-ds/react-ui';
import type { TagProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const TagPlaygroundTemplate = (args: TagProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <Tag {...args}>Playground</Tag>
      </ThemeProvider>
    </>
  );
};
