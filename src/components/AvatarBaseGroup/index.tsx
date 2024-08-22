import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { FC, Ref, MouseEvent, KeyboardEvent, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { uid } from '#src/components/common/uid';
import { keyboardKey } from '../common/keyboardKey';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { DropMenuStyleProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import type { AvatarBaseProps, Dimension } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarBaseGroupProps extends HTMLAttributes<HTMLDivElement>, Omit<DropMenuStyleProps, 'alignSelf'> {
  items: Array<AvatarBaseProps>;
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов */
  appearance?: AvatarBaseProps['appearance'];
  /** Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара */
  onAvatarSelect?: (id: string) => void;
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

export const AvatarBaseGroup: FC<AvatarBaseGroupProps> = ({
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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(items.length);
  const [hiddenItems, setHiddenItems] = useState(0);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const WIDTH = {
    xs: 24,
    s: 32,
    m: 40,
    l: 48,
    xl: 56,
  };

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const wrapperWidth = entry.contentRect.width || 0;
          const visibleItems = ~~(wrapperWidth / WIDTH[dimension]);
          setVisibleItems(visibleItems >= items.length ? items.length : Math.max(visibleItems - 1, 0));
          setHiddenItems(visibleItems >= items.length ? 0 : items.length - visibleItems + 1);
        });
      });
      resizeObserver.observe(wrapperRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [dimension]);

  const visible = items.slice(0, visibleItems);
  const hidden = items.slice(visibleItems, visibleItems + hiddenItems);
  // Ставим стандартный размер М для меню и опций списка и XS для аватара
  const modelHidden = useMemo(() => {
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
  const containsActiveAvatar: boolean = useMemo(
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
          const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            item.onClick && item.onClick(e);
            handleSelectAvatar(e.currentTarget.id);
          };
          const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
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
                ref={buttonRef as Ref<HTMLButtonElement>}
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

AvatarBaseGroup.displayName = 'AvatarBaseGroup';
