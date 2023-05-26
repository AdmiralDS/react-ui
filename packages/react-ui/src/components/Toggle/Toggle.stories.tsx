import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Toggle } from '@admiral-ds/react-ui';
import type { ToggleProps } from '@admiral-ds/react-ui';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.
    <Separator />
    Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных
    устройствах.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Toggle',
  decorators: [withDesign],
  component: Toggle,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21193',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21376',
      },
    ],
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: 'onChange',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template1: ComponentStory<typeof Toggle> = () => {
  return (
    <>
      <Toggle>Dimension - m</Toggle>
      <Separator />
      <Toggle dimension="s">Dimension - s</Toggle>
    </>
  );
};

const Template2: ComponentStory<typeof Toggle> = () => {
  return (
    <>
      <Toggle checked onChange={() => undefined}>
        Active
      </Toggle>
      <Separator />
      <Toggle checked={false} onChange={() => undefined}>
        Not active
      </Toggle>
      <Separator />
      <Toggle checked readOnly>
        Active readonly
      </Toggle>
      <Separator />
      <Toggle checked={false} readOnly>
        Not active readonly
      </Toggle>
      <Separator />
      <Toggle checked disabled>
        Active disabled
      </Toggle>
      <Separator />
      <Toggle checked={false} disabled>
        Not active disabled
      </Toggle>
    </>
  );
};

const Template3: ComponentStory<typeof Toggle> = () => {
  return (
    <>
      <Toggle />
      <Separator />
      <Toggle>Some label</Toggle>
      <Separator />
      <Toggle labelPosition="left">Some label</Toggle>
    </>
  );
};

const Template4: ComponentStory<typeof Toggle> = () => {
  return (
    <>
      <Toggle extraText="Add text">Dimension - m</Toggle>
      <Separator />
      <Toggle extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text">
        Dimension - m
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
    </>
  );
};

const Template5: ComponentStory<typeof Toggle> = () => {
  return (
    <>
      <div style={{ width: '400px' }}>
        <Toggle labelPosition="left">Some label</Toggle>
        <Separator />
        <Toggle labelPosition="left" width="200px">
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width={300}>
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width="100%">
          Some label
        </Toggle>
      </div>
    </>
  );
};

const Template6: ComponentStory<typeof Toggle> = ({
  dimension,
  disabled,
  readOnly,
  width,
  extraText,
  labelPosition,
  checked: argChecked,
  ...props
}: ToggleProps) => {
  const [checked, setChecked] = useState(argChecked || false);
  const clearProps = cleanUpProps(props);

  React.useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);
  return (
    <>
      <Toggle
        {...clearProps}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Controlled component
      </Toggle>
      <Separator />
      <Toggle
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Uncontrolled component
      </Toggle>
    </>
  );
};

export const Playground = Template6.bind({});
Playground.args = {};

export const ToggleSize = Template1.bind({});
ToggleSize.args = {};
ToggleSize.storyName = 'Toggle. Размеры';

export const ToggleState = Template2.bind({});
ToggleState.args = {};
ToggleState.storyName = 'Toggle. Состояния';

export const ToggleLabel = Template3.bind({});
ToggleLabel.args = {};
ToggleLabel.storyName = 'Toggle. Расположение подписи';
ToggleLabel.parameters = {
  docs: {
    description: {
      story: `Варианты компонента без подписи, с подписью слева и справа.`,
    },
  },
};

export const ToggleHint = Template4.bind({});
ToggleHint.args = {};
ToggleHint.storyName = 'Toggle. Дополнительный текст';
ToggleHint.parameters = {
  docs: {
    description: {
      story: `Варианты компонента с дополнительным текстом.`,
    },
  },
};

export const ToggleMobile = Template5.bind({});
ToggleMobile.args = {};
ToggleMobile.storyName = 'Toggle. Адаптив';
ToggleMobile.parameters = {
  docs: {
    description: {
      story: `При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно
      вытянуть на всю ширину экрана.`,
    },
  },
};
