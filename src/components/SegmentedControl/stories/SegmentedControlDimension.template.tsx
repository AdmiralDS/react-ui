import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const SegmentedControlDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Dimension XL</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="xl" value="1 XL">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="xl" value="2 XL">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="xl" value="3 XL">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension L</T>
    <Separator />
    <SegmentedControl
      dimension="l"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="l" value="1 L">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="l" value="2 L">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="l" value="3 L">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension M</T>
    <Separator />
    <SegmentedControl
      dimension="m"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="m" value="1 M">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="m" value="2 M">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="m" value="3 M">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension S</T>
    <Separator />
    <SegmentedControl
      dimension="s"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="s" value="1 S">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="s" value="2 S">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="s" value="3 S">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
