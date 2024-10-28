import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const SegmentedControlCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = useState(
    new Map([
      [values[6], false],
      [values[7], false],
      [values[8], false],
    ]),
  );
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long">Неуправляемая группа чекбокс кнопок</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="first" value={values[0]} type="checkbox">
          Button 1
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[1]} type="checkbox">
          Button 2
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[2]} type="checkbox">
          Button 3
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Неуправляемая группа чекбокс кнопок, где 1я и 2я кнопки выбраны по умолчанию</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="second" value={values[3]} type="checkbox" defaultChecked>
          Button 4
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[4]} type="checkbox" defaultChecked>
          Button 5
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[5]} type="checkbox">
          Button 6
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Управляемая группа чекбокс кнопок</T>
      <Separator />
      <SegmentedControl
        onChange={(e) => {
          setSelected(
            new Map(selected.set((e.target as HTMLInputElement).value, (e.target as HTMLInputElement).checked)),
          );
        }}
        {...props}
      >
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[6]}
          checked={selected.get(values[6])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 7
        </SegmentedControlItem>
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[7]}
          checked={selected.get(values[7])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 8
        </SegmentedControlItem>
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[8]}
          checked={selected.get(values[8])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 9
        </SegmentedControlItem>
      </SegmentedControl>
    </ThemeProvider>
  );
};
