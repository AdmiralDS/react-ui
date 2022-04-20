import React, { ChangeEvent, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components-ver2/input/types';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

import { EditMode } from './index';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Компонент для редактирования текста. Может быть с лэйблом или без него.</Desc>;

export default {
  title: 'Admiral-2.1/Input/EditMode',
  component: EditMode,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    onChange: {
      action: 'onChange',
    },
  },
} as ComponentMeta<typeof EditMode>;

const Template1: ComponentStory<typeof EditMode> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof EditMode> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="s" />
      <Separator />
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="s" bold />
      <Separator />
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} />
      <Separator />
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} bold />
      <Separator />
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="xl" />
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof EditMode> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} disabled />
    </ThemeProvider>
  );
};

const cssMixin = css`
  width: 300px;
`;

const Template4: ComponentStory<typeof EditMode> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} containerCssMixin={cssMixin} />
    </ThemeProvider>
  );
};

export const Playground = Template1.bind({});
Playground.args = {
  value: 'Привет!',
  placeholder: 'Placeholder',
};

export const Dimension = Template2.bind({});
Dimension.args = {
  value: 'Привет!',
};
Dimension.storyName = 'Варианты размеров и начертания компонента';
Dimension.parameters = {
  docs: {
    description: {
      story: `Компонент разработан в трех размерах S, M (имеют написание Regular и Bold) и XL (только Bold). 
      Переключение между Regular и Bold не изменяют размеры компонента.\n\nПо умолчанию размер компонента M, 
      для смены размера используйте параметр dimension. Для переключения в написание Bold испольуйте одноименный парамтер bold.`,
    },
  },
};

export const Disabled = Template3.bind({});
Disabled.args = {
  value: 'Привет!',
};
Disabled.storyName = 'Компонент в состоянии disabled';

export const CssMixin = Template4.bind({});
CssMixin.args = {
  value: 'Привет!',
};
CssMixin.storyName = 'Стилизация компонента';
CssMixin.parameters = {
  docs: {
    description: {
      story: `Для изменения стилей компонента в контейнер компонента можно передать стили в виде containerCssMixin.`,
    },
  },
};
