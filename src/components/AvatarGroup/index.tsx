import * as React from 'react';
import styled from 'styled-components';
import observeRect from '#/components/common/observeRect';
import { uid } from '#/components/common/uid';
import { DropDownItem } from '#/components/DropDownItem';
import { Avatar } from '#/components/Avatar';
import type { AvatarProps } from '#/components/Avatar';

import { Menu } from './Menu';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<AvatarProps>;
  /** Размер компонента */
  dimension?: AvatarProps['dimension'];
  /** Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов */
  appearance?: AvatarProps['appearance'];
  /** Колбек на выбор аватара (по клику или нажатию клавишы). Возвращает событие, из которого, н-р, можно извлечь id выбранного аватара */
  onAvatarSelect?: (e: any) => void;
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

const MenuItem = styled(DropDownItem)`
  flex-flow: nowrap;
  justify-content: flex-start;
  & > button:first-child {
    margin-right: 8px;
  }
`;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  items,
  dimension = 'xl',
  appearance = 'light',
  onAvatarSelect,
  ...props
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = React.useState(items.length);
  const [hiddenItems, setHiddenItems] = React.useState(0);

  const WIDTH = {
    xs: 24,
    s: 32,
    m: 40,
    l: 48,
    xl: 56,
  };

  React.useLayoutEffect(() => {
    if (wrapperRef.current) {
      const observer = observeRect(wrapperRef.current, (rect) => {
        const wrapperWidth = rect?.width || 0;
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
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [wrapperRef.current]);

  const visible = items.slice(0, visibleItems);
  const hidden = items.slice(visibleItems, visibleItems + hiddenItems);

  return (
    <AvatarsWrapper ref={wrapperRef} {...props}>
      {items.length === 1 && <Avatar {...items[0]} dimension={dimension} />}
      {items.length > 1 &&
        visible.map((item, index) => {
          const id = item.id || uid();
          const last = index === items.length - 1;
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            item.onClick && item.onClick(e);
            onAvatarSelect?.(e);
          };
          const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
            item.onKeyDown && item.onKeyDown(e);
            onAvatarSelect?.(e);
          };
          return (
            <Avatar
              {...item}
              key={id}
              id={id}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              dimension={dimension}
              appearance={appearance}
              group={!last}
              status={undefined}
            />
          );
        })}
      {hiddenItems > 0 ? (
        <Menu alignDropdown="flex-start" appearance={appearance} dimension={dimension} onAvatarSelect={onAvatarSelect}>
          {hidden.map(({ id: idProp, onClick, onKeyDown, ...item }) => {
            const id = idProp || uid();
            return (
              <MenuItem
                role="option"
                key={id}
                id={id}
                value={item.userName}
                dimension="m"
                onClick={onClick as any}
                onKeyDown={onKeyDown as any}
              >
                <Avatar {...item} dimension="xs" appearance={appearance} showTooltip={false} status={undefined} />
                {item.userName}
              </MenuItem>
            );
          })}
        </Menu>
      ) : null}
    </AvatarsWrapper>
  );
};
