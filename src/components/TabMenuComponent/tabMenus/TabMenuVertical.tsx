import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

import { VerticalTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import {
  ActiveVerticalTabSelector,
  VerticalAddTabButton,
  VerticalTabOverflowMenu,
} from '#src/components/TabMenuComponent/containerElements';
import type { TabMenuVerticalProps } from '#src/components/TabMenuComponent/types';
import {
  BASE_TAB_HEIGHT_L,
  BASE_TAB_HEIGHT_M,
  VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L,
  VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L,
  VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M,
  VERTICAL_TABS_GAP,
} from '#src/components/TabMenuComponent/constants';

const Wrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const TabMenuVertical = ({
  dimension = 'l',
  showUnderline,
  underlinePosition = 'right',
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  onAddTab,
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
  isVisible,
  onVisibilityChange,
  active,
  onActivateItem,
  disableSelectedOptionHighlight,
  renderTopPanel,
  renderBottomPanel,
  onForwardCycleApprove,
  onBackwardCycleApprove,
  onClickOutside,
  appearance,
  ...props
}: TabMenuVerticalProps) => {
  const dropProps = {
    alignSelf,
    menuWidth,
    menuMaxHeight,
    dropContainerCssMixin,
    dropContainerClassName,
    dropContainerStyle,
    isVisible,
    onVisibilityChange,
    active,
    onActivateItem,
    disableSelectedOptionHighlight,
    renderTopPanel,
    renderBottomPanel,
    onForwardCycleApprove,
    onBackwardCycleApprove,
    onClickOutside,
  };
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
      const addTabButtonHeight = showAddTabButton
        ? (dimension === 'l' ? VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L : VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M) +
          VERTICAL_TABS_GAP
        : 0;
      const newMaxTabs = Math.floor(
        (containerHeight + VERTICAL_TABS_GAP - addTabButtonHeight) /
          ((dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M) + VERTICAL_TABS_GAP),
      );
      setMaxTabs(newMaxTabs);
    }
  }, [containerRef, containerHeight, dimension, tabsId]);
  //</editor-fold>

  //<editor-fold desc="Создание табов для отрисовки">
  const showAddTabButton = !!onAddTab;
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
    const maxHeight = containerHeight;
    const allTabsVisible = tabsId.length <= maxTabs;
    const newVisibleTabs: string[] = [];
    const newHiddenTabs: string[] = [];
    const addToVisible = (tabId: string) => newVisibleTabs.push(tabId);
    const addToHidden = (tabId: string) => newHiddenTabs.push(tabId);

    const tabHeight = dimension === 'l' ? BASE_TAB_HEIGHT_L : BASE_TAB_HEIGHT_M;
    const overflowHeight = !allTabsVisible
      ? (dimension === 'l' ? VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L : VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M) +
        VERTICAL_TABS_GAP +
        tabHeight
      : 0;
    const addTabButtonHeight = showAddTabButton
      ? (dimension === 'l' ? VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L : VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M) +
        VERTICAL_TABS_GAP
      : 0;
    const availableHeight = maxHeight - overflowHeight - addTabButtonHeight;
    let availableTabs = Math.floor((availableHeight + VERTICAL_TABS_GAP) / (tabHeight + VERTICAL_TABS_GAP));

    tabsId.forEach((tabId) => {
      const tabIsActive = tabId === selectedTab;
      if (availableTabs > 0 || tabIsActive) {
        addToVisible(tabId);
      }
      if (availableTabs === 0) {
        addToHidden(tabId);
      }
      if (availableTabs > 0) {
        if (!tabIsActive) {
          availableTabs -= 1;
        }
      }
    });

    setVisibleTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
  }, [maxTabs, selectedTab, containerHeight, tabsId]);

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
    <Wrapper>
      <VerticalTabMenuContainer
        {...props}
        ref={containerRef}
        $underlinePosition={underlinePosition}
        $showUnderline={showUnderline}
      >
        {renderedVisibleTabs}
        {showAddTabButton && <VerticalAddTabButton dimension={dimension} onClick={onAddTab} />}
        <VerticalTabOverflowMenu
          {...dropProps}
          items={overflowMenuItems}
          onSelectItem={handleSelectTab}
          selected={selectedTab}
          dimension={dimension}
          isHidden={hiddenTabs.length === 0}
        />
        <ActiveVerticalTabSelector
          $appearance={appearance}
          $top={`${underlineTop}px`}
          $height={`${underlineHeight}px`}
          $transition={true}
          $underlinePosition={underlinePosition}
        />
      </VerticalTabMenuContainer>
    </Wrapper>
  );
};
TabMenuVertical.displayName = 'TabMenuVertical';
