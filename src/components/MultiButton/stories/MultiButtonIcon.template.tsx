import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as BonusSolid } from '@admiral-ds/icons/build/category/BonusSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`selected: ${id}`);
};

const handleMainButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('Main button clicked');
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonIconTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MultiButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);
  const [selected3, setSelected3] = React.useState<string | undefined>(undefined);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...props}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="tertiary"
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="third-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
      <Separator />
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...props}
          disabled
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown-disabled"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          disabled
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown-disabled"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          disabled
          appearance="tertiary"
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="third-multi-button-with-dropdown-disabled"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};
