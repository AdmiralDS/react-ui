import * as React from 'react';
import styled from 'styled-components';
import { Button, DropMenu, MenuItemWithCheckbox, T } from '@admiral-ds/react-ui';
import type { DropMenuProps, ItemWithCheckbox, RenderOptionProps } from '@admiral-ds/react-ui';

const STORY_ITEMS: Array<ItemWithCheckbox> = [
  {
    id: '1',
    label: 'Option one',
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

const handleVisibilityChangeControlledState = (isVisible: boolean) => {
  // eslint-disable-next-line no-console
  console.log('onVisibilityChange with controlled state');
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

export const DropMenuCheckboxTemplate = (props: DropMenuProps) => {
  const [innerState, setInnerState] = React.useState<Array<ItemWithCheckbox>>(STORY_ITEMS.map((item) => item));
  const [activeOption, setActiveOption] = React.useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const model = React.useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox
          key={item.id}
          id={item.id}
          dimension={props.dimension}
          checked={!!item.checked}
          {...options}
        >
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption, props.dimension]);

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
  };

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(`Option ${id} clicked`);
    const updatedInnerState = [...innerState];
    const itemToUpdate = updatedInnerState.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
    }
    setInnerState(updatedInnerState);
    setSelectedOption(undefined);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    handleVisibilityChange(!isVisible);
    props.onClick?.(e);
  };

  const handleClickOutside = () => {
    // eslint-disable-next-line no-console
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Пример меню с пунктами, содержащими Checkbox.
          <Separator $height={24} />
          Состояние видимости меню полностью контроллируется вне DropMenu:
          <Separator />
          - используется кастомный обработчик клика по кнопке (handleButtonClick) для открытия/закрытия выпадающего
          списка;
          <Separator />- после выбора опции из выпадающего списка (handleSelectItem) происходит закрытие меню;
          <Separator />- используется кастомный обработчик при клике вне области выпадающего списка
          (handleClickOutside).
        </T>
        <DropMenu
          {...props}
          items={model}
          active={activeOption}
          onActivateItem={handleActivateItem}
          selected={selectedOption}
          onSelectItem={handleSelectItem}
          isVisible={isVisible}
          onVisibilityChange={handleVisibilityChange}
          onClickOutside={handleClickOutside}
          disableSelectedOptionHighlight={true}
          renderContentProp={({ buttonRef, handleKeyDown, statusIcon, disabled }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                loading={props.loading}
                disabled={disabled}
                onKeyDown={handleKeyDown}
                onClick={handleButtonClick}
                dimension={props.dimension}
              >
                Нажми
                {statusIcon}
              </Button>
            );
          }}
        />
      </WrapperVertical>
    </>
  );
};
