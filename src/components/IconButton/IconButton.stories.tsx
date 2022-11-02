import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton } from './index';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { T } from '#src/components/T';
import { Theme } from '#src/components/themes';

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
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof IconButton>;

const IconButtonDemo: ComponentStory<typeof IconButton> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperIconButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <IconButton {...args} dimension="xl">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <IconButton {...args} dimension="l">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <IconButton {...args} dimension="m">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <IconButton {...args} dimension="s">
            <StarSolid />
          </IconButton>
        </div>
      </WrapperIconButton>
    </ThemeProvider>
  );
};

const IconButtonStateDemo: ComponentStory<typeof IconButton> = () => (
  <>
    <WrapperIconButton>
      <div>
        <T font="Body/Body 1 Long" as="div">
          Loading
        </T>
        <IconButton loading dimension="xl" />
      </div>
      <div>
        <T font="Body/Body 1 Long" as="div">
          Disabled
        </T>
        <IconButton disabled dimension="xl">
          <StarSolid />
        </IconButton>
      </div>
      {/*<div>*/}
      {/*  <T font="Body/Body 1 Long" as="div">*/}
      {/*    Skeleton*/}
      {/*  </T>*/}
      {/*  <IconButton skeleton dimension="xl" />*/}
      {/*</div>*/}
    </WrapperIconButton>
  </>
);

export const IconButtons = IconButtonDemo.bind({});
IconButtons.args = {};
IconButtons.storyName = 'IconButton. Размеры';
export const IconButtonState = IconButtonStateDemo.bind({});
IconButtonState.args = {};
IconButtonState.storyName = 'IconButton. Состояния';
