import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, T, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperIconButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`;

export default {
  title: 'Admiral-2.1/IconButton',
  decorators: [withDesign],
  component: IconButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17787',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18298',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18322',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18345',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof IconButton>;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const IconButtonDemo: ComponentStory<typeof IconButton> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperIconButton>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <IconButton {...args} dimension="xl">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <IconButton {...args} dimension="l">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <IconButton {...args} dimension="m">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <IconButton {...args} dimension="s">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
      </WrapperIconButton>
    </ThemeProvider>
  );
};

const IconButtonStateDemo: ComponentStory<typeof IconButton> = (args) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Loading
        </T>
        <IconButton loading dimension={args.dimension} />
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Disabled
        </T>
        <IconButton disabled dimension={args.dimension}>
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      {/*<div>*/}
      {/*  <T font="Body/Body 1 Long" as="div">*/}
      {/*    Skeleton*/}
      {/*  </T>*/}
      {/*  <IconButton skeleton dimension="xl" />*/}
      {/*</div>*/}
    </WrapperIconButton>
  </>
);

const IconButtonAppearanceDemo: ComponentStory<typeof IconButton> = (args) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Primary
        </T>
        <IconButton {...args} appearance="primary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Secondary
        </T>
        <IconButton {...args} appearance="secondary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
    </WrapperIconButton>
  </>
);

export const IconButtons = IconButtonDemo.bind({});
IconButtons.args = {};
IconButtons.storyName = 'IconButton. Размеры';
export const IconButtonState = IconButtonStateDemo.bind({});
IconButtonState.args = {};
IconButtonState.storyName = 'IconButton. Состояния';
export const IconButtonAppearance = IconButtonAppearanceDemo.bind({});
IconButtonAppearance.args = {};
IconButtonAppearance.storyName = 'IconButton. Appearance';
