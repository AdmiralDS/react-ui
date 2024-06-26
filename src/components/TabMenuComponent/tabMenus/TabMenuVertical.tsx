import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

import { VerticalTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import { ActiveVerticalTabSelector, VerticalTabOverflowMenu } from '#src/components/TabMenuComponent/containerElements';
import type { TabMenuVerticalProps } from '#src/components/TabMenuComponent/types';
import { BASE_TAB_HEIGHT_L, BASE_TAB_HEIGHT_M, VERTICAL_TABS_GAP } from '#src/components/TabMenuComponent/constants';

export const TabMenuVertical = ({
  dimension = 'l',
  showUnderline,
  underlinePosition = 'right',
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  renderDropMenuItem,
  tabIsDisabled,
  alignSelf,
  menuWidth,
  menuMaxHeight,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  ...props
}: TabMenuVerticalProps) => {
  //<editor-fold desc="Управление высотой контейнера">
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [maxTabs, setMaxTabs] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setContainerHeight(entry.contentRect.height || 0));
      });
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setMaxTabs(
        Math.floor(
          (containerHeight + VERTICAL_TABS_GAP) /
            ((dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M) + VERTICAL_TABS_GAP),
        ),
      );
    }
  }, [containerRef, containerHeight, dimension]);
  //</editor-fold>

  //<editor-fold desc="Создание табов для отрисовки">
  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);
  const selectedTab = selectedTabId || selectedTabInner;
  const handleSelectTab = (tabId: string) => {
    if (!tabIsDisabled(tabId)) {
      setSelectedTabInner(tabId);
      onSelectTab?.(tabId);
    }
  };

  const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
  const [hiddenTabs, setHiddenTabs] = useState<string[]>([]);

  useLayoutEffect(() => {
    const allTabsVisible = tabsId.length <= maxTabs;
    const newVisibleTabs: string[] = [];
    const newHiddenTabs: string[] = [];
    const addToVisible = (tabId: string) => newVisibleTabs.push(tabId);
    const addToHidden = (tabId: string) => newHiddenTabs.push(tabId);

    let activeTabIsVisible = false;
    tabsId.forEach((tabId, index) => {
      const tabIsActive = tabId === selectedTab;
      if (
        allTabsVisible ||
        index < maxTabs - 2 ||
        (index === maxTabs - 2 && (activeTabIsVisible || tabIsActive)) ||
        (index > maxTabs - 2 && tabId === selectedTab)
      ) {
        addToVisible(tabId);
        if (tabIsActive) activeTabIsVisible = true;
      }
      if (!allTabsVisible && (index > maxTabs - 2 || (index === maxTabs - 2 && !activeTabIsVisible && !tabIsActive))) {
        addToHidden(tabId);
      }
    });
    setVisibleTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
  }, [maxTabs, selectedTab]);

  const renderedVisibleTabs = useMemo(() => {
    if (visibleTabs.length === 0) return [];
    return visibleTabs.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [visibleTabs, dimension]);

  const overflowMenuItems: MenuModelItemProps[] = useMemo(() => {
    if (hiddenTabs.length === 0) return [];
    return hiddenTabs.map((tabId) => {
      return {
        id: tabId,
        render: renderDropMenuItem(tabId),
        disabled: tabIsDisabled(tabId),
      };
    });
  }, [hiddenTabs, dimension]);
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineTop, setUnderlineTop] = useState(0);
  const [underlineHeight, setUnderlineHeight] = useState(0);
  const getUnderlinePosition = () => {
    const index = visibleTabs.findIndex((tab) => tab === selectedTab);
    if (index < 0) return { top: 0, height: 0 };
    const height = dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M;
    const top = index * (height + VERTICAL_TABS_GAP);
    return { top: top, height: height };
  };
  const styleUnderlineL = () => {
    const { top, height } = getUnderlinePosition();
    setUnderlineHeight(height);
    setUnderlineTop(top);
  };
  useEffect(() => {
    styleUnderlineL();
  }, [selectedTab, renderedVisibleTabs]);
  //</editor-fold>

  return (
    <VerticalTabMenuContainer
      {...props}
      ref={containerRef}
      $underlinePosition={underlinePosition}
      $showUnderline={showUnderline}
    >
      {renderedVisibleTabs}
      <VerticalTabOverflowMenu
        items={overflowMenuItems}
        onSelectItem={handleSelectTab}
        selected={selectedTab}
        dimension={dimension}
        isHidden={hiddenTabs.length === 0}
        alignSelf={alignSelf}
        menuWidth={menuWidth}
        menuMaxHeight={menuMaxHeight}
        dropContainerCssMixin={dropContainerCssMixin}
        dropContainerClassName={dropContainerClassName}
        dropContainerStyle={dropContainerStyle}
      />
      <ActiveVerticalTabSelector
        $top={`${underlineTop}px`}
        $height={`${underlineHeight}px`}
        $transition={true}
        $underlinePosition={underlinePosition}
      />
    </VerticalTabMenuContainer>
  );
};
TabMenuVertical.displayName = 'TabMenuVertical';
