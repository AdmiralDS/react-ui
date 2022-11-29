import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { useMemo, useRef, useState } from 'react';
import { Checkbox } from '#src/components/Checkbox';
import { IconButton } from '#src/components/IconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { refSetter } from '#src/components/common/utils/refSetter';

export type MenuDimension = 's' | 'm' | 'l';

export interface RenderOptionProps {
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
}

export interface ItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
}

type ItemValue = { name: string; visible: boolean };

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement>, RenderOptionProps {
  columns: Array<ItemValue>;
  onColumnsChange?: (columns: Array<ItemValue>) => void;
  buttonDimension?: 's' | 'l';
  menuDimension?: MenuDimension;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const ColumnsMenu = styled(Menu)`
  width: 320px;
`;

const ColumnsMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 10px;
`;

export const ColumnsButton = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  ({ columns, menuDimension = 'l', buttonDimension = 'l', onColumnsChange, dropContainerCssMixin, ...props }, ref) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleBtnClick = () => {
      setOpened((prevOpened) => !prevOpened);
    };

    const handleChangeColumn = ({ name, visible }: ItemValue) => {
      if (onColumnsChange) {
        const newValue = [...columns];
        const item = newValue.find((column) => column.name === name);
        if (item) item.visible = visible;
        onColumnsChange(newValue);
      }
    };

    const renderColumns = useMemo<Array<ItemProps>>(() => {
      return columns.map(
        (column, index): ItemProps => ({
          id: index.toString(),
          render: (options: RenderOptionProps) => (
            <ColumnsMenuItem
              {...options}
              dimension={menuDimension}
              onClickItem={() => {
                handleChangeColumn({ name: column.name, visible: !column.visible });
              }}
              key={index}
            >
              <StyledCheckbox
                checked={column.visible}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  handleChangeColumn({ name: column.name, visible: e.currentTarget.checked });
                }}
              />
              {column.name}
            </ColumnsMenuItem>
          ),
        }),
      );
    }, [columns, menuDimension]);

    const handleClickOutside = (e: Event) => {
      if (e.target && buttonRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpened(false);
    };

    return (
      <>
        <IconButton ref={refSetter(ref, buttonRef)} dimension={buttonDimension} onClick={handleBtnClick} {...props}>
          <PlusOutline />
        </IconButton>
        {opened && (
          <StyledDropdownContainer
            targetRef={buttonRef}
            alignSelf={'flex-end'}
            onClickOutside={handleClickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            <ColumnsMenu model={renderColumns} selected={''} />
          </StyledDropdownContainer>
        )}
      </>
    );
  },
);
