import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextInput } from '#src/components/input';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

// const STORY_ITEMS: Array<StoryItem> = [
//   {
//     id: '1',
//     label: 'Option one',
//     value: 1,
//   },
//   {
//     id: '2',
//     label: 'Option two',
//     value: 2,
//     disabled: true,
//   },
//   {
//     id: '3',
//     label: 'Option three',
//     value: 3,
//   },
//   {
//     id: '4',
//     label: 'Option four',
//     value: 4,
//   },
//   {
//     id: '5',
//     label: 'Option five',
//     value: 5,
//   },
//   {
//     id: '6',
//     label: 'Option six',
//     value: 7,
//   },
//   {
//     id: '7',
//     label: 'Option seven',
//     value: 6,
//   },
// ];

const STORY_ITEMS = Array.from({ length: 994025 }, (_, k) => ({ id: `${k + 1}`, label: `Option ${k}`, value: k + 1 }));

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`;

export const MenuSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  // const [active, setActive] = React.useState('');
  // const [input, setInput] = React.useState('');
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      disabled: item.disabled,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Базовый пример построения Menu.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu
            {...props}
            defaultIsActive={false}
            model={model}
            // active={active}
            // onActivateItem={(item) => {
            //   setActive(item);
            //   setInput(item);
            // }}
            virtualScroll={{ itemHeight: 'auto' }}
            // renderTopPanel={({ dimension = 's' }) => {
            //   return (
            //     <MenuActionsPanel dimension={dimension}>
            //       <TextInput
            //         dimension="s"
            //         value={input}
            //         onChange={(e) => {
            //           setInput(e.target.value);
            //           setActive(e.target.value);
            //         }}
            //       />
            //     </MenuActionsPanel>
            //   );
            // }}
          />
        </Wrapper>
        {/* <Wrapper style={{ width: 'fit-content' }}>
          <Menu {...props} defaultIsActive={false} model={model} />
        </Wrapper> */}
      </Container>
    </ThemeProvider>
  );
};
