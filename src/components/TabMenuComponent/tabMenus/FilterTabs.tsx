import { useEffect, useMemo, useState, useRef } from 'react';
import styled from 'styled-components';
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

const LeftButtonContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-right: 4px;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

const RightButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-left: 4px;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
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
    if (!containerElementRef.current) return;

    const scrollWidth = right
      ? containerElementRef.current.scrollLeft - containerElementRef.current.clientWidth / 3
      : containerElementRef.current.scrollLeft + containerElementRef.current.clientWidth / 3;
    containerElementRef.current.scrollTo({
      left: scrollWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!containerElementRef.current || mobile) return;

    const scrollSetVisible = () => {
      const visibleLeft = containerElementRef.current!.scrollLeft > 10;
      const visibleRight =
        containerElementRef.current!.clientWidth + containerElementRef.current!.scrollLeft + 10 <
        containerElementRef.current!.scrollWidth;

      setVisibleLeftButton(visibleLeft);
      setVisibleRightButton(visibleRight);
    };
    scrollSetVisible();

    containerElementRef.current.addEventListener('scroll', scrollSetVisible);
    return () => {
      containerElementRef.current?.removeEventListener('scroll', scrollSetVisible);
    };
  }, [containerElementRef.current]);

  useEffect(() => {
    if (!containerElementRef.current) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      let modifier = 0;

      if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        modifier = 1;
      } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        modifier = parseInt(getComputedStyle(containerElementRef.current!).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        modifier = containerElementRef.current!.clientHeight;
      }
      if (event.deltaY != 0) {
        containerElementRef.current!.scrollLeft += modifier * event.deltaY;
      }
      if (containerElementRef.current!.scrollLeft === 0 && event.deltaY < 0) return;
      if (
        Math.round(containerElementRef.current!.scrollLeft) >=
        containerElementRef.current!.scrollWidth - containerElementRef.current!.clientWidth
      )
        return;

      event.preventDefault();
    };

    containerElementRef.current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      containerElementRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, [containerElementRef.current]);

  useEffect(() => {
    if (!drag || mobile) return;

    function captureClick(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setMouseDown(false);
      setDrag(false);
    }
    globalThis.document.addEventListener('click', captureClick, true);
    return () => globalThis.document.removeEventListener('click', captureClick, true);
  }, [drag]);

  useEffect(() => {
    if (!isMouseDown || !containerElementRef.current || mobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.movementX === 0) return;

      setDrag(true);
      containerElementRef.current!.scrollLeft += -e.movementX;
    };

    globalThis.document.addEventListener('mousemove', handleMouseMove);
    return () => {
      globalThis.document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseDown, containerElementRef.current]);

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
