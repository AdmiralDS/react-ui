import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { IconButton } from './index';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { T } from '#src/components/T';

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
  title: 'Example/IconButton',
  decorators: [withDesign],
  component: IconButton,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A17787',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A18110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A18298',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A18322',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A18345',
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
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof IconButton>;

const IconButtonDemo: ComponentStory<typeof IconButton> = () => {
  return (
    <>
      <WrapperIconButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <IconButton dimension="xl">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <IconButton dimension="l">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <IconButton dimension="m">
            <StarSolid />
          </IconButton>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <IconButton dimension="s">
            <StarSolid />
          </IconButton>
        </div>
      </WrapperIconButton>
    </>
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
      <div>
        <T font="Body/Body 1 Long" as="div">
          Skeleton
        </T>
        <IconButton skeleton dimension="xl" />
      </div>
    </WrapperIconButton>
  </>
);

export const IconButtons = IconButtonDemo.bind({});
IconButtons.args = {};
IconButtons.storyName = 'IconButton. Размеры';
export const IconButtonState = IconButtonStateDemo.bind({});
IconButtonState.args = {};
IconButtonState.storyName = 'IconButton. Состояния';
