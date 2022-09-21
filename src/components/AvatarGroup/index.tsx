import * as React from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { uid } from '#src/components/common/uid';
import type { AvatarProps } from '#src/components/Avatar';
import { Avatar } from '#src/components/Avatar';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { DropMenu } from '#src/components/DropMenu';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<AvatarProps>;
  /** Размер компонента */
  dimension?: AvatarProps['dimension'];
  /** Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов */
  appearance?: AvatarProps['appearance'];
  /** Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара */
  onAvatarSelect?: (id: string) => void;
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const AvatarsWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  white-space: nowrap;
  & > * {
    margin-left: -2px;
  }
  & > *:first-child {
    margin-left: 0;
  }
`;

const AvatarMenuItem = styled(MenuItem)`
  flex-flow: nowrap;
  justify-content: flex-start;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const MenuAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  items,
  dimension = 'xl',
  appearance = 'light',
  onAvatarSelect,
  menuWidth,
  menuMaxHeight,
  dropContainerCssMixin,
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

  // React.useLayoutEffect(() => {
  //   if (wrapperRef.current) {
  //     const observer = observeRect(wrapperRef.current, (rect) => {
  //       const wrapperWidth = rect?.width || 0;
  //       let validContent = 2,
  //         visibleItems = 0,
  //         hiddenItems = 0;

  //       while (validContent + WIDTH[dimension] < wrapperWidth) {
  //         validContent = validContent + WIDTH[dimension];
  //         visibleItems++;
  //       }
  //       visibleItems = visibleItems > items.length ? items.length : visibleItems;
  //       // оставляем место на меню, вычитая 1
  //       visibleItems = visibleItems === items.length ? visibleItems : visibleItems - 1;
  //       hiddenItems = items.length - visibleItems;

  //       setVisibleItems(visibleItems);
  //       setHiddenItems(hiddenItems);
  //     });
  //     observer.observe();
  //     return () => {
  //       observer.unobserve();
  //     };
  //   }
  // }, [wrapperRef.current]);

  React.useLayoutEffect(() => {
    if (wrapperRef.current) {
      const ro = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const wrapperWidth = entry.contentRect.width;
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
        }
      });
      ro.observe(wrapperRef.current);
      return () => {
        if (wrapperRef.current) ro.unobserve(wrapperRef.current);
      };
    }
  }, [wrapperRef.current]);

  const visible = items.slice(0, visibleItems);
  const hidden = items.slice(visibleItems, visibleItems + hiddenItems);
  // Ставим стандартный размер М для меню и опций списка и XS для аватара
  const modelHidden = React.useMemo(() => {
    return hidden.map(({ id: idProp, ...item }) => {
      const id = idProp || uid();

      return {
        id: id,
        render: (options: RenderOptionProps) => (
          <AvatarMenuItem role="option" key={id} id={id} dimension="m" {...options}>
            <Avatar
              {...item}
              dimension="xs"
              appearance={item.appearance || appearance}
              showTooltip={false}
              status={undefined}
            />
            {item.userName}
          </AvatarMenuItem>
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
    <AvatarsWrapper ref={wrapperRef} {...props}>
      {items.length === 1 && <Avatar {...items[0]} dimension={dimension} />}
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
            <Avatar
              {...item}
              key={id}
              id={id}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              dimension={dimension}
              appearance={item.appearance || appearance}
              group={!last}
              status={undefined}
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
          onChange={handleSelectAvatar}
          disabled={false}
          alignSelf="flex-start"
          dropContainerCssMixin={dropContainerCssMixin}
          {...dropMenuProps}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick }) => {
            return (
              <MenuAvatar
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                userName={'+' + modelHidden.length}
                isMenuAvatar
                appearance={appearance}
                dimension={dimension}
                showTooltip={false}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                className="avatar-menu-with-dropdown"
              />
            );
          }}
        />
      ) : null}
    </AvatarsWrapper>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
