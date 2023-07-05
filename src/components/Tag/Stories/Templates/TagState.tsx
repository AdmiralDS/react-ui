import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import type { TagProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

const clickHandler = () => console.log('click active tag');

export const TagStateTemplate = (args: TagProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Tags>
        <Tag {...args} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...args}>Passive</Tag>
      </Tags>
    </ThemeProvider>
  );
};
