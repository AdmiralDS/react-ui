import { useEffect, useMemo, useRef, useState } from 'react';

import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import { MobileHorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers/MobileHorizontalTabMenuContainer';
import type { TabMenuHorizontalMobileProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import { getUnderlinePosition } from '#src/components/TabMenuComponent/utils';

export const TabMenuHorizontalMobile = ({
  showUnderline,
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  tabIsDisabled,
  ...props
}: TabMenuHorizontalMobileProps) => {
  //<editor-fold desc="Создание табов для отрисовки">
  const containerRef = useRef<HTMLDivElement>(null);

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
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab]);

  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  useEffect(() => {
    const tabWidth: TabWidthMapProps[] = [];
    if (containerRef.current) {
      const renderedTabs = containerRef.current.children;
      for (let i = 0; i < renderedTabs.length; i++) {
        const tab = renderedTabs[i];
        const width = tab.getBoundingClientRect().width;
        tabWidth.push({ tabId: tabsId[i], width: width });
      }
      setTabWidthMap(tabWidth);
    }
  }, [containerRef, horizontalTabs]);
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const styleUnderline = () => {
    const { left, width } = getUnderlinePosition(tabWidthMap, selectedTabId);
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  };

  useEffect(() => {
    styleUnderline();
  }, [selectedTab, tabWidthMap]);
  //</editor-fold>

  return (
    <MobileHorizontalTabMenuContainer {...props} ref={containerRef} $showUnderline={showUnderline}>
      {horizontalTabs}
      <ActiveHorizontalTabUnderline $left={`${underlineLeft}px`} $width={`${underlineWidth}px`} $transition={true} />
    </MobileHorizontalTabMenuContainer>
  );
};
TabMenuHorizontalMobile.displayName = 'TabMenuHorizontalMobile';
