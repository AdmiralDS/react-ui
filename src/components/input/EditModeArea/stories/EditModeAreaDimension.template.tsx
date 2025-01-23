import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditModeArea, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, EditModeAreaProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 20}px;
`;

export const EditModeAreaDimensionTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: EditModeAreaProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Компонент разработан в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). Переключение
        между Regular и Bold не изменяет размеры компонента.
        <Separator $height={8} /> По умолчанию размер компонента M, для смены размера используйте параметр dimension.
        Для переключения в написание Bold испольуйте одноименный параметр bold.
      </T>
      <Separator $height={24} />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <EditModeArea {...props} value={localValue} onChange={handleChange} dimension="s" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s bold
      </T>
      <EditModeArea {...props} value={localValue} onChange={handleChange} dimension="s" bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <EditModeArea {...props} value={localValue} onChange={handleChange} />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m bold
      </T>
      <EditModeArea {...[props]} value={localValue} onChange={handleChange} bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xl
      </T>
      <EditModeArea {...props} value={localValue} onChange={handleChange} dimension="xl" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xxl
      </T>
      <EditModeArea {...props} value={localValue} onChange={handleChange} dimension="xxl" />
    </ThemeProvider>
  );
};
