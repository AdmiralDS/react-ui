import * as React from 'react';
import type { CSSProperties } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';

import { uid } from '#src/components/common/uid';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { DropMenu } from '#src/components/DropMenu';
import { keyboardKey } from '../common/keyboardKey';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import type { AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarBaseGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<AvatarBaseProps>;
  /** Размер компонента */
  dimension?: AvatarBaseProps['dimension'];
  /** Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов */
  appearance?: AvatarBaseProps['appearance'];
  /** Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара */
  onAvatarSelect?: (id: string) => void;
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
  /** Аватары с опцией activity ring */
  withActivityRing?: boolean;
}

const AvatarsBaseWrapper = styled.div<{ $withActivityRing: boolean }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  white-space: nowrap;
  & > * {
    margin-left: -${(p) => (p.$withActivityRing ? 10 : 2)}px;
  }
  & > *:first-child {
    margin-left: 0;
  }
`;

const AvatarBaseMenuItem = styled(MenuItem)`
  flex-flow: nowrap;
  justify-content: flex-start;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const MenuAvatarBase = styled(AvatarBase)`
  cursor: pointer;
`;

export const AvatarBaseGroup: React.FC<AvatarBaseGroupProps> = ({
  items,
  dimension = 'xl',
  appearance = 'neutral2',
  onAvatarSelect,
  menuWidth,
  menuMaxHeight,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  withActivityRing = false,
  ...props
}) => {
  const dropMenuProps = passDropdownDataAttributes(props);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = React.useState(items.length);
  const [hiddenItems, setHiddenItems] = React.useState(0);
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const WIDTH = {
    xs: 24,
    s: 32,
    m: 40,
    l: 48,
    xl: 56,
  };

  React.useLayoutEffect(() => {
    if (wrapperRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const wrapperWidth = entry.contentRect.width || 0;
          let validContent = 2,
            visibleItems = 0,
            hiddenItems = 0;

          while (validContent + WIDTH[dimension] < wrapperWidth) {
            validContent = validContent + WIDTH[dimension];
            visibleItems++;
          }
          visibleItems = visibleItems > items.length ? items.length : visibleItems;
          // оставляем место на меню, вычитая 1
          visibleItems = visibleItems === items.length ? visibleItems : visibleItems - 1;
          hiddenItems = items.length - visibleItems;

          setVisibleItems(visibleItems);
          setHiddenItems(hiddenItems);
        });
      });
      resizeObserver.observe(wrapperRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const visible = items.slice(0, visibleItems);
  const hidden = items.slice(visibleItems, visibleItems + hiddenItems);
  // Ставим стандартный размер М для меню и опций списка и XS для аватара
  const modelHidden = React.useMemo(() => {
    return hidden.map(({ id: idProp, ...item }) => {
      const id = idProp || uid();

      return {
        id: id,
        render: (options: RenderOptionProps) => (
          <AvatarBaseMenuItem role="option" key={id} id={id} dimension="m" {...options}>
            <AvatarBase
              {...item}
              userName={item.userName}
              dimension="xs"
              appearance={item.appearance || appearance}
              showTooltip={false}
              status={undefined}
              withActivityRing={withActivityRing}
              showActivityRing={item.showActivityRing}
            />
            {item.userName}
          </AvatarBaseMenuItem>
        ),
      };
    });
  }, [hidden]);

  const handleSelectAvatar = (id: string) => {
    onAvatarSelect?.(id);
    setSelected(id);
  };
  const containsActiveAvatar: boolean = React.useMemo(
    () => modelHidden.findIndex((item) => item.id === selected) != -1,
    [modelHidden, selected],
  );

  return (
    <AvatarsBaseWrapper ref={wrapperRef} {...props} $withActivityRing={withActivityRing}>
      {items.length === 1 && <AvatarBase {...items[0]} dimension={dimension} withActivityRing={withActivityRing} />}
      {items.length > 1 &&
        visible.map((item, index) => {
          const id = item.id || uid();
          const last = index === items.length - 1;
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            item.onClick && item.onClick(e);
            handleSelectAvatar(e.currentTarget.id);
          };
          const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
            const code = keyboardKey.getCode(e);
            if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
              item.onKeyDown && item.onKeyDown(e);
              handleSelectAvatar(e.currentTarget.id);
            }
          };
          return (
            <AvatarBase
              {...item}
              userName={item.userName}
              key={id}
              id={id}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              dimension={dimension}
              appearance={item.appearance || appearance}
              group={!last}
              status={undefined}
              withActivityRing={withActivityRing}
            />
          );
        })}
      {hiddenItems > 0 ? (
        <DropMenu
          dimension="m"
          menuWidth={menuWidth}
          menuMaxHeight={menuMaxHeight}
          items={modelHidden}
          selected={containsActiveAvatar ? selected : undefined}
          onSelectItem={handleSelectAvatar}
          disabled={false}
          alignSelf="flex-start"
          dropContainerCssMixin={dropContainerCssMixin}
          dropContainerClassName={dropContainerClassName}
          dropContainerStyle={dropContainerStyle}
          {...dropMenuProps}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick }) => {
            return (
              <MenuAvatarBase
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                userName={'+' + modelHidden.length}
                isMenuAvatar
                appearance={appearance}
                dimension={dimension}
                showTooltip={false}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                className="avatar-menu-with-dropdown"
                withActivityRing={withActivityRing}
              />
            );
          }}
        />
      ) : null}
    </AvatarsBaseWrapper>
  );
};

AvatarBaseGroup.displayName = 'AvatarGroup';
