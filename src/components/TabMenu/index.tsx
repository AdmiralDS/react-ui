import { createRef, useLayoutEffect, useEffect, useMemo, useRef, useState } from 'react';
import type { FC, HTMLAttributes, ReactNode, RefObject, MouseEvent, KeyboardEvent } from 'react';

import { keyboardKey } from '../common/keyboardKey';
import { Badge } from '#src/components/Badge';
import type { RenderOptionProps, MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';

import {
  BadgeWrapper,
  IconWrapper,
  MenuItemWrapper,
  OverflowMenuContainer,
  StyledOverflowMenu,
  Tab,
  TabContent,
  TabContentWrapper,
  TabWrapper,
  Underline,
  Wrapper,
} from '#src/components/TabMenu/style';
import type { Dimension } from '#src/components/TabMenu/constants';
import { debounce } from '#src/components/common/utils/debounce';
import type { DropContainerStyles } from '#src/components/DropdownContainer';

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'content'> {
  /** Контент вкладки */
  content: ReactNode;
  /** Id вкладки */
  id: string;
  /** Иконка, располагается слева от content */
  icon?: ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;
  /** Отключение вкладки */
  disabled?: boolean;
}

type TabWithRefProps = TabProps & { ref: RefObject<HTMLButtonElement> };
type OverflowMenuRefProps = {
  ref: RefObject<HTMLButtonElement>;
  isVisible: boolean;
};

export interface TabMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, DropContainerStyles {
  /** Список вкладок */
  tabs: Array<TabProps>;
  /** Id активной вкладки */
  activeTab: string;
  /** Колбек на изменение активной вкладки */
  onChange: (id: string) => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отображение серой полосы снизу */
  underline?: boolean;
  /** Мобильная версия компонента */
  mobile?: boolean;
}

/**
 * @deprecated Помечено как deprecated в версии 8.5.0, будет удалено в версии 10.х.х.
 * Взамен используйте TabMenuHorizontal/HorizontalTabs
 **/
export const TabMenu: FC<TabMenuProps> = ({
  tabs,
  dimension = 'l',
  underline = false,
  mobile = false,
  alignSelf = 'flex-end',
  activeTab,
  onChange,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  ...props
}) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  // state for visible tabs in !mobile mode
  const [visibilityMap, setVisibilityMap] = useState<{ [index: number | string]: boolean }>({});

  useEffect(() => {
    const visibility = tabs.reduce<{ [index: number | string]: boolean }>((initialMap, _, index) => {
      initialMap[index] = true;
      return initialMap;
    }, {});

    setVisibilityMap(visibility);
  }, [tabs]);

  // add refs to tabs
  const tabsWithRef: Array<TabWithRefProps> = useMemo(() => {
    return tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  }, [tabs]);

  // add refs to OverflowMenus
  const overflowMenuRefs: Array<OverflowMenuRefProps> = useMemo(() => {
    return tabs.slice(0, tabs.length - 1).map((_, index) => ({
      ref: createRef<HTMLButtonElement>(),
      isVisible: visibilityMap[index] && !visibilityMap[index + 1],
    }));
  }, [tabs, visibilityMap]);

  // ref to visible OverflowMenu
  const currentOverflowMenuRef = useMemo(() => {
    const visibleMenu = overflowMenuRefs.find((item) => item.isVisible);
    return visibleMenu ? visibleMenu.ref : null;
  }, [overflowMenuRefs, visibilityMap]);

  // collection of visible elements for handleKeyDown
  const visibleRefsMap = useMemo(() => {
    let refsMap: Array<RefObject<HTMLButtonElement>> = [];
    if (!mobile) {
      tabsWithRef.forEach((item, index) => {
        if (visibilityMap[index]) {
          refsMap.push(item.ref);
        }
      });
      if (currentOverflowMenuRef !== null) {
        refsMap.push(currentOverflowMenuRef);
      }
    } else {
      refsMap = tabsWithRef.map((item) => item.ref);
    }
    return refsMap;
  }, [visibilityMap, tabsWithRef, currentOverflowMenuRef, overflowMenuRefs, mobile]);

  const tablistRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  // defines if activeTab is visible or is in OverflowMenu in !mobile mode
  const activeTabIsVisible: boolean = useMemo(() => {
    const activeTabIndex = tabsWithRef.findIndex((item) => item.id === activeTab);
    return visibilityMap[activeTabIndex];
  }, [tabsWithRef, activeTab, visibilityMap]);

  // model of all tabs for OverflowMenus
  const modelAllTabs = useMemo(() => {
    return tabsWithRef.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={dimension} {...options} key={item.id}>
            <MenuItemWrapper>
              {item.icon && <IconWrapper $dimension={dimension}>{item.icon}</IconWrapper>}
              {item.content}
              {typeof item.badge !== 'undefined' && (
                <BadgeWrapper>
                  <Badge
                    data-badge
                    dimension="s"
                    appearance={item.id === activeTab ? 'info' : item.disabled ? 'lightDisable' : 'lightInactive'}
                  >
                    {item.badge}
                  </Badge>
                </BadgeWrapper>
              )}
            </MenuItemWrapper>
          </MenuItem>
        ),
        disabled: item.disabled,
      };
    });
  }, [dimension, tabs, tabsWithRef, activeTab]);

  const containsActiveTab = (items: Array<MenuModelItemProps>) => {
    return items.findIndex((item) => item.id === activeTab) != -1;
  };

  const getNextElement = (target: HTMLElement) => {
    let currentIndex = visibleRefsMap.findIndex((item) => target === item.current);
    if (currentIndex < visibleRefsMap.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    return visibleRefsMap[currentIndex].current;
  };

  const getNextFocus = (target: HTMLElement) => {
    let nextElement = getNextElement(target);
    while (nextElement?.disabled) {
      nextElement = getNextElement(nextElement);
    }
    return nextElement;
  };

  const getPreviousElement = (target: HTMLElement) => {
    let currentIndex = visibleRefsMap.findIndex((item) => target === item.current);
    if (currentIndex === 0) {
      currentIndex = visibleRefsMap.length - 1;
    } else {
      currentIndex--;
    }
    return visibleRefsMap[currentIndex].current;
  };

  const getPreviousFocus = (target: HTMLElement) => {
    let previousElement = getPreviousElement(target);
    while (previousElement?.disabled) {
      previousElement = getPreviousElement(previousElement);
    }
    return previousElement;
  };

  const styleUnderline = (left: number, width: number) => {
    if (underlineRef.current) {
      underlineRef.current.style.left = left + 'px';
      underlineRef.current.style.width = width + 'px';
      if (width) {
        underlineRef.current.style.display = 'flex';
      } else {
        underlineRef.current.style.display = 'none';
      }
    }
  };

  // recalculation on resize. For example, it happens after fonts loading
  useLayoutEffect(() => {
    function setUnderline() {
      const activeTabRef = tabsWithRef.filter((tab) => tab.id === activeTab)?.[0]?.ref.current;
      const left = parseFloat(underlineRef.current?.style.left || '0');
      const underlineWidth = parseFloat(underlineRef.current?.style.width || '0');

      if (activeTabRef && tablistRef.current) {
        // используем метод getBoundingClientRect, так как он дает точность до сотых пикселя
        const activeTabWidth = activeTabRef.getBoundingClientRect().width;
        const activeTabLeft =
          activeTabRef.getBoundingClientRect().left -
          tablistRef.current.getBoundingClientRect().left +
          tablistRef.current.scrollLeft;

        if (activeTabLeft !== left || activeTabWidth !== underlineWidth) {
          styleUnderline(activeTabLeft, activeTabWidth);
        }
      }
      if (!activeTabRef || (!mobile && !activeTabIsVisible)) {
        styleUnderline(0, 0);
      }
    }

    if (tablistRef.current?.firstElementChild) {
      const resizeObserver = new ResizeObserver(debounce(setUnderline, 100));
      resizeObserver.observe(tablistRef.current?.firstElementChild);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [tabsWithRef, activeTab, dimension, visibilityMap]);

  useLayoutEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const updatedEntries: { [index: number | string]: boolean } = {};
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const targetNumber = target.dataset.number;

        if (targetNumber !== undefined) {
          // intersectionRatio - имеет значение float, сравнение с 1 может привести к неправильному
          // результату, данное сравнение равносильно (a - b) < 0.01
          updatedEntries[targetNumber] = entry.isIntersecting && entry.intersectionRatio > 0.99;
        }
      });

      setVisibilityMap((prev: { [index: number | string]: boolean }) => ({
        ...prev,
        ...updatedEntries,
      }));
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: tablistRef.current,
      threshold: [0, 1.0],
    });

    if (tablistRef.current && !mobile) {
      Array.from(tablistRef.current.children).forEach((item) => {
        observer.observe(item);
      });
    }
    return () => observer.disconnect();
  }, [tabsWithRef, mobile, visibilityMap]);

  const handleTabClick = (event: MouseEvent<HTMLButtonElement>) => {
    mobile && event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    onChange(event.currentTarget.id);
    event.currentTarget.blur();
  };

  const handleTabKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      onChange(event.currentTarget.id);
    }
  };

  const handleTabsWrapperKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { target } = event;
    let newFocusTarget;

    const code = keyboardKey.getCode(event);
    switch (code) {
      case keyboardKey.Tab:
        if (!activeTabIsVisible) {
          newFocusTarget = currentOverflowMenuRef;
          event.preventDefault();
        }
        break;
      case keyboardKey.ArrowLeft:
        newFocusTarget = getPreviousFocus(target as HTMLElement);
        event.preventDefault();
        break;
      case keyboardKey.ArrowRight:
        newFocusTarget = getNextFocus(target as HTMLElement);
        event.preventDefault();
        break;
      default:
        break;
    }

    if (!openedMenu && newFocusTarget) {
      (newFocusTarget as HTMLElement).focus();
    }
  };

  const getTabIndex = (id: string) => {
    return tabsWithRef.findIndex((item) => item.id === id);
  };

  const renderOverflowMenu = (id: string) => {
    const tabNumber = getTabIndex(id);
    const tabsForMenu = modelAllTabs.slice(tabNumber + 1);
    const overflowMenuHidden =
      tabNumber === tabsWithRef.length - 1 || !(visibilityMap[tabNumber] && !visibilityMap[tabNumber + 1]);
    const tabIndex = overflowMenuHidden || !tabsForMenu?.filter((item) => item.id === activeTab).length ? -1 : 0;
    const overflowRef = overflowMenuRefs[tabNumber] ? overflowMenuRefs[tabNumber].ref : null;

    return (
      <OverflowMenuContainer $dimension={dimension} $isHidden={overflowMenuHidden}>
        <StyledOverflowMenu
          ref={overflowRef}
          onOpen={() => setOpenedMenu(true)}
          onClose={() => setOpenedMenu(false)}
          alignSelf={alignSelf}
          items={overflowMenuHidden ? [] : tabsForMenu}
          selected={containsActiveTab(tabsForMenu) ? activeTab : undefined}
          dimension={dimension}
          $isActive={containsActiveTab(tabsForMenu)}
          disabled={tabsForMenu.every((tab) => tab.disabled)}
          onChange={(id: string) => {
            onChange(id);
            styleUnderline(0, 0);
          }}
          tabIndex={tabIndex}
          dropContainerCssMixin={dropContainerCssMixin}
          dropContainerClassName={dropContainerClassName}
          dropContainerStyle={dropContainerStyle}
        />
      </OverflowMenuContainer>
    );
  };

  const renderTab = (item: TabWithRefProps) => {
    const { disabled, content, id, icon, badge, ref, ...props } = item;

    return (
      <Tab
        ref={ref}
        key={id}
        id={id}
        role="tab"
        type="button"
        aria-selected={id === activeTab}
        $selected={id === activeTab}
        tabIndex={id === activeTab ? 0 : -1}
        $dimension={dimension}
        disabled={disabled}
        onClick={handleTabClick}
        onKeyUp={handleTabKeyUp}
        {...props}
      >
        <TabContentWrapper $dimension={dimension} tabIndex={-1}>
          {icon && icon}
          <TabContent>{content}</TabContent>
          {typeof badge !== 'undefined' && (
            <Badge
              data-badge
              dimension="s"
              appearance={id === activeTab ? 'info' : disabled ? 'lightDisable' : 'lightInactive'}
            >
              {badge}
            </Badge>
          )}
        </TabContentWrapper>
      </Tab>
    );
  };

  const renderTabs = () => {
    return tabsWithRef.map((item: TabWithRefProps, index) => {
      const { id } = item;
      const tabNumber = getTabIndex(id);
      const needsOffset = !mobile && tabNumber !== 0 && visibilityMap[tabNumber - 1];

      return (
        <TabWrapper key={id} data-number={index} $needsOffset={needsOffset} $dimension={dimension}>
          {renderTab(item)}
          {mobile || tabNumber === tabsWithRef.length - 1 ? null : renderOverflowMenu(id)}
        </TabWrapper>
      );
    });
  };

  return (
    <Wrapper
      role="tablist"
      ref={tablistRef}
      $underline={underline}
      $mobile={mobile}
      $dimension={dimension}
      onKeyDown={handleTabsWrapperKeyDown}
      {...props}
    >
      {renderTabs()}
      <Underline ref={underlineRef} aria-hidden />
    </Wrapper>
  );
};

TabMenu.displayName = 'TabMenu';
