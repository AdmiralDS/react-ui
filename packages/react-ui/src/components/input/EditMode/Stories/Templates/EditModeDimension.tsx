import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditMode, T } from '@admiral-ds/react-ui';
import type { EditModeProps, Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Separator = styled.div`
  height: 20px;
`;

export const EditModeDimensionTemplate = ({ value = 'Привет!', ...props }: EditModeProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <EditMode {...props} value={localValue} onChange={handleChange} dimension="s" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s bold
      </T>
      <EditMode {...props} value={localValue} onChange={handleChange} dimension="s" bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <EditMode {...props} value={localValue} onChange={handleChange} />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m bold
      </T>
      <EditMode {...[props]} value={localValue} onChange={handleChange} bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xl
      </T>
      <EditMode {...props} value={localValue} onChange={handleChange} dimension="xl" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xxl
      </T>
      <EditMode {...props} value={localValue} onChange={handleChange} dimension="xxl" />
    </ThemeProvider>
  );
};
