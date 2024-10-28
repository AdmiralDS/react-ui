import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const SegmentedControlRadioTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = useState('');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long">Неуправляемая группа радио кнопок</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="first" value={values[0]}>
          Button 1
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[1]}>
          Button 2
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[2]}>
          Button 3
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Неуправляемая группа радио кнопок, где 1я кнопка выбрана по умолчанию</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="second" value={values[3]} defaultChecked>
          Button 4
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[4]}>
          Button 5
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[5]}>
          Button 6
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Управляемая группа радио кнопок</T>
      <Separator />
      <SegmentedControl onChange={(e) => setSelected((e.target as HTMLInputElement).value)} {...props}>
        <SegmentedControlItem
          name="third"
          value={values[6]}
          checked={values[6] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 7
        </SegmentedControlItem>
        <SegmentedControlItem
          name="third"
          value={values[7]}
          checked={values[7] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 8
        </SegmentedControlItem>
        <SegmentedControlItem
          name="third"
          value={values[8]}
          checked={values[8] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 9
        </SegmentedControlItem>
      </SegmentedControl>
    </ThemeProvider>
  );
};
