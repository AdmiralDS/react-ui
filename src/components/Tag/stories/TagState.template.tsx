import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import type { TagProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

const clickHandler = () => console.log('click active tag');

export const TagStateTemplate = ({ themeBorderKind, ...props }: TagProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Tags>
        <Tag {...props} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...props}>Passive</Tag>
      </Tags>
    </ThemeProvider>
  );
};
