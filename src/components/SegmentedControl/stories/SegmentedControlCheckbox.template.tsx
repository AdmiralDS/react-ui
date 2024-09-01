import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const SegmentedControlCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Outlined</T>
    <Separator />
    <SegmentedControl
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem type="checkbox" name="first" value="1st outlined">
        Button 56
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="first" value="2nd outlined">
        Button 56
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="first" value="3rd outlined">
        Button 56
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Filled</T>
    <Separator />
    <SegmentedControl
      appearance="filled"
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem type="checkbox" name="second" value="1st filled">
        Button 56
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="2nd filled">
        Button 56
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="3rd filled">
        Button 56
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
