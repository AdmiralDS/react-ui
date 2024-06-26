import { createRef, forwardRef, useLayoutEffect, useState } from 'react';
import type { MouseEventHandler, RefObject } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import type { HorizontalTabProps, TabProps } from '#src/components/TabMenuComponent/types';
import { HorizontalTab } from '../tabs/HorizontalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { TabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { MobileHorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers/MobileHorizontalTabMenuContainer';

interface TabContentProps extends TabProps {
  text: string;
}

interface TabWithRefProps extends TabContentProps {
  tabId: string;
  ref: RefObject<HTMLButtonElement>;
}

interface CustomHorizontalTabProps extends TabContentProps, HorizontalTabProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab {...props} ref={ref} tabId={tabId} dimension={dimension} disabled={disabled} selected={selected}>
        <TabIcon $dimension={dimension} $disabled={disabled}>
          <MinusCircleOutline />
        </TabIcon>
        {text}
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
  { text: 'Text7777', tabId: '7' },
  { text: 'Text888', tabId: '8' },
  { text: 'Text99', tabId: '9' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const getUnderlinePosition = (element?: HTMLButtonElement | null | undefined) => {
  if (!element || !element.parentElement) return { left: 0, width: 0 };
  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement.getBoundingClientRect();
  return {
    left: rect.left - (parentRect ? parentRect.left : 0) + element.parentElement.scrollLeft,
    width: rect.width,
  };
};

export const MobileHorizontalTabMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTabL, setActiveTabL] = useState<string | undefined>('3');
  const handleTabLClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabL(e.currentTarget.dataset.tabid);
  };
  const [activeTabM, setActiveTabM] = useState<string | undefined>('3');
  const handleTabMClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabM(e.currentTarget.dataset.tabid);
  };

  const tabsWithRefL: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const horizontalTabsL = tabs.map((tab, index) => {
    return (
      <CustomHorizontalTab
        tabId={tab.tabId}
        text={tab.text}
        key={tab.tabId}
        selected={tab.tabId === activeTabL}
        disabled={tab.disabled}
        onClick={handleTabLClick}
        ref={tabsWithRefL[index].ref}
      />
    );
  });
  const tabsWithRefM: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const horizontalTabsM = tabs.map((tab, index) => {
    return (
      <CustomHorizontalTab
        tabId={tab.tabId}
        dimension="m"
        text={tab.text}
        key={tab.tabId}
        selected={tab.tabId === activeTabM}
        disabled={tab.disabled}
        onClick={handleTabMClick}
        ref={tabsWithRefM[index].ref}
      />
    );
  });
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const [underlineLeftL, setUnderlineLeftL] = useState(0);
  const [underlineWidthL, setUnderlineWidthL] = useState(0);
  const [underlineTransitionL, setUnderlineTransitionL] = useState(false);
  const styleUnderlineL = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition(tabsWithRefL.find((tab) => tab.tabId === activeTabL)?.ref.current);
    setUnderlineTransitionL(enableTransition);
    setUnderlineWidthL(width);
    setUnderlineLeftL(left);
  };
  useLayoutEffect(() => {
    if (underlineWidthL === 0) {
      setTimeout(() => {
        styleUnderlineL(false);
      }, 300);
    } else {
      styleUnderlineL(true);
    }
  }, [activeTabL]);
  const [underlineLeftM, setUnderlineLeftM] = useState(0);
  const [underlineWidthM, setUnderlineWidthM] = useState(0);
  const [underlineTransitionM, setUnderlineTransitionM] = useState(false);
  const styleUnderlineM = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition(tabsWithRefM.find((tab) => tab.tabId === activeTabM)?.ref.current);
    setUnderlineTransitionM(enableTransition);
    setUnderlineWidthM(width);
    setUnderlineLeftM(left);
  };
  useLayoutEffect(() => {
    if (underlineWidthM === 0) {
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
        <MobileHorizontalTabMenuContainer $underline>
          {horizontalTabsL}
          <ActiveHorizontalTabUnderline
            $left={`${underlineLeftL}px`}
            $width={`${underlineWidthL}px`}
            $transition={underlineTransitionL}
          />
        </MobileHorizontalTabMenuContainer>
        <MobileHorizontalTabMenuContainer $underline>
          {horizontalTabsM}
          <ActiveHorizontalTabUnderline
            $left={`${underlineLeftM}px`}
            $width={`${underlineWidthM}px`}
            $transition={underlineTransitionM}
          />
        </MobileHorizontalTabMenuContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
