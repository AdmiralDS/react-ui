import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Pill, Pills } from '#src/components/Pill/index';
import { Theme } from '#src/components/themes';
import styled, { css, ThemeProvider } from 'styled-components';
import { Color } from '#src/components/themes/common';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { T } from '#src/components/T';

export default {
  title: 'Admiral-2.1/Pills',
  decorators: [withDesign],
  component: Pill,
  parameters: {
    //componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Pill>;

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Error':
      return 'Error/Error 60 Main';
    case 'Success':
      return 'Success/Success 50 Main';
    case 'Special':
      return 'Purple/Purple 60 Main';
    case 'Warning':
      return 'Warning/Warning 50 Main';
    case 'Attention':
      return 'Attention/Attention 50 Main';
    default:
      return 'Neutral/Neutral 10';
  }
};

const getFontColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Attention':
      return 'Special/Dark Static Neutral 00';
    case 'Error':
    case 'Success':
    case 'Special':
    case 'Warning':
      return 'Special/Static White';
    default:
      return 'Neutral/Neutral 90';
  }
};

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const stylesByStatusCssMixin = css<{ status?: Status }>`
  background-color: ${(p) => p.theme.color[getBackgroundColorByStatus(p.status)]};
  color: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
`;

const StatusPill = styled(Pill).attrs<{ status?: Status }>((p) => ({
  'data-status': p.status,
}))<{ status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
  }
`;

const Template0: ComponentStory<typeof Pill> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <></>
        <Pills>
          <StatusPill status="Success">
            <HeartOutlinePillIcon />
            <span>Playground</span>
          </StatusPill>
          <StatusPill status="Error">Playground</StatusPill>
          <StatusPill status="Warning">Playground</StatusPill>
          <StatusPill status="Special">Playground</StatusPill>
          <StatusPill status="Attention">Playground</StatusPill>
          <StatusPill>Playground</StatusPill>
        </Pills>
      </ThemeProvider>
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Pill. Playground.';
