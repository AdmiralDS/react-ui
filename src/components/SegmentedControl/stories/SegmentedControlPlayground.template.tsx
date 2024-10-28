import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const SegmentedControlPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Режим radio button</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="first" value="1">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="2">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="3">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Режим checkbox</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem type="checkbox" name="second" value="4">
        Button 4
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="5">
        Button 5
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="6">
        Button 6
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
