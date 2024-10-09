import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { debounce } from '#src/components/common/utils/debounce';

import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

import {
  IconTabMenuScrollingContainer,
  IconTabMenuScrollingContainerWrapper,
  IconTabMenuWrapper,
} from '#src/components/TabMenuComponent/containers';
import { ActiveHorizontalTabSelector, SlideArrowButton } from '#src/components/TabMenuComponent/containerElements';
import type { TabMenuIconProps, TabWidthMapProps } from '#src/components/TabMenuComponent/types';
import { getTabWidthMap, getUnderlinePosition } from '#src/components/TabMenuComponent/utils';

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
    function setTabWidth() {
      if (scrollingContainerRef.current) {
        const tabWidth = getTabWidthMap(tabsId, scrollingContainerRef.current.children);
        setTabWidthMap(tabWidth);
      }
    }
    if (scrollingContainerRef.current?.firstElementChild) {
      const resizeObserver = new ResizeObserver(debounce(setTabWidth, 100));
      resizeObserver.observe(scrollingContainerRef.current?.firstElementChild);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [scrollingContainerRef, iconTabs]);
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
          <ActiveHorizontalTabSelector $left={`${underlineLeft}px`} $width={`${underlineWidth}px`} $transition={true} />
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
