import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, MenuModelItemProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { MenuItem, checkOverflow } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import type { HorizontalTabProps, TabProps } from '#src/components/TabMenuComponent/types';
import { HorizontalTab } from '#src/components/TabMenuComponent/tabs/HorizontalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { TabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { HorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers/HorizontalTabMenuContainer';
import { TabOverflowMenu } from '#src/components/TabMenuComponent/containers/TabOverflowMenu';
import {
  OVERFLOW_MENU_CONTAINER_SIZE_L,
  OVERFLOW_MENU_CONTAINER_SIZE_M,
} from '#src/components/TabMenuComponent/constants';
import { TabText } from '#src/components/TabMenuComponent/tabs/TabText';

interface TabContentProps extends TabProps {
  text: string;
}

type TabWidthMapProps = {
  tabId: string;
  width: number;
};

interface CustomHorizontalTabProps extends TabContentProps, HorizontalTabProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, text, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab {...props} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        <TabIcon $dimension={dimension} $disabled={disabled}>
          <MinusCircleOutline />
        </TabIcon>
        <TabText>{text}</TabText>
        <TabBadge disabled={disabled} selected={selected}>
          5
        </TabBadge>
      </HorizontalTab>
    );
  },
);

const tabs = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4' },
  { text: 'Text55555', tabId: '5', disabled: true },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8' },
  { text: 'Text99', tabId: '9' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HiddenContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;
const VisibleContainer = styled(HorizontalTabMenuContainer)`
  position: absolute;
  top: 0;
  left: 0;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const HorizontalTabMenuWithOverflowTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const dimension = 'l';
  //<editor-fold desc="Управление шириной контейнера">
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (visibleContainerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setContainerWidth(entry.contentRect.width || 0));
      });
      resizeObserver.observe(visibleContainerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
  //</editor-fold>

  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTabL, setActiveTabL] = useState<string | undefined>('3');
  const handleTabLClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabL(e.currentTarget.dataset.tabid);
  };
  const renderVisibleTab = (text: string, tabId: string, disabled?: boolean) => {
    return (
      <CustomHorizontalTab
        data-tabid={tabId}
        text={text}
        key={tabId}
        selected={tabId === activeTabL}
        disabled={disabled}
        onClick={handleTabLClick}
      />
    );
  };

  const horizontalTabsL = tabs.map((tab) => {
    return renderVisibleTab(tab.text, `${tab.tabId}-hidden`, tab.disabled);
  });

  const visibleContainerRef = useRef<HTMLDivElement>(null);
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  const [overflowL, setOverflowL] = useState(false);
  const [tabWidthMap, setTabWidthMap] = useState<Array<TabWidthMapProps>>([]);
  useEffect(() => {
    const tabWidth: TabWidthMapProps[] = [];
    if (hiddenContainerRef.current) {
      const overflow = checkOverflow(hiddenContainerRef.current);
      if (overflow !== overflowL) setOverflowL(overflow);
      const renderedTabs = hiddenContainerRef.current.children;
      for (let i = 0; i < renderedTabs.length; i++) {
        const tab = renderedTabs[i];
        const width = tab.getBoundingClientRect().width;
        tabWidth.push({ tabId: tabs[i].tabId, width: width });
      }
    }
    setTabWidthMap(tabWidth);
  }, [hiddenContainerRef, containerWidth]);

  const [visibleTabs, setVisibleTabs] = useState<string[]>([]);
  const [hiddenTabs, setHiddenTabs] = useState<string[]>([]);
  useEffect(() => {
    const newVisibleTabs: string[] = [];
    const newHiddenTabs: string[] = [];
    if (visibleContainerRef.current && tabWidthMap.length > 0) {
      const maxWidth = containerWidth;
      const addToVisible = (tabId: string) => newVisibleTabs.push(tabId);
      const addToHidden = (tabId: string) => newHiddenTabs.push(tabId);

      const activeTabWidth = tabWidthMap.find((tab) => tab.tabId === activeTabL)?.width;
      let availableWidth = overflowL
        ? maxWidth -
          (dimension === 'l' ? OVERFLOW_MENU_CONTAINER_SIZE_L : OVERFLOW_MENU_CONTAINER_SIZE_M) -
          (activeTabWidth || 0)
        : maxWidth;
      tabs.forEach((tab, index) => {
        const tabIsActive = tab.tabId === activeTabL;
        const tabWidth = tabWidthMap[index].width;

        if (availableWidth >= tabWidth || tabIsActive) {
          addToVisible(tab.tabId);
        }
        if (availableWidth === 0 || (availableWidth < tabWidth && !tabIsActive)) {
          addToHidden(tab.tabId);
        }
        if (availableWidth > 0) {
          if (!tabIsActive) {
            if (availableWidth >= tabWidth) {
              availableWidth -= tabWidth;
            } else {
              availableWidth = 0;
            }
          }
        }
      });
    }
    setVisibleTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
  }, [visibleContainerRef, containerWidth, tabWidthMap, overflowL, activeTabL]);
  const renderedVisibleTabs = useMemo(() => {
    if (visibleTabs.length === 0) return [];
    return visibleTabs.map((tabId) => {
      const currentTab = tabs.findIndex((tab) => tab.tabId === tabId);
      return renderVisibleTab(tabs[currentTab].text, tabId, tabs[currentTab].disabled);
    });
  }, [visibleTabs, dimension]);
  const overflowMenuItems: MenuModelItemProps[] = useMemo(() => {
    if (hiddenTabs.length === 0) return [];
    return hiddenTabs.map((tabId) => {
      const currentTab = tabs.findIndex((tab) => tab.tabId === tabId);
      return {
        id: tabId,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={dimension} {...options} key={tabId}>
            <MenuItemWrapper>{tabs[currentTab].text}</MenuItemWrapper>
          </MenuItem>
        ),
        disabled: tabs[currentTab].disabled,
      };
    });
  }, [hiddenTabs, dimension]);
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineLeftL, setUnderlineLeftL] = useState(0);
  const [underlineWidthL, setUnderlineWidthL] = useState(0);
  const [underlineTransitionL, setUnderlineTransitionL] = useState(false);
  const getActiveTabWidth = () => {
    return tabWidthMap.find((tab) => tab.tabId === activeTabL)?.width || 0;
  };
  const getActiveTabLeft = () => {
    const index = visibleTabs.findIndex((tab) => tab === activeTabL);
    if (index < 0) return 0;
    let left = 0;
    for (let i = 0; i < index; i++) {
      const tabWidth = tabWidthMap.find((tab) => tab.tabId === visibleTabs[i])?.width || 0;
      left += tabWidth;
    }
    return left;
  };
  const getUnderlinePosition = () => {
    const width = getActiveTabWidth();
    const left = getActiveTabLeft();
    return { left: left, width: width };
  };
  const styleUnderlineL = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition();
    setUnderlineTransitionL(enableTransition);
    setUnderlineWidthL(width);
    setUnderlineLeftL(left);
  };
  useEffect(() => {
    styleUnderlineL(true);
  }, [activeTabL, renderedVisibleTabs]);
  //</editor-fold>

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <div style={{ position: 'relative', height: '70px' }}>
          <HiddenContainer ref={hiddenContainerRef}>{horizontalTabsL}</HiddenContainer>
          <VisibleContainer ref={visibleContainerRef} $underline>
            {renderedVisibleTabs}
            <TabOverflowMenu
              items={overflowMenuItems}
              isHidden={!overflowL}
              onSelectItem={(tabId) => setActiveTabL(tabId)}
              selected={activeTabL}
              dimension={dimension}
            />
            <ActiveHorizontalTabUnderline
              $left={`${underlineLeftL}px`}
              $width={`${underlineWidthL}px`}
              $transition={underlineTransitionL}
            />
          </VisibleContainer>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};
