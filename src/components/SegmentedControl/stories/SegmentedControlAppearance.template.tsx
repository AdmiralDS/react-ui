import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const SegmentedControlAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Outlined</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="first" value="2 Outlined">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="2 Outlined">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="3 Outlined">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Filled</T>
    <Separator />
    <SegmentedControl
      appearance="filled"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="second" value="1 Filled">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="second" value="2 Filled">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="second" value="3 Filled">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
