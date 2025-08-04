import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { ActiveHorizontalTabSelector } from '#src/components/TabMenuComponent/containerElements';

import { HorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import type { TabMenuHorizontalAdaptiveFillProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import { getActiveTabWidth, getTabWidthMap } from '../utils';
import { debounce } from '#src/components/common/utils/debounce';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledHorizontalTabMenuContainer = styled(HorizontalTabMenuContainer)`
  min-width: fit-content;
`;

export const TabMenuHorizontalAdaptiveFill = ({
  appearance = 'primary',
  showUnderline,
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  tabIsDisabled,
  showActiveTabSelector,
  ...props
}: TabMenuHorizontalAdaptiveFillProps) => {
  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  const selectedTab = selectedTabId || selectedTabInner;

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tabId: string) => {
    if (!tabIsDisabled(tabId)) {
      setSelectedTabInner(tabId);
      onSelectTab?.(tabId);
    }
  };

  const horizontalTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab]);

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  useLayoutEffect(() => {
    const setTabWidth = () => {
      if (containerRef.current) {
        const tabWidth = getTabWidthMap(tabsId, containerRef.current.children);
        setTabWidthMap(tabWidth);
      }
    };

    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(debounce(setTabWidth, 100));
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const getActiveTabLeft = () => {
    const index = tabsId.findIndex((tab) => tab === selectedTab);
    if (index < 0) return 0;
    let left = 0;
    for (let i = 0; i < index; i++) {
      const tabWidth = tabWidthMap.find((tab) => tab.tabId === tabsId[i])?.width || 0;
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
    if (!showActiveTabSelector) return;

    styleUnderline();
  }, [selectedTab, horizontalTabs, tabWidthMap]);
  //</editor-fold>

  return (
    <Wrapper {...props}>
      <StyledHorizontalTabMenuContainer
        ref={containerRef}
        $showUnderline={showUnderline}
        $showActiveTabSelector={showActiveTabSelector}
      >
        {horizontalTabs}
      </StyledHorizontalTabMenuContainer>
      {showActiveTabSelector && (
        <ActiveHorizontalTabSelector
          $appearance={appearance}
          $left={`${underlineLeft}px`}
          $width={`${underlineWidth}px`}
          $transition={true}
        />
      )}
    </Wrapper>
  );
};
TabMenuHorizontalAdaptiveFill.displayName = 'TabMenuHorizontalAdaptiveFill';
