import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T, SegmentedControlBadge } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div`
  height: 40px;
`;
const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const SegmentedControlVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">С включенной иконкой слева</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconStart_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconStart selected')}
          {...props}
        >
          <SegmentedControlItem name={`first${index}`} value="1" iconStart={<StarSolid />}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={`first${index}`} value="2" iconStart={<StarSolid />}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={`first${index}`} value="3" iconStart={<StarSolid />}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С включенной иконкой справа</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconEnd_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconEnd selected')}
          {...props}
        >
          <SegmentedControlItem name={`second${index}`} value="1" iconEnd={<StarSolid />}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={`second${index}`} value="2" iconEnd={<StarSolid />}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={`second${index}`} value="3" iconEnd={<StarSolid />}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С бейджами</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'badge_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with badge selected')}
          {...props}
        >
          <SegmentedControlItem name={`third${index}`} value="1">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
          <SegmentedControlItem name={`third${index}`} value="2">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
          <SegmentedControlItem name={`third${index}`} value="3">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Icon Only</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconOnly_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with icon only selected')}
          {...props}
        >
          <SegmentedControlItem name={`forth${index}`} value="1" iconStart={<StarSolid />} displayAsSquare />
          <SegmentedControlItem name={`forth${index}`} value="2" iconStart={<StarSolid />} displayAsSquare />
          <SegmentedControlItem name={`forth${index}`} value="3" iconStart={<StarSolid />} displayAsSquare />
        </SegmentedControl>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
