import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import {
  IconTabMenuScrollingContainer,
  IconTabMenuScrollingContainerWrapper,
  IconTabMenuWrapper,
} from '#src/components/TabMenuComponent/containers/IconTabMenuContainer';
import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import { SlideArrowButton } from '#src/components/TabMenuComponent/containers/SlideArrowButton';
import type { TabMenuBaseProps } from '#src/components/TabMenuComponent/types';

import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

type TabWidthMapProps = {
  tabId: string;
  width: number;
};

export interface TabMenuIconProps extends TabMenuBaseProps {
  /** Шаг прокрутки при нажатии кнопок вправо/влево */
  scrollStep?: number;
}

const StyledSlideArrow = styled(SlideArrowButton)<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 18px;
  ${(p) => (p.$direction === 'left' ? 'left: 0' : 'right: 0')};
`;

export const TabMenuIcon = ({
  showUnderline,
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  tabIsDisabled,
  scrollStep = 160,
  ...props
}: TabMenuIconProps) => {
  //<editor-fold desc="Отображение и обработка кнопок прокурутки">
  const scrollingContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollingContainerLeft, setScrollingContainerLeft] = useState(0);
  const [scrolledToRight, setScrolledToRight] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useLayoutEffect(() => {
    if (!scrollingContainerRef.current) return;

    const parent = scrollingContainerRef.current.parentElement as HTMLDivElement;

    setPrevDisabled(scrollingContainerLeft === 0);
    const newNextDisabled = scrollingContainerLeft + parent.clientWidth >= scrollingContainerRef.current.scrollWidth;
    setNextDisabled(newNextDisabled);
    setScrolledToRight(newNextDisabled);
  });

  const handleLeftClick = () => {
    if (scrolledToRight) setScrolledToRight(false);
    setScrollingContainerLeft((prev) => (prev - scrollStep < 0 ? 0 : prev - scrollStep));
  };
  const handleRightClick = () => {
    if (!scrollingContainerRef.current) return;
    const parent = scrollingContainerRef.current.parentElement as HTMLDivElement;

    const newValue = scrollingContainerLeft + scrollStep;
    const maxValue = scrollingContainerRef.current.scrollWidth - parent.clientWidth;
    const resValue = newValue > maxValue ? maxValue : newValue;

    if (resValue === maxValue) setScrolledToRight(true);
    setScrollingContainerLeft(newValue > maxValue ? maxValue : newValue);
  };
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

  const iconTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab]);

  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);

  useEffect(() => {
    const tabWidth: TabWidthMapProps[] = [];
    if (scrollingContainerRef.current) {
      const renderedTabs = scrollingContainerRef.current.children;
      for (let i = 0; i < renderedTabs.length; i++) {
        const tab = renderedTabs[i];
        const width = tab.getBoundingClientRect().width;
        tabWidth.push({ tabId: tabsId[i], width: width });
      }
      setTabWidthMap(tabWidth);
    }
  }, [scrollingContainerRef, iconTabs]);
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
    <IconTabMenuWrapper {...props}>
      <IconTabMenuScrollingContainerWrapper>
        <IconTabMenuScrollingContainer
          $showUnderline={showUnderline}
          ref={scrollingContainerRef}
          $leftValue={scrolledToRight ? `${scrollingContainerLeft}px` : 0}
          $floatValue={scrolledToRight ? 'inline-end' : 'inline-start'}
          $translateXValue={`${-scrollingContainerLeft}px`}
        >
          {iconTabs}
          <ActiveHorizontalTabUnderline
            $left={`${underlineLeft}px`}
            $width={`${underlineWidth}px`}
            $transition={true}
          />
        </IconTabMenuScrollingContainer>
      </IconTabMenuScrollingContainerWrapper>
      {!prevDisabled && (
        <StyledSlideArrow $direction="left" onClick={handleLeftClick}>
          <ArrowLeftOutline />
        </StyledSlideArrow>
      )}
      {!nextDisabled && (
        <StyledSlideArrow $direction="right" onClick={handleRightClick}>
          <ArrowRightOutline />
        </StyledSlideArrow>
      )}
    </IconTabMenuWrapper>
  );
};
TabMenuIcon.displayName = 'TabMenuIcon';
