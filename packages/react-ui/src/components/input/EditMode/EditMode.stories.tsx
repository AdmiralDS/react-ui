import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { EditMode, T, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';

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
    docs: {
      source: {
        code: null,
      },
    },
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
      options: ['xxl', 'xl', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
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
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    onChange: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    containerCssMixin: {
      control: false,
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    multilineView: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof EditMode>;

const Template1: ComponentStory<typeof EditMode> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={swapBorder}>
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
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="s" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s bold
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="s" bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m bold
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} bold />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xl
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="xl" />
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - xxl
      </T>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} dimension="xxl" />
    </>
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
    <>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} disabled />
    </>
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
    <>
      <EditMode {...cleanProps} value={localValue} onChange={handleChange} containerCssMixin={cssMixin} />
    </>
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
