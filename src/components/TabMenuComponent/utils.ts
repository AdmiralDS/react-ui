import type { TabWidthMapProps } from '#src/components/TabMenuComponent/types';

export const getActiveTabWidth = (tabWidthMap: TabWidthMapProps[], selectedTabId: string) => {
  return tabWidthMap.find((tab) => tab.tabId === selectedTabId)?.width || 0;
};

export const getActiveTabLeft = (tabWidthMap: TabWidthMapProps[], selectedTabId: string) => {
  let left = 0;
  let i = 0;

  while (tabWidthMap[i].tabId !== selectedTabId && i < tabWidthMap.length) {
    left += tabWidthMap[i].width;
    i++;
  }

  return left;
};

export const getUnderlinePosition = (tabWidthMap?: TabWidthMapProps[], selectedTabId?: string) => {
  if (!selectedTabId || !tabWidthMap || tabWidthMap.length === 0) return { left: 0, width: 0 };
  const width = getActiveTabWidth(tabWidthMap, selectedTabId);
  const left = getActiveTabLeft(tabWidthMap, selectedTabId);
  return { left: left, width: width };
};

export const getTabWidthMap = (tabsId: string[], renderedTabs?: HTMLCollection) => {
  const tabWidth: TabWidthMapProps[] = [];
  if (renderedTabs) {
    for (let i = 0; i < renderedTabs.length; i++) {
      const tab = renderedTabs[i];
      const width = tab.getBoundingClientRect().width;
      tabWidth.push({ tabId: tabsId[i], width: width });
    }
  }
  return tabWidth;
};
