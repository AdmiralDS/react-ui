import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { SliderInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  SliderInputControlledTemplate,
  SliderInputTickMarksTemplate,
  SliderInputCustomisedTemplate,
  SliderInputCustomMarkTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ControlledRaw from '!!raw-loader!./Templates/SliderInputControlled';
import TickMarksRaw from '!!raw-loader!./Templates/SliderInputTickMarks';
import CustomRaw from '!!raw-loader!./Templates/SliderInputCustomised';
import CustomMarkRaw from '!!raw-loader!./Templates/SliderInputCustomMark';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Поле ввода со слайдером позволяет выбирать значение из обозначенного диапазона мышкой. Так же возможен ввод вручную.
    <Separator />
    Диапазон может быть сплошным либо фиксированным. В диапозон может быть добавлено значение: рубли, доллары и тп. В
    таком случае значение подставляется только в поле ввода.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/SliderInput',
  decorators: [withDesign],
  component: SliderInput,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214',
      },
    ],
  },
  argTypes: {
    thousand: {
      type: 'string',
    },
    prefix: {
      type: 'string',
    },
    suffix: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    precision: {
      type: 'number',
    },
    step: {
      type: 'number',
    },
    minValue: {
      type: 'number',
    },
    maxValue: {
      type: 'number',
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
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
    tickMarks: {
      control: false,
    },
    wrapperProps: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SliderInput>;

//<editor-fold desc="SliderInput. Пример контролируемого инпута.">
const ControlledStory: ComponentStory<typeof SliderInput> = (props) => (
  <SliderInputControlledTemplate {...cleanUpProps(props)} />
);
export const ControlledExample = ControlledStory.bind({});
ControlledExample.parameters = {
  docs: {
    source: {
      code: ControlledRaw,
    },
  },
};
ControlledExample.storyName = 'SliderInput. Пример контролируемого инпута.';
//</editor-fold>

//<editor-fold desc="SliderInput. С промежуточными отметками.">
const TickMarksStory: ComponentStory<typeof SliderInput> = (props) => (
  <SliderInputTickMarksTemplate {...cleanUpProps(props)} />
);
export const TickmarksExample = TickMarksStory.bind({});
TickmarksExample.parameters = {
  docs: {
    source: {
      code: TickMarksRaw,
    },
  },
};
TickmarksExample.storyName = 'SliderInput. С промежуточными отметками.';
//</editor-fold>

//<editor-fold desc="SliderInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: ComponentStory<typeof SliderInput> = (props) => (
  <SliderInputCustomisedTemplate {...cleanUpProps(props)} />
);
export const CustomExample = CustomStory.bind({});
CustomExample.parameters = {
  docs: {
    source: {
      code: CustomRaw,
    },
  },
};
CustomExample.storyName = 'SliderInput. Пример изменения настроек (suffix, precision, thousand).';
//</editor-fold>

//<editor-fold desc="SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.">
const CustomMarkStory: ComponentStory<typeof SliderInput> = (props) => (
  <SliderInputCustomMarkTemplate {...cleanUpProps(props)} />
);
export const CustomMarkExample = CustomMarkStory.bind({});
CustomMarkExample.parameters = {
  docs: {
    source: {
      code: CustomMarkRaw,
    },
  },
};
CustomMarkExample.storyName = 'SliderInput. Пример кастомизирования текстовых подписей к отметкам слайдера.';
//</editor-fold>
