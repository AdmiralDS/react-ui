import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { debounce } from '#src/components/common/utils/debounce';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

import {
  ActiveHorizontalTabSelector,
  HorizontalAddTabButton,
  HorizontalTabOverflowMenu,
} from '#src/components/TabMenuComponent/containerElements';

import { HorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import type { TabMenuHorizontalProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import {
  ADD_TAB_BUTTON_CONTAINER_SIZE_L,
  ADD_TAB_BUTTON_CONTAINER_SIZE_M,
  OVERFLOW_MENU_CONTAINER_SIZE_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { getActiveTabWidth, getTabWidthMap } from '#src/components/TabMenuComponent/utils';

const HiddenContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow: hidden;
`;
const VisibleContainer = styled(HorizontalTabMenuContainer)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  position: relative;
`;

export const TabMenuHorizontal = ({
  dimension = 'l',
  appearance = 'primary',
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
  ...props
}: TabMenuHorizontalProps) => {
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
  }, [visibleContainerRef, dimension]);
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

  const horizontalTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, undefined);
    });
  }, [tabsId, renderTab]);

  const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
  const [hiddenTabs, setHiddenTabs] = useState<string[]>([]);
  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  useEffect(() => {
    function setTabWidth() {
      if (hiddenContainerRef.current) {
        const overflow = checkOverflow(hiddenContainerRef.current);
        if (overflowState !== overflow) setOverflowState(overflow);
        const tabWidth = getTabWidthMap(tabsId, hiddenContainerRef.current.children);
        setTabWidthMap(tabWidth);
      }
    }
    if (hiddenContainerRef.current?.firstElementChild) {
      const resizeObserver = new ResizeObserver(debounce(setTabWidth, 100));
      resizeObserver.observe(hiddenContainerRef.current?.firstElementChild);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [hiddenContainerRef, containerWidth, horizontalTabs, tabsId]);

  useEffect(() => {
    const newVisibleTabs: string[] = [];
    const newHiddenTabs: string[] = [];
    if (visibleContainerRef.current && tabWidthMap.length > 0) {
      const maxWidth = containerWidth;
      const addToVisible = (tabId: string) => newVisibleTabs.push(tabId);
      const addToHidden = (tabId: string) => newHiddenTabs.push(tabId);

      const activeTabWidth = tabWidthMap.find((tab) => tab.tabId === selectedTab)?.width || 0;
      const overflowWidth = overflowState
        ? (dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M) + activeTabWidth
        : 0;
      const addTabButtonWidth = showAddTabButton
        ? dimension === 'l'
          ? ADD_TAB_BUTTON_CONTAINER_SIZE_L
          : ADD_TAB_BUTTON_CONTAINER_SIZE_M
        : 0;
      let availableWidth = maxWidth - overflowWidth - addTabButtonWidth;
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
  }, [visibleContainerRef, containerWidth, tabWidthMap, overflowState, showAddTabButton, selectedTab]);

  const renderedVisibleTabs = visibleTabs.map((tabId) => {
    return renderTab(tabId, tabId === selectedTab, handleSelectTab);
  });

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
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const getActiveTabLeft = () => {
    const index = visibleTabs.findIndex((tab) => tab === selectedTab);
    if (index < 0) return 0;
    let left = 0;
    for (let i = 0; i < index; i++) {
      const tabWidth = tabWidthMap.find((tab) => tab.tabId === visibleTabs[i])?.width || 0;
      left += tabWidth;
    }
    return left;
  };

  const getUnderlinePosition = () => {
    const width = selectedTab ? getActiveTabWidth(tabWidthMap, selectedTab) : 0;
    const left = getActiveTabLeft();
    return { left: left, width: width };
  };

  const styleUnderline = () => {
    const { left, width } = getUnderlinePosition();
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  };

  useEffect(() => {
    styleUnderline();
  }, [selectedTab, renderedVisibleTabs]);
  //</editor-fold>

  return (
    <Wrapper {...props}>
      <HiddenContainer ref={hiddenContainerRef}>{horizontalTabs}</HiddenContainer>
      <VisibleContainer ref={visibleContainerRef} $showUnderline={showUnderline}>
        {renderedVisibleTabs}
        {showAddTabButton && <HorizontalAddTabButton dimension={dimension} onClick={onAddTab} />}
        <HorizontalTabOverflowMenu
          {...dropProps}
          items={overflowMenuItems}
          isHidden={!overflowState}
          onSelectItem={handleSelectTab}
          selected={selectedTab}
          dimension={dimension}
        />
        <ActiveHorizontalTabSelector
          $appearance={appearance}
          $left={`${underlineLeft}px`}
          $width={`${underlineWidth}px`}
          $transition={true}
        />
      </VisibleContainer>
    </Wrapper>
  );
};
TabMenuHorizontal.displayName = 'TabMenuHorizontal';
