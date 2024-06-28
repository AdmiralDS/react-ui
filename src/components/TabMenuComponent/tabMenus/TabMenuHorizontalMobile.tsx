import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import { MobileHorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers/MobileHorizontalTabMenuContainer';

type TabWidthMapProps = {
  tabId: string;
  width: number;
};

export interface TabMenuHorizontalMobileProps {
  /** Показывать серую полосу снизу */
  showUnderline?: boolean;
  /** ID выбранной вкладки */
  selectedTabId?: string;
  /** ID выбранной по умолчанию вкладки */
  defaultSelectedTabId?: string;
  /** Коллбэк на изменение выбранной вкладки */
  onSelectTab?: (tabId: string) => void;
  /** Массив из уникальных ID вкладок */
  tabsId: string[];
  /** Рендер-функция для отрисовки вкладки */
  renderTab: (tabId: string, selected: boolean, onSelectTab?: (tabId: string) => void) => ReactNode;
  /** Коллбэк для определения, является ли вкладка disabled */
  tabIsDisabled: (tabId: string) => boolean;
}

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

  const getActiveTabWidth = () => {
    return tabWidthMap.find((tab) => tab.tabId === selectedTab)?.width || 0;
  };

  const getActiveTabLeft = () => {
    if (!selectedTab || tabWidthMap.length === 0) return 0;

    let left = 0;
    let i = 0;

    while (tabWidthMap[i].tabId !== selectedTabId && i < tabWidthMap.length) {
      left += tabWidthMap[i].width;
      i++;
    }

    return left;
  };

  const getUnderlinePosition = () => {
    const width = getActiveTabWidth();
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
