import * as React from 'react';
import { Tag } from '@admiral-ds/react-ui';
import type { TagProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const TagPlaygroundTemplate = ({ themeBorderKind, ...props }: TagProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <Tag {...props}>Playground</Tag>
      </ThemeProvider>
    </>
  );
};
