import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { SegmentedControlv2, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ButtonGroupPlaygroundTemplate } from './SegmentedControlPlayground.template';

// Imports of text sources
import ButtonGroupPlaygroundRaw from './SegmentedControlPlayground.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;
const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Компонент ButtonGroup состоит из компонентов Button, связаных друг с другом, используется для организации схожих
    функций. <Separator /> Компонент представлен в вариантах Primary, Secondary и Tertiary и размерах: XL - высота 56
    px, L - высота 48 px, M - высота 40 px и S - высота 32 px.
  </Desc>
);

export default {
  title: 'Admiral-2.1/SegmentedControlv2',
  component: SegmentedControlv2,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['outlined', 'filled'],
      control: { type: 'select' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof SegmentedControlv2>;

//<editor-fold desc="ButtonGroup. Playground">
const ButtonGroupPlaygroundStory: StoryFn<typeof SegmentedControlv2> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupPlayground = {
  render: ButtonGroupPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupPlaygroundRaw,
      },
    },
  },

  name: 'SegmentedControlv2. Playground',
};

//</editor-fold>
