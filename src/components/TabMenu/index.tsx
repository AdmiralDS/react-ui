import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import observeRect from '#src/components/common/observeRect';
import { Badge } from '#src/components/Badge';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/MenuItem';

import measureTab from '#src/components/TabMenu/measureTab';
import {
  Tab,
  TabContent,
  TabContentWrapper,
  StyledOverflowMenu,
  TabsWrapper,
  Underline,
  Wrapper,
} from '#src/components/TabMenu/style';
import type { Dimension } from '#src/components/TabMenu/constants';
import { OVERFLOW_MARGIN_LEFT, OVERFLOW_SIZE_L, OVERFLOW_SIZE_M } from '#src/components/TabMenu/constants';

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
  // add refs to tabs
  const tabsWithRef: Array<TabWithRefProps> = React.useMemo(() => {
    return tabs.map((tab) => ({ ...tab, ref: React.createRef<HTMLButtonElement>() }));
  }, [tabs]);

  const tabsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tablistRef = React.useRef<HTMLDivElement | null>(null);
  const overflowBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const underlineRef = React.useRef<HTMLDivElement | null>(null);
  const tabsWrapperWidthRef = React.useRef(0);
  const [update, setUpdate] = React.useState({});
  const [visibleTabsAmount, setVisibleTabsAmount] = React.useState(tabsWithRef.length);
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const visibleTabs = mobile ? tabsWithRef : tabsWithRef.slice(0, visibleTabsAmount);
  const hiddenTabs = mobile ? [] : tabsWithRef.slice(visibleTabsAmount);
  const model = React.useMemo(() => {
    return hiddenTabs.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.content}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [dimension, hiddenTabs]);
  const modelTabs = React.useMemo(() => {
    return tabsWithRef.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.content}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [dimension, tabsWithRef]);

  const isHiddenTabSelected = (items: Array<ItemProps>) => items.findIndex((tab) => tab.id === activeTab) != -1;

  const containsActiveTab = (items: Array<ItemProps>) => {
    return items.findIndex((item) => item.id === activeTab) != -1;
  };

  const getNextFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.nextElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.firstElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.nextElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.firstElementChild;
    }
    return sibling;
  };
  const getPreviousFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.previousElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.lastElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.previousElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.lastElementChild;
    }
    return sibling;
  };

  const focusFirstTab = () => {
    let tab = tabsWrapperRef.current?.firstElementChild;
    while (tab?.hasAttribute('disabled')) {
      tab = tab.nextElementSibling;
    }
    tab ? (tab as HTMLElement).focus() : (overflowBtnRef.current as HTMLElement).focus();
  };

  const focusLastTab = () => {
    let tab = tabsWrapperRef.current?.lastElementChild;
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
    if (!activeTabRef || hiddenTabs.filter((tab) => tab.id === activeTab).length) {
      styleUnderline(0, 0);
    }
  };

  const measureTabs = () => {
    tabsWithRef.forEach((tab: TabWithRefProps, index: number) => {
      measureTab(tab, dimension, (width: number) => {
        tab.width = width;
        if (index === tabs.length - 1) {
          /**
           * В measureTab используется асинхронная функция ReactDOM.render.
           * Поэтому после того, как будут вычислены размеры всех табов,
           * необходимо обновить компонент, чтобы выполнился перерасчет видимых и скрытых в меню табов.
           */
          setUpdate({});
        }
      });
    });
  };

  // measure tabs sizes
  React.useLayoutEffect(() => {
    measureTabs();
  }, [tabsWithRef, dimension]);

  React.useLayoutEffect(() => setUnderline(), [tabsWithRef, activeTab, visibleTabsAmount, update]);

  // recalculation on Tabmenu resize
  React.useLayoutEffect(() => {
    if (tablistRef.current) {
      const observer = observeRect(tablistRef.current, (rect) => {
        const tablistWidth = rect?.width || 0;

        const tabsTotalWidth = tabsWithRef.reduce((sum, item) => {
          return sum + (item.width || 0);
        }, 0);
        // если все табы не помещаются в одну строку и нужно часть из них вынести в меню
        if (tabsTotalWidth > tablistWidth) {
          let visibleTabsCounter = 0;
          let contentWidth =
            dimension === 'l' ? OVERFLOW_SIZE_L + OVERFLOW_MARGIN_LEFT : OVERFLOW_SIZE_M + OVERFLOW_MARGIN_LEFT;
          tabsWithRef.forEach((item: TabWithRefProps) => {
            contentWidth += item.width || 0;
            if (contentWidth <= tablistWidth) {
              visibleTabsCounter++;
            }
            setVisibleTabsAmount(visibleTabsCounter);
          });
        } else {
          setVisibleTabsAmount(tabs.length);
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [tablistRef.current, update]);

  /**
   * При срабатывании observer обязательно проверяем, что изменилось интересующее нас свойство (ширина).
   * Это важно учитывать, так как observer срабатывает при изменении целого ряда свойств
   * элемента (bottom, height, left, right, top, width), большая часть из которых для нас не важна.
   */

  // recalculation on Tabs Wrapper resize. For example, it happens after fonts loading
  React.useLayoutEffect(() => {
    if (tabsWrapperRef.current) {
      const observer = observeRect(tabsWrapperRef.current, (rect) => {
        const width = rect?.width || 0;
        if (tabsWrapperWidthRef.current !== width) {
          tabsWrapperWidthRef.current = width;
          setUnderline();
          measureTabs();
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [tabsWrapperRef.current, dimension]);

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

  /* width отдельно вынесен из props, чтобы он не передавался в Tab.
  Иначе будет постоянно передаваться в таб, что не верно,
  т.к. параметр width нужен только для внутренних расчетов */
  return (
    <Wrapper role="tablist" ref={tablistRef} underline={underline} mobile={mobile} dimension={dimension} {...props}>
      <Underline ref={underlineRef} aria-hidden />
      <TabsWrapper ref={tabsWrapperRef} onKeyDown={handleTabsWrapperKeyDown}>
        {tabsWithRef.map((item: TabWithRefProps) => {
          const { disabled, content, id, icon, badge, ref, width, ...props } = item;
          const tabNumber = getTabIndex(id);
          const tabsForMenu = modelTabs.slice(tabNumber + 1);
          return (
            <>
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
                needsMargin={tabNumber !== 0}
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
              <StyledOverflowMenu
                ref={overflowBtnRef}
                onOpen={() => setOpenedMenu(true)}
                onClose={() => setOpenedMenu(false)}
                alignSelf={alignSelf}
                items={tabsForMenu}
                selected={containsActiveTab(tabsForMenu) ? activeTab : undefined}
                dimension={dimension}
                hide={tabNumber !== tabsWithRef.length - 1}
                isActive={containsActiveTab(tabsForMenu)}
                disabled={tabsForMenu.length === tabsForMenu.filter((tab) => tab.disabled).length}
                onChange={(id: string) => {
                  onChange(id);
                  if (!isHiddenTabSelected(tabsForMenu)) {
                    styleUnderline(0, 0);
                  }
                }}
                tabIndex={tabsForMenu?.filter((item) => item.id === activeTab).length ? 0 : -1}
                onKeyDown={handleMenuKeyDown}
              />
            </>
          );
        })}
      </TabsWrapper>
    </Wrapper>
  );
};

TabMenu.displayName = 'TabMenu';
