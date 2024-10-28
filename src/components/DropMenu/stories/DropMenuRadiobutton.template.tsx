import * as React from 'react';
import styled from 'styled-components';
import { Button, DropMenu, MenuItem, RadioButton } from '@admiral-ds/react-ui';
import type { DropMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';

const STORY_ITEMS = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    disabled: true,
  },
  {
    id: '5',
    label: 'Option five with very very long text',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  font-size: 16px;
  line-height: 24px;
`;

const handleVisibilityChangeUnControlledState = (isVisible: boolean) => {
  // eslint-disable-next-line no-console
  console.log('onVisibilityChange with uncontrolled state');
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

export const DropMenuRadiobuttonTemplate = (props: DropMenuProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [checkedState, setCheckedState] = React.useState(STORY_ITEMS.map((item) => ({ id: item.id, checked: false })));

  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item, index) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          <RadioButton
            dimension={props.dimension !== 's' ? 'm' : props.dimension}
            disabled={item.disabled}
            key={item.id}
            checked={checkedState[index].checked}
            onChange={() => false}
          >
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension, checkedState]);

  return (
    <WrapperVertical>
      <Desc>
        Неконтроллируемое состояние видимости меню:
        <br />
        - isVisible не передается в DropMenu; <br />- обработчик onVisibilityChange выполняется из DropMenu;
        <br />- для открытия/закрытия меню при клике на кнопке используется обработчик handleClick из DropMenu.
        <br />
        По умолчанию DropMenu открывает/закрывает выпадающий список при нажатии на переданный компонент, а также
        закрывает выпадающий список при выборе опции.
      </Desc>
      <DropMenu
        {...props}
        items={model}
        onSelectItem={(id) => {
          // eslint-disable-next-line no-console
          console.log(`selected: ${id}`);
          const newCheckedState = checkedState.map((item) => ({
            ...item,
            checked: item.id === id || item.id === selected ? !item.checked : item.checked,
          }));
          setCheckedState(newCheckedState);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChangeUnControlledState}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              loading={props.loading}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              dimension={props.dimension}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
  );
};
