import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

import { HorizontalTabOverflowMenu } from '#src/components/TabMenuComponent/containerElements';

import { HorizontalCardTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import type { CardTabMenuHorizontalProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import {
  OVERFLOW_MENU_CONTAINER_SIZE_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { getTabWidthMap } from '#src/components/TabMenuComponent/utils';

const HiddenContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow: hidden;
`;
const VisibleContainer = styled(HorizontalCardTabMenuContainer)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  position: relative;
`;

export const CardTabMenuHorizontal = ({
  dimension = 'l',
  showUnderline,
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
  ...props
}: CardTabMenuHorizontalProps) => {
  //<editor-fold desc="Управление шириной контейнера">
  const [containerWidth, setContainerWidth] = useState(0);
  const visibleContainerRef = useRef<HTMLDivElement>(null);
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  const [overflowState, setOverflowState] = useState(false);

  useLayoutEffect(() => {
    if (visibleContainerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setContainerWidth(entry.contentRect.width || 0));
      });
      resizeObserver.observe(visibleContainerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
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
  const horizontalTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, undefined);
    });
  }, [tabsId, renderTab]);

  const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
  const [hiddenTabs, setHiddenTabs] = useState<string[]>([]);
  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  useLayoutEffect(() => {
    if (hiddenContainerRef.current) {
      const overflow = checkOverflow(hiddenContainerRef.current);
      if (overflowState !== overflow) setOverflowState(overflow);
      const tabWidth = getTabWidthMap(tabsId, hiddenContainerRef.current.children);
      setTabWidthMap(tabWidth);
    }
  }, [hiddenContainerRef, containerWidth, horizontalTabs]);

  useEffect(() => {
    const newVisibleTabs: string[] = [];
    const newHiddenTabs: string[] = [];
    if (visibleContainerRef.current && tabWidthMap.length > 0) {
      const maxWidth = containerWidth;
      const addToVisible = (tabId: string) => newVisibleTabs.push(tabId);
      const addToHidden = (tabId: string) => newHiddenTabs.push(tabId);

      const activeTabWidth = tabWidthMap.find((tab) => tab.tabId === selectedTab)?.width;
      let availableWidth = overflowState
        ? maxWidth -
          (dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M) -
          (activeTabWidth || 0)
        : maxWidth;
      tabWidthMap.forEach(({ tabId, width }) => {
        const tabIsActive = tabId === selectedTab;
        const tabWidth = width;

        if (availableWidth >= tabWidth || tabIsActive) {
          addToVisible(tabId);
        }
        if (availableWidth === 0 || (availableWidth < tabWidth && !tabIsActive)) {
          addToHidden(tabId);
        }
        if (availableWidth > 0) {
          if (!tabIsActive) {
            if (availableWidth >= tabWidth) {
              availableWidth -= tabWidth;
            } else {
              availableWidth = 0;
            }
          }
        }
      });
    }
    setVisibleTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
  }, [visibleContainerRef, containerWidth, tabWidthMap, overflowState, selectedTab]);

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

  return (
    <Wrapper {...props}>
      <HiddenContainer ref={hiddenContainerRef}>{horizontalTabs}</HiddenContainer>
      <VisibleContainer ref={visibleContainerRef} $showUnderline={showUnderline}>
        {renderedVisibleTabs}
        <HorizontalTabOverflowMenu
          items={overflowMenuItems}
          isHidden={!overflowState}
          onSelectItem={handleSelectTab}
          selected={selectedTab}
          dimension={dimension}
          alignSelf={alignSelf}
          menuWidth={menuWidth}
          menuMaxHeight={menuMaxHeight}
          dropContainerCssMixin={dropContainerCssMixin}
          dropContainerClassName={dropContainerClassName}
          dropContainerStyle={dropContainerStyle}
        />
      </VisibleContainer>
    </Wrapper>
  );
};
CardTabMenuHorizontal.displayName = 'CardTabMenuHorizontal';
