import * as React from 'react';
import { Fragment } from 'react';
import type { KeyboardEventHandler } from 'react';
import styled from 'styled-components';

import { Button, DropDownItem, DropDownMenu, typography } from '@admiral-ds/react-ui';
import type { DropDownMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const StyledText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  pointer-events: none;
`;

const category = [
  {
    name: 'Категория 1',
    id: '1',
    content: [
      {
        id: '2',
        label: 'Номер Карты /****45',
        value: 1,
      },
      {
        id: '3',
        label: 'Номер Карты /****75',
        value: 2,
      },
      { id: '4', label: 'Номер Карты /****22', value: 3 },
      {
        id: '5',
        label: 'Номер Карты /****33',
        value: 4,
      },
    ],
  },
  {
    name: 'Категория 2',
    id: '9',
    content: [
      {
        id: '10',
        label: 'Номер Карты /****21',
        value: 5,
      },
      {
        id: '11',
        label: 'Номер Карты /****35',
        value: 6,
      },
      { id: '12', label: 'Номер Карты /****39', value: 7 },
      {
        id: '13',
        label: 'Номер Карты /****41',
        value: 8,
      },
    ],
  },
];

export const CategoryTemplate = (props: DropDownMenuProps) => {
  const [selected, setSelected] = React.useState<string | number>(category[0].content[0].id);
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    }
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button ref={buttonRef} onClick={() => setOpen(!open)}>
        Нажми
      </Button>
      {open && (
        <DropDownMenu alignSelf="flex-end" {...props} targetRef={buttonRef} onClickOutside={() => setOpen(!open)}>
          {category.map((item, index) => {
            return (
              <Fragment key={index}>
                <DropDownItem disabled key={item.id}>
                  <StyledText> {item.name}</StyledText>
                </DropDownItem>
                {item.content.map((subCategory) => {
                  return (
                    <DropDownItem
                      dimension={props.dimension}
                      tabIndex={0}
                      onMouseDown={() => setSelected(subCategory.id)}
                      selected={selected === subCategory.id}
                      key={subCategory.id}
                      id={subCategory.id}
                      onKeyDown={handleKeyDown}
                    >
                      <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          {subCategory.label} <CardSolid width={24} height={24} />
                        </div>
                        <StyledText>Дополнительный текст</StyledText>
                      </div>
                    </DropDownItem>
                  );
                })}
              </Fragment>
            );
          })}
        </DropDownMenu>
      )}
    </div>
  );
};
