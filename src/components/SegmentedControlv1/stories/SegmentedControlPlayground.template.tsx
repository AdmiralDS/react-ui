import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  SegmentedControlItemv1,
  SegmentedControlv1,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import type { SegmentedControlv1Props, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const ButtonGroupPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlv1Props & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <SegmentedControlv1 {...props}>
      <SegmentedControlItemv1 dimension="l">Button 56</SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="m">Button 56</SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="s">Button 56</SegmentedControlItemv1>
    </SegmentedControlv1>
    <Separator height={40} />
    <SegmentedControlv1 {...props}>
      <SegmentedControlItemv1 dimension="l">Button 56</SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="m" selected>
        Button 56
      </SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="s">Button 56</SegmentedControlItemv1>
    </SegmentedControlv1>
    <Separator height={40} />
    <SegmentedControlv1 {...props}>
      <SegmentedControlItemv1 dimension="l">Button 56</SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="m" selected>
        Button 56
      </SegmentedControlItemv1>
      <SegmentedControlItemv1 dimension="s" selected>
        Button 56
      </SegmentedControlItemv1>
    </SegmentedControlv1>
  </ThemeProvider>
);
