import { useEffect, useMemo, useState } from 'react';
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
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(null);
  const [selectedTabInner, setSelectedTabInner] = useState<string | undefined>(defaultSelectedTabId);

  const buttonSize = dimension === 'm' ? FILTER_TAB_SIZE_M : FILTER_TAB_SIZE_S;
  const selectedTab = selectedTabId || selectedTabInner;

  const handleSelectTab = (tabId: string) => {
    if (!tabIsDisabled(tabId)) {
      setSelectedTabInner(tabId);
      onSelectTab?.(tabId);

      const elem = document.querySelector(`[data-tabid="${tabId}"]`) as HTMLElement;

      if (containerElement && elem) {
        if (mobile) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          const fullButtonWidth = buttonSize + 4;
          const tabScrollToLeft = elem.offsetLeft - fullButtonWidth;
          const tabScrollToRight = elem.offsetLeft + elem.clientWidth + fullButtonWidth - containerElement.clientWidth;

          if (containerElement.scrollLeft > tabScrollToLeft) {
            containerElement.scrollTo({ left: tabScrollToLeft, behavior: 'smooth' });
          }
          if (tabScrollToRight > containerElement.scrollLeft) {
            containerElement.scrollTo({
              left: tabScrollToRight,
              behavior: 'smooth',
            });
          }
        }
      }
    }
  };

  //<editor-fold desc="Создание табов для отрисовки">
  const filterTabs = useMemo(() => {
    return tabsId.map((tabId) => {
      return renderTab(tabId, tabId === selectedTab, handleSelectTab);
    });
  }, [tabsId, renderTab, containerElement]);

  const handleScroll = (right: boolean) => {
    if (!containerElement) return;

    const scrollWidth = right
      ? containerElement.scrollLeft - containerElement.clientWidth / 3
      : containerElement.scrollLeft + containerElement.clientWidth / 3;
    containerElement.scrollTo({
      left: scrollWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!containerElement || mobile) return;

    const scrollSetVisible = () => {
      const visibleLeft = containerElement.scrollLeft > 10;
      const visibleRight =
        containerElement.clientWidth + containerElement.scrollLeft + 10 < containerElement.scrollWidth;

      setVisibleLeftButton(visibleLeft);
      setVisibleRightButton(visibleRight);
    };
    scrollSetVisible();

    containerElement.addEventListener('scroll', scrollSetVisible);
    return () => {
      containerElement.removeEventListener('scroll', scrollSetVisible);
    };
  }, [containerElement]);

  useEffect(() => {
    if (!containerElement) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      let modifier = 0;

      if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        modifier = 1;
      } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        modifier = parseInt(getComputedStyle(containerElement).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        modifier = containerElement.clientHeight;
      }
      if (event.deltaY != 0) {
        // замена вертикальной прокрутки горизонтальной
        containerElement.scrollLeft += modifier * event.deltaY;
      }
      if (containerElement.scrollLeft === 0 && event.deltaY < 0) return;
      if (Math.round(containerElement.scrollLeft) >= containerElement.scrollWidth - containerElement.clientWidth)
        return;

      event.preventDefault();
    };

    containerElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      containerElement.removeEventListener('wheel', handleWheel);
    };
  }, [containerElement]);

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
    if (!isMouseDown || !containerElement || mobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.movementX === 0) return;

      setDrag(true);
      containerElement.scrollLeft += -e.movementX;
    };

    globalThis.document.addEventListener('mousemove', handleMouseMove);
    return () => {
      globalThis.document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseDown, containerElement]);

  return (
    <Wrapper>
      <FilterTabsContainer
        onMouseDown={(e) => {
          if (e.button === 0 && !mobile) setMouseDown(true);
        }}
        onMouseUp={() => setMouseDown(false)}
        {...props}
        ref={(node) => setContainerElement(node)}
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
