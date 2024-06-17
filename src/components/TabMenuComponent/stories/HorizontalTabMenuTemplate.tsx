import { createRef, forwardRef, useLayoutEffect, useRef, useState } from 'react';
import type { MouseEventHandler, RefObject } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import { ActiveHorizontalTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveHorizontalTabUnderline';
import type { HorizontalTabProps, TabProps } from '#src/components/TabMenuComponent/types';
import { HorizontalTab } from '#src/components/TabMenuComponent/tabs/HorizontalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { TabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { HorizontalTabMenuContainer } from '#src/components/TabMenuComponent/containers/HorizontalTabMenuContainer';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

type TabWithRefProps = TabContentProps & { ref: RefObject<HTMLButtonElement> };

interface CustomHorizontalTabProps extends TabContentProps, HorizontalTabProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, text, id, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <HorizontalTab {...props} id={id} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
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
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '2' },
  { text: 'Text333', id: '3', disabled: true },
  { text: 'Text4444', id: '4' },
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

export const HorizontalTabMenuTemplate = ({
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
    setActiveTabL(e.currentTarget.id);
  };
  const [activeTabM, setActiveTabM] = useState<string | undefined>('3');
  const handleTabMClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTabM(e.currentTarget.id);
  };

  const tabsWithRefL: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const horizontalTabsL = tabs.map((tab, index) => {
    return (
      <CustomHorizontalTab
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTabL}
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
        dimension="m"
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTabM}
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
    const { left, width } = getUnderlinePosition(tabsWithRefL.find((tab) => tab.id === activeTabL)?.ref.current);
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
    const { left, width } = getUnderlinePosition(tabsWithRefM.find((tab) => tab.id === activeTabM)?.ref.current);
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <HorizontalTabMenuContainer ref={containerRef} $underline>
          {horizontalTabsL}
          <ActiveHorizontalTabUnderline
            $left={`${underlineLeftL}px`}
            $width={`${underlineWidthL}px`}
            $transition={underlineTransitionL}
          />
        </HorizontalTabMenuContainer>
        <HorizontalTabMenuContainer $underline>
          {horizontalTabsM}
          <ActiveHorizontalTabUnderline
            $left={`${underlineLeftM}px`}
            $width={`${underlineWidthM}px`}
            $transition={underlineTransitionM}
          />
        </HorizontalTabMenuContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
