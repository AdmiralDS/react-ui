import React, { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './index';

import { withDesign } from 'storybook-addon-designs';
import { ALL_DIMENSIONS_VALUES } from '#src/components/Checkbox/CheckboxDimension';
import styled, { ThemeProvider } from 'styled-components';
import { T } from '#src/components/T';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Atoms/Checkbox',
  decorators: [withDesign],
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A20804',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      options: [false, true],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    hovered: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
  },
} as ComponentMeta<typeof Checkbox>;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 66px;
  }
  > * {
    flex: 0 0 auto;
  }
`;

const CheckboxDemo: ComponentStory<typeof Checkbox> = (props) => {
  const args = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [checked, setChecked] = useState<boolean>(args.checked ?? false);
  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);
  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <Container>
          <T font="Header/H6" as="div">
            Состояния
          </T>
          <Row>
            <Checkbox
              {...args}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <Checkbox dimension="s" />
            <T font="Body/Body 1 Long" as="div">
              Default
            </T>
          </Row>
          <Row>
            <Checkbox indeterminate />
            <Checkbox dimension="s" indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Частично выбранный
            </T>
          </Row>
          <Row>
            <Checkbox disabled />
            <Checkbox dimension="s" disabled />
            <T font="Body/Body 1 Long" as="div">
              Disable
            </T>
          </Row>
          <Row>
            <Checkbox disabled defaultChecked />
            <Checkbox dimension="s" disabled defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Disable active
            </T>
          </Row>
          <Row>
            <Checkbox error />
            <Checkbox dimension="s" error />
            <T font="Body/Body 1 Long" as="div">
              Состояние ошибки
            </T>
          </Row>
          <Row>
            <Checkbox readOnly />
            <Checkbox dimension="s" readOnly />
            <T font="Body/Body 1 Long" as="div">
              Readonly
            </T>
          </Row>
          <Row>
            <Checkbox readOnly defaultChecked />
            <Checkbox dimension="s" readOnly defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Readonly active
            </T>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};

export const Example = CheckboxDemo.bind({});
