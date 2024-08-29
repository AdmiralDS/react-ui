import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  SegmentedControlItemv2,
  SegmentedControlv2,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import type { SegmentedControlv2Props, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const ButtonGroupPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlv2Props & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <SegmentedControlv2 {...props}>
      <SegmentedControlItemv2 name="first" value="0">
        Button 56
      </SegmentedControlItemv2>
      <SegmentedControlItemv2 name="first" value="1">
        Button 56
      </SegmentedControlItemv2>
      <SegmentedControlItemv2 name="first" value="2">
        Button 56
      </SegmentedControlItemv2>
    </SegmentedControlv2>
    <Separator height={40} />
    <SegmentedControlv2 dimension="s" {...props}>
      <SegmentedControlItemv2 name="second">Button 56</SegmentedControlItemv2>
      <SegmentedControlItemv2 name="second">Button 56</SegmentedControlItemv2>
      <SegmentedControlItemv2 name="second">Button 56</SegmentedControlItemv2>
    </SegmentedControlv2>
    <Separator height={40} />
    <SegmentedControlv2 {...props}>
      <SegmentedControlItemv2 type="checkbox">Button 56</SegmentedControlItemv2>
      <SegmentedControlItemv2 type="checkbox">Button 56</SegmentedControlItemv2>
      <SegmentedControlItemv2 type="checkbox">Button 56</SegmentedControlItemv2>
    </SegmentedControlv2>
  </ThemeProvider>
);
