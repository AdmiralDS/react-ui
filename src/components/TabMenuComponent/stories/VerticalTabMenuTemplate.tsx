import { createRef, forwardRef, useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import type { TabProps, VerticalTabProps } from '#src/components/TabMenuComponent/types';
import { VerticalTab } from '#src/components/TabMenuComponent//tabs/VerticalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { VerticalTabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { VerticalTabMenuContainer } from '#src/components/TabMenuComponent/containers/VerticalTabMenuContainer';
import { ActiveVerticalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveVerticalTabUnderline';
import { TabText } from '#src/components/TabMenuComponent/tabs/TabText';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends TabProps {
  text: string;
}

interface TabWithRefProps extends TabContentProps {
  tabId: string;
  ref: RefObject<HTMLButtonElement>;
}

interface CustomVerticalTabProps extends TabContentProps, VerticalTabProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  ({ dimension = 'l', disabled, selected, onSelectTab, tabId, text, ...props }: CustomVerticalTabProps, ref) => {
    return (
      <VerticalTab
        {...props}
        ref={ref}
        tabId={tabId}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        <TabIcon $dimension={dimension} $disabled={disabled}>
          <MinusCircleOutline />
        </TabIcon>
        <TabText>{text}</TabText>
        <VerticalTabBadge disabled={disabled} selected={selected}>
          5
        </VerticalTabBadge>
      </VerticalTab>
    );
  },
);

const tabs = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text22', tabId: '2' },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444 is very very very very very very very long', tabId: '4' },
  { text: 'Text55555', tabId: '5', disabled: true },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777', tabId: '7' },
  { text: 'Text888', tabId: '8' },
  { text: 'Text99', tabId: '9' },
];

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const getUnderlinePosition = (element?: HTMLButtonElement | null | undefined) => {
  if (!element) return { top: 0, height: 0 };
  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement?.getBoundingClientRect();
  return { top: rect.top - (parentRect ? parentRect.top : 0), height: rect.height };
};

export const VerticalTabMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTabL, setActiveTabL] = useState<string | undefined>('3');
  const handleSelectTabL = (tabId: string) => {
    setActiveTabL(tabId);
  };
  const [activeTabM, setActiveTabM] = useState<string | undefined>('3');
  const handleSelectTabM = (tabId: string) => {
    setActiveTabM(tabId);
  };

  const tabsWithRefL: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const verticalTabsL = tabs.map((tab, index) => {
    return (
      <CustomVerticalTab
        tabId={tab.tabId}
        text={tab.text}
        key={tab.tabId}
        selected={tab.tabId === activeTabL}
        disabled={tab.disabled}
        width={TAB_MENU_WIDTH}
        onSelectTab={handleSelectTabL}
        ref={tabsWithRefL[index].ref}
      />
    );
  });
  const tabsWithRefM: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const verticalTabsM = tabs.map((tab, index) => {
    return (
      <CustomVerticalTab
        tabId={tab.tabId}
        dimension="m"
        text={tab.text}
        key={tab.tabId}
        selected={tab.tabId === activeTabM}
        disabled={tab.disabled}
        width={TAB_MENU_WIDTH}
        onSelectTab={handleSelectTabM}
        ref={tabsWithRefM[index].ref}
      />
    );
  });
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineTopL, setUnderlineTopL] = useState(0);
  const [underlineHeightL, setUnderlineHeightL] = useState(0);
  const [underlineTransitionL, setUnderlineTransitionL] = useState(false);
  const styleUnderlineL = (enableTransition: boolean) => {
    const { top, height } = getUnderlinePosition(tabsWithRefL.find((tab) => tab.tabId === activeTabL)?.ref.current);
    setUnderlineTransitionL(enableTransition);
    setUnderlineHeightL(height);
    setUnderlineTopL(top);
  };
  useLayoutEffect(() => {
    if (underlineHeightL === 0) {
      setTimeout(() => {
        styleUnderlineL(false);
      }, 300);
    } else {
      styleUnderlineL(true);
    }
  }, [activeTabL]);
  const [underlineTopM, setUnderlineTopM] = useState(0);
  const [underlineHeightM, setUnderlineHeightM] = useState(0);
  const [underlineTransitionM, setUnderlineTransitionM] = useState(false);
  const styleUnderlineM = (enableTransition: boolean) => {
    const { top, height } = getUnderlinePosition(tabsWithRefM.find((tab) => tab.tabId === activeTabM)?.ref.current);
    setUnderlineTransitionM(enableTransition);
    setUnderlineHeightM(height);
    setUnderlineTopM(top);
  };
  useLayoutEffect(() => {
    if (underlineHeightM === 0) {
      setTimeout(() => {
        styleUnderlineM(false);
      }, 300);
    } else {
      styleUnderlineM(true);
    }
  }, [activeTabM]);
  //</editor-fold>

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <VerticalTabMenuContainer $showUnderline $underlinePosition="right">
          {verticalTabsL}
          <ActiveVerticalTabUnderline
            $top={`${underlineTopL}px`}
            $height={`${underlineHeightL}px`}
            $transition={underlineTransitionL}
            $underlinePosition="right"
          />
        </VerticalTabMenuContainer>
        <VerticalTabMenuContainer $underlinePosition="left">
          {verticalTabsM}
          <ActiveVerticalTabUnderline
            $top={`${underlineTopM}px`}
            $height={`${underlineHeightM}px`}
            $transition={underlineTransitionM}
            $underlinePosition="left"
          />
        </VerticalTabMenuContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
