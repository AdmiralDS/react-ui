import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import type { TagProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая
        принадлежность элемента к некоторой группе элементов имеющих общий признак.
      </T>
      <Tags>
        <Tag {...props} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...props}>Passive</Tag>
      </Tags>
    </ThemeProvider>
  );
};
