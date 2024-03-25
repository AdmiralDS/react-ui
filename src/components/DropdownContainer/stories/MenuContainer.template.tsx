import * as React from 'react';
import styled, { css } from 'styled-components';

import { Button, DropdownContainer, Menu, MenuItem, typography } from '@admiral-ds/react-ui';
import type { DropdownContainerProps, RenderOptionProps } from '@admiral-ds/react-ui';

import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

const containerContrastBorder = css`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const cards = [
  {
    id: '1',
    label: 'Номер Карты /****45',
    value: 1,
  },
  {
    id: '2',
    label: 'Номер Карты /****75',
    value: 2,
  },
  { id: '3', label: 'Номер Карты /****22', value: 3 },
  {
    id: '4',
    label: 'Номер Карты /****33',
    value: 4,
  },
  {
    id: '5',
    label: 'Номер Карты /****21',
    value: 5,
  },
  {
    id: '6',
    label: 'Номер Карты /****35',
    value: 6,
  },
  { id: '7', label: 'Номер Карты /****39', value: 7 },
  {
    id: '8',
    label: 'Номер Карты /****41',
    value: 8,
  },
];

export const MenuContainerTemplate = (props: DropdownContainerProps) => {
  const model = React.useMemo(() => {
    return cards.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem key={item.id} {...options}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {item.label} <CardSolid width={24} height={24} />
            </div>
            <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
          </MenuItem>
        ),
      };
    }, []);
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [active, setActive] = React.useState<string | undefined>(undefined);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { targetElement, ...other } = props;

  const handleSelectItem = (value?: string) => {
    setSelected(value);
    setOpen(false);
  };

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Карты
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-start"
            targetElement={targetElement || buttonRef.current}
            onClickOutside={clickOutside}
            {...other}
            dropContainerCssMixin={containerContrastBorder}
            className="dropContainerClass"
          >
            <Menu
              model={model}
              selected={selected}
              active={active}
              onActivateItem={setActive}
              onSelectItem={handleSelectItem}
            />
          </DropdownContainer>
        )}
      </Wrapper>
    </>
  );
};
