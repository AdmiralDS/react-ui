import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import type { TagProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Tags>
        <Tag {...props} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...props}>Passive</Tag>
      </Tags>
    </ThemeProvider>
  );
};
