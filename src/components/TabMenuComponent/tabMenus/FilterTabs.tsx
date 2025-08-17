import { useEffect, useMemo, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { HorizontalTabsContainer } from '../containers';
import type { FilterTabsProps } from '../types';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { IconButton } from '#src/components/IconButton';
import { FILTER_TAB_SIZE_M, FILTER_TAB_SIZE_S } from '../constants';

const FilterTabsContainer = styled(HorizontalTabsContainer)`
  gap: 4px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const buttonContainerCommon = css`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

const LeftButtonContainer = styled.div`
  ${buttonContainerCommon};
  left: 0;
  padding-right: 4px;
`;

const RightButtonContainer = styled.div`
  ${buttonContainerCommon};
  right: 0;
  padding-left: 4px;
`;

export const FilterTabs = ({
  dimension = 'm',
  selectedTabId,
  defaultSelectedTabId,
  onSelectTab,
  tabsId,
  renderTab,
  tabIsDisabled,
  mobile = false,
  ...props
}: FilterTabsProps) => {
  const [visibleLeftButton, setVisibleLeftButton] = useState(false);
  const [visibleRightButton, setVisibleRightButton] = useState(false);
  const [drag, setDrag] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);
  const containerElementRef = useRef<HTMLDivElement>(null);
  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);

  const buttonSize = dimension === 'm' ? FILTER_TAB_SIZE_M : FILTER_TAB_SIZE_S;
  const selectedTab = selectedTabId || selectedTabInner;

  const handleSelectTab = (tabId: string) => {
    if (!tabIsDisabled(tabId)) {
      setSelectedTabInner(tabId);
      onSelectTab?.(tabId);

      const container = containerElementRef.current;
      if (!container) return;

      const currentTabIndex = tabsId.findIndex((tab) => tab === tabId);
      const currentSelectedTab = (
        currentTabIndex >= 0 ? container.children[currentTabIndex] : null
      ) as HTMLElement | null;

      if (!currentSelectedTab) return;

      if (mobile) {
        currentSelectedTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        const fullButtonWidth = buttonSize + 4;
        const tabScrollToLeft = currentSelectedTab.offsetLeft - fullButtonWidth;
        const tabScrollToRight =
          currentSelectedTab.offsetLeft + currentSelectedTab.clientWidth + fullButtonWidth - container.clientWidth;

        if (container.scrollLeft > tabScrollToLeft) {
          container.scrollTo({ left: tabScrollToLeft, behavior: 'smooth' });
        }
        if (tabScrollToRight > container.scrollLeft) {
          container.scrollTo({
            left: tabScrollToRight,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  const filterTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab, selectedTab]);

  const handleScroll = (right: boolean) => {
    const container = containerElementRef.current;
    if (!container) return;

    const scrollWidth = right
      ? container.scrollLeft - container.clientWidth / 3
      : container.scrollLeft + container.clientWidth / 3;
    container.scrollTo({
      left: scrollWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerElementRef.current;
    if (!container || mobile) return;

    const scrollSetVisible = () => {
      const visibleLeft = container.scrollLeft > 10;
      const visibleRight = container.clientWidth + container.scrollLeft + 10 < container.scrollWidth;

      setVisibleLeftButton(visibleLeft);
      setVisibleRightButton(visibleRight);
    };
    scrollSetVisible();

    container.addEventListener('scroll', scrollSetVisible);
    return () => {
      container.removeEventListener('scroll', scrollSetVisible);
    };
  }, [mobile]);

  useEffect(() => {
    const container = containerElementRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      let modifier = 0;

      if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        modifier = 1;
      } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        modifier = parseInt(getComputedStyle(container).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        modifier = container.clientHeight;
      }
      if (event.deltaY != 0) {
        container.scrollLeft += modifier * event.deltaY;
      }
      if (container.scrollLeft === 0 && event.deltaY < 0) return;
      if (Math.round(container.scrollLeft) >= container.scrollWidth - container.clientWidth) return;

      event.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (!drag || mobile) return;

    function captureClick(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setMouseDown(false);
      setDrag(false);
    }
    document.addEventListener('click', captureClick, true);
    return () => document.removeEventListener('click', captureClick, true);
  }, [drag, mobile]);

  useEffect(() => {
    if (!isMouseDown || mobile) return;
    const container = containerElementRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.movementX === 0) return;

      setDrag(true);
      container.scrollLeft += -e.movementX;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseDown, mobile]);

  return (
    <Wrapper>
      <FilterTabsContainer
        onMouseDown={(e) => {
          if (e.button === 0 && !mobile) setMouseDown(true);
        }}
        onMouseUp={() => setMouseDown(false)}
        {...props}
        ref={containerElementRef}
      >
        {filterTabs}
      </FilterTabsContainer>
      {!mobile && visibleLeftButton && (
        <LeftButtonContainer>
          <IconButton onClick={() => handleScroll(true)} dimension={dimension}>
            <ChevronLeftOutline />
          </IconButton>
        </LeftButtonContainer>
      )}
      {!mobile && visibleRightButton && (
        <RightButtonContainer>
          <IconButton onClick={() => handleScroll(false)} dimension={dimension}>
            <ChevronRightOutline />
          </IconButton>
        </RightButtonContainer>
      )}
    </Wrapper>
  );
};

FilterTabs.displayName = 'FilterTabs';
