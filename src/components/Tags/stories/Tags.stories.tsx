import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Tags, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TagsKindTemplate } from './TagsKind.template';

// Imports of text sources
import KindRaw from './TagsKind.template?raw';

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
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы, имеющие эту метку. Тэги можно использовать группами. Горизонтальные и вертикальные отступы
    между соседними тэгами равны 8px.
    <Separator />
    Для каждого тэга можно отдельно задать width, kind и onClick, либо можно задать единые width, kind и onClick через
    Tags. Dimension задается единый для всех тэгов в группе.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tag/Tags',
  decorators: undefined,
  component: Tags,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
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
    kind: {
      options: ['neutral', 'primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Tags>;

//<editor-fold desc="Tags">
const KindStory: StoryFn<typeof Tags> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TagsKindTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const KindExample = {
  render: KindStory,

  parameters: {
    docs: {
      source: {
        code: KindRaw,
      },
    },
  },

  name: 'Tags',
};
