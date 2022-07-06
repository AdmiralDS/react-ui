import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { Badge } from '#src/components/Badge';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import observeRect from '#src/components/common/observeRect';

import {
  StyledOverflowMenu,
  Tab,
  TabContent,
  TabContentWrapper,
  Underline,
  Wrapper,
} from '#src/components/TabMenu/style';
import type { Dimension } from '#src/components/TabMenu/constants';

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Контент вкладки */
  content: React.ReactNode;
  /** Id вкладки */
  id: string;
  /** Иконка, располагается слева от content */
  icon?: React.ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;
  /** Отключение вкладки */
  disabled?: boolean;
}

type TabWithRefProps = TabProps & { ref: React.RefObject<HTMLButtonElement>; width?: number };
type OverflowMenuRefProps = {
  ref: React.RefObject<HTMLButtonElement>;
  isVisible: boolean;
};

export interface TabMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  dimension = 'l',
  underline = false,
  mobile = false,
  alignSelf = 'flex-end',
  activeTab,
  onChange,
  ...props
}) => {
  const [openedMenu, setOpenedMenu] = React.useState(false);
  // state for visible tabs in !mobile mode
  const [visibilityMap, setVisibilityMap] = React.useState<{ [index: number | string]: boolean }>(
    tabs.reduce<{ [index: number | string]: boolean }>((initialMap, _, index) => {
      initialMap[index] = true;
      return initialMap;
    }, {}),
  );

  // add refs to tabs
  const tabsWithRef: Array<TabWithRefProps> = React.useMemo(() => {
    return tabs.map((tab) => ({ ...tab, ref: React.createRef<HTMLButtonElement>() }));
  }, [tabs]);
  // refs to OverflowMenus
  const overflowMenuRefs: Array<OverflowMenuRefProps> = React.useMemo(() => {
    return tabs.slice(0, tabs.length - 1).map((_, index) => ({
      ref: React.createRef<HTMLButtonElement>(),
      isVisible: visibilityMap[index] && !visibilityMap[index + 1],
    }));
  }, [tabs, visibilityMap]);
  // ref to visible OverflowMenu
  const currentOverflowMenuRef = React.useMemo(() => {
    const visibleMenu = overflowMenuRefs.find((item) => item.isVisible === true);
    if (visibleMenu) {
      return visibleMenu.ref;
    }
    return null;
  }, [overflowMenuRefs]);

  const tablistRef = React.useRef<HTMLDivElement | null>(null);
  const underlineRef = React.useRef<HTMLDivElement | null>(null);
  const firstTabRef = React.useRef(0);
  const overflowBtnRef = React.useRef<HTMLButtonElement | null>(null);

  // defines if activeTab is visible or is in OverflowMenu in !mobile mode
  const activeTabIsVisible: boolean = React.useMemo(() => {
    const activeTabIndex = tabsWithRef.findIndex((item) => item.id === activeTab);
    return visibilityMap[activeTabIndex];
  }, [tabsWithRef, activeTab, visibilityMap]);

  // model of all tabs for OverflowMenus
  const modelAllTabs = React.useMemo(() => {
    return tabsWithRef.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.content}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [dimension, tabs, tabsWithRef]);

  const isHiddenTabSelected = (items: Array<ItemProps>) => items.findIndex((tab) => tab.id === activeTab) != -1;

  const containsActiveTab = (items: Array<ItemProps>) => {
    return items.findIndex((item) => item.id === activeTab) != -1;
  };

  const getNextFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.nextElementSibling || overflowBtnRef.current || tablistRef.current?.firstElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.nextElementSibling || overflowBtnRef.current || tablistRef.current?.firstElementChild;
    }
    return sibling;
  };
  const getPreviousFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.previousElementSibling || overflowBtnRef.current || tablistRef.current?.lastElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.previousElementSibling || overflowBtnRef.current || tablistRef.current?.lastElementChild;
    }
    return sibling;
  };

  const focusFirstTab = () => {
    let tab = tablistRef.current?.firstElementChild;
    while (tab?.hasAttribute('disabled')) {
      tab = tab.nextElementSibling;
    }
    tab ? (tab as HTMLElement).focus() : (overflowBtnRef.current as HTMLElement).focus();
  };

  const focusLastTab = () => {
    let tab = tablistRef.current?.lastElementChild;
    while (tab?.hasAttribute('disabled')) {
      tab = tab.previousElementSibling;
    }
    tab ? (tab as HTMLElement).focus() : (overflowBtnRef.current as HTMLElement).focus();
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

  const setUnderline = () => {
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
  };

  React.useLayoutEffect(() => setUnderline(), [tabsWithRef, activeTab, dimension, visibilityMap]);

  // recalculation on resize. For example, it happens after fonts loading
  React.useLayoutEffect(() => {
    if (tablistRef.current?.firstElementChild) {
      const observer = observeRect(tablistRef.current.firstElementChild, (rect) => {
        const width = rect?.width || 0;
        if (firstTabRef.current !== width) {
          firstTabRef.current = width;
          setUnderline();
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [tablistRef.current]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const updatedEntries: { [index: number | string]: boolean } = {};
    entries.forEach((entry: any) => {
      const target = entry.target;
      const targetNumber = target.dataset.number;

      if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
        updatedEntries[targetNumber] = true;
      } else {
        updatedEntries[targetNumber] = false;
      }
    });

    setVisibilityMap((prev: { [index: number | string]: boolean }) => ({
      ...prev,
      ...updatedEntries,
    }));
  };

  React.useLayoutEffect(() => {
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
  }, [tablistRef, mobile, setVisibilityMap]);

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    mobile && event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    onChange(event.currentTarget.id);
    event.currentTarget.blur();
  };

  const handleTabKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      onChange(event.currentTarget.id);
    }
  };

  const handleTabsWrapperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { target } = event;
    let newFocusTarget;

    const code = keyboardKey.getCode(event);
    switch (code) {
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

    if (newFocusTarget) {
      (newFocusTarget as HTMLElement).focus();
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!openedMenu) {
      const code = keyboardKey.getCode(event);
      switch (code) {
        case keyboardKey.ArrowLeft:
          focusLastTab();
          event.preventDefault();
          break;
        case keyboardKey.ArrowRight:
          focusFirstTab();
          event.preventDefault();
          break;
        default:
          break;
      }
    }
  };
  const getTabIndex = (id: string) => {
    return tabsWithRef.findIndex((item) => item.id === id);
  };

  const renderTabs = () => {
    return tabsWithRef.map((item: TabWithRefProps, index) => {
      /* width отдельно вынесен из props, чтобы он не передавался в Tab.
      Иначе будет постоянно передаваться в таб, что не верно,
      т.к. параметр width нужен только для внутренних расчетов */
      const { disabled, content, id, icon, badge, ref, width, ...props } = item;
      const tabNumber = getTabIndex(id);
      const tabsForMenu = modelAllTabs.slice(tabNumber + 1);
      const overflowMenuHidden =
        tabNumber === tabsWithRef.length - 1 || !(visibilityMap[tabNumber] && !visibilityMap[tabNumber + 1]);
      const tabIndex = overflowMenuHidden || !tabsForMenu?.filter((item) => item.id === activeTab).length ? -1 : 0;
      return (
        <div key={id} data-number={index}>
          <Tab
            ref={ref}
            key={id}
            id={id}
            role="tab"
            type="button"
            aria-selected={id === activeTab}
            selected={id === activeTab}
            tabIndex={id === activeTab ? 0 : -1}
            dimension={dimension}
            disabled={disabled}
            onClick={handleTabClick}
            onKeyUp={handleTabKeyUp}
            {...props}
          >
            <TabContentWrapper dimension={dimension} tabIndex={-1}>
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
          {mobile || tabNumber === tabsWithRef.length - 1 ? null : (
            <StyledOverflowMenu
              ref={overflowMenuRefs[tabNumber]}
              onOpen={() => setOpenedMenu(true)}
              onClose={() => setOpenedMenu(false)}
              alignSelf={alignSelf}
              items={tabsForMenu}
              selected={containsActiveTab(tabsForMenu) ? activeTab : undefined}
              dimension={dimension}
              isHidden={overflowMenuHidden}
              isActive={containsActiveTab(tabsForMenu)}
              disabled={tabsForMenu.length === tabsForMenu.filter((tab) => tab.disabled).length}
              onChange={(id: string) => {
                onChange(id);
                if (!isHiddenTabSelected(tabsForMenu)) {
                  styleUnderline(0, 0);
                }
              }}
              tabIndex={tabIndex}
              onKeyDown={handleMenuKeyDown}
            />
          )}
        </div>
      );
    });
  };

  return (
    <Wrapper
      role="tablist"
      ref={tablistRef}
      underline={underline}
      mobile={mobile}
      dimension={dimension}
      onKeyDown={handleTabsWrapperKeyDown}
      {...props}
    >
      {renderTabs()}
      <Underline ref={underlineRef} aria-hidden />
    </Wrapper>
  );
};

TabMenu.displayName = 'TabMenu';
