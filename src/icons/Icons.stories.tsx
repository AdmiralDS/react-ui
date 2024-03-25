import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Link, typography } from '@admiral-ds/react-ui';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';

const Title = styled.div`
  ${typography['Header/H6']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-bottom: 20px;
`;

export default {
  title: 'Icons/Icons',
  decorators: undefined,
  component: CopyOutline,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585',
    },
  },
} as Meta;

const Template: StoryFn = () => (
  <Title style={{ fontWeight: 400 }}>
    Сторибук по иконкам переехал сюда:{' '}
    <Link href="https://admiralds.github.io/icons/">https://admiralds.github.io/icons/</Link>
  </Title>
);

export const Icons = {
  render: Template,
  args: {},
  name: 'Список иконок',
};
