import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 40px;
`;
const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const SegmentedControlStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Disable (вторая внопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'disable_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
          {...props}
        >
          <SegmentedControlItem name={`first${index}`} value={1}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={`first${index}`} value={2} disabled>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={`first${index}`} value={3}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Loading (третья кнопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'loading' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
          {...props}
        >
          <SegmentedControlItem name={`second${index}`} value={1}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={`second${index}`} value={2}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={`second${index}`} value={3} loading>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
