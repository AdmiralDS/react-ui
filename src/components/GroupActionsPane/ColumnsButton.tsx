import { useMemo, useRef, useState, useLayoutEffect, forwardRef } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';

import { CheckboxField } from '#src/components/form';
import { IconButton } from '#src/components/IconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { Menu } from '#src/components/Menu';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Tooltip } from '#src/components/Tooltip';
import { refSetter } from '#src/components/common/utils/refSetter';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import type { PaneColumn } from '#src/components/GroupActionsPane';

export type MenuDimension = 's' | 'm' | 'l';

export interface RenderOptionProps {
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Обработчик наведения мыши на item */
  onHover?: React.MouseEventHandler<HTMLElement>;
}

export interface ItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
}

export interface ColumnsButtonProps extends React.HTMLAttributes<HTMLButtonElement>, RenderOptionProps {
  columns?: Array<PaneColumn>;
  onColumnsChange?: (columns: Array<PaneColumn>) => void;
  buttonDimension?: 's' | 'l';
  menuDimension?: MenuDimension;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: React.CSSProperties;
}

const ColumnsMenu = styled(Menu)`
  width: 320px;
`;

const ColumnsMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
  flex-flow: nowrap;
`;

const StyledCheckboxField = styled(CheckboxField)`
  flex-shrink: 0;
  margin-right: 8px;
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface ColumnMenuItemProps extends MenuItemProps {
  visible: boolean;
}

const ColumnMenuItem = ({ visible, title, ...props }: ColumnMenuItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    if (textRef.current && checkOverflow(textRef.current) !== overflow) {
      setOverflow(checkOverflow(textRef.current));
    }
  }, [tooltipVisible, overflow]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const text = textRef.current;
    if (text) {
      text.addEventListener('mouseenter', show);
      text.addEventListener('mouseleave', hide);
      return () => {
        text.removeEventListener('mouseenter', show);
        text.removeEventListener('mouseleave', hide);
      };
    }
  }, []);

  return (
    <ColumnsMenuItem {...props} ref={itemRef} onHover={() => setHovered(true)} onLeave={() => setHovered(false)}>
      <StyledCheckboxField
        checked={visible}
        onChange={() => {
          /* keep */
        }}
        hovered={hovered}
      />
      <TextWrapper ref={textRef}>{title}</TextWrapper>
      {tooltipVisible && overflow && <Tooltip targetElement={itemRef.current} renderContent={() => title} />}
    </ColumnsMenuItem>
  );
};

export const ColumnsButton = forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  (
    {
      columns = [],
      menuDimension = 'l',
      buttonDimension = 'l',
      disabled,
      onColumnsChange,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleBtnClick = () => {
      setOpened((prevOpened) => !prevOpened);
    };

    const handleChangeColumn = ({ id, visible }: PaneColumn) => {
      if (onColumnsChange && columns.length > 0) {
        const newValue = [...columns];
        const item = newValue.find((column) => (column.name ? column.name === id : column.id === id));
        if (item) item.visible = visible;
        onColumnsChange(newValue);
      }
    };

    const renderColumns = useMemo<Array<ItemProps>>(() => {
      return columns.map(
        (column, index): ItemProps => ({
          id: index.toString(),
          render: (options: RenderOptionProps) => {
            const title = column.name ?? column.title;
            const id = column.name ?? column.id;
            return (
              <ColumnMenuItem
                {...options}
                title={title}
                visible={column.visible}
                dimension={menuDimension}
                onClick={() => {
                  handleChangeColumn({ id, visible: !column.visible });
                }}
                key={index}
              />
            );
          },
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
        <IconButton
          ref={refSetter(ref, buttonRef)}
          dimension={buttonDimension}
          onClick={handleBtnClick}
          disabled={disabled || columns.length === 0}
          {...props}
        >
          <PlusOutline />
        </IconButton>
        {opened && (
          <StyledDropdownContainer
            targetElement={buttonRef.current}
            alignSelf={'flex-end'}
            onClickOutside={handleClickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <ColumnsMenu model={renderColumns} selected={''} />
          </StyledDropdownContainer>
        )}
      </>
    );
  },
);
