import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { ActiveHorizontalTabSelector } from '#src/components/TabMenuComponent/containerElements';

import { HorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers';
import type { TabMenuHorizontalAdaptiveFillProps } from '#src/components/TabMenuComponent/types';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
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
  const [underlineLeft, setUnderlineLeft] = useState('');
  const [underlineWidth, setUnderlineWidth] = useState('');
  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);

  const selectedTab = selectedTabId || selectedTabInner;

  const hiddenContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!showActiveTabSelector) return;

    const length = tabsId.length;
    const indexSelectedTab = tabsId.findIndex((tab) => tab === selectedTab);

    const width = selectedTab ? `calc(100% / ${length})` : '0';
    const left = indexSelectedTab < 0 ? '0' : `calc(100% / ${length} * ${indexSelectedTab})`;
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  }, [selectedTab, horizontalTabs, showActiveTabSelector]);
  //</editor-fold>

  return (
    <Wrapper {...props}>
      <HorizontalTabMenuContainer
        ref={hiddenContainerRef}
        $showUnderline={showUnderline}
        $showActiveTabSelector={showActiveTabSelector}
      >
        {horizontalTabs}
      </HorizontalTabMenuContainer>
      {showActiveTabSelector && (
        <ActiveHorizontalTabSelector
          $appearance={appearance}
          $left={underlineLeft}
          $width={underlineWidth}
          $transition={true}
        />
      )}
    </Wrapper>
  );
};
TabMenuHorizontalAdaptiveFill.displayName = 'TabMenuHorizontalAdaptiveFill';
