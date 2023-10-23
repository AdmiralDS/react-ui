import * as React from 'react';
import { Tag } from '@admiral-ds/react-ui';
import type { TagProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TagPlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: TagProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
        <Tag {...props}>Playground</Tag>
      </ThemeProvider>
    </>
  );
};
