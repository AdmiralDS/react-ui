import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const disabledTabs = [
  {
    id: '1',
    content: 'Option 1',
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    disabled: true,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    icon: <MinusCircleOutline />,
    disabled: true,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 77',
    badge: 5,
    disabled: true,
  },
];

export const TabMenuDisabledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('2');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TabMenu
        {...props}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={disabledTabs}
      />
    </ThemeProvider>
  );
};
