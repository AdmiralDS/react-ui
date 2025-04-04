import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const onChangeTab = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const TabMenuBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('3');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabMenu
          {...props}
          activeTab={selected}
          onChange={(id) => {
            onChangeTab(id);
            setSelected(id);
          }}
          tabs={tabs}
          dropContainerClassName="dropContainerClass"
        />
      </Wrapper>
    </ThemeProvider>
  );
};
