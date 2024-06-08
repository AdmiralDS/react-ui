import { createRef, forwardRef, useLayoutEffect, useRef, useState } from 'react';
import type { MouseEventHandler, RefObject } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

import {
  IconTabMenuScrollingContainer,
  IconTabMenuScrollingContainerWrapper,
  IconTabMenuWrapper,
} from '#src/components/TabMenuComponent/containers/IconTabMenuContainer';
import { ActiveTabUnderline } from '#src/components/TabMenuComponent/containers/ActiveTabUnderline';
import type { TabProps } from '#src/components/TabMenuComponent/types';
import { IconTab } from '#src/components/TabMenuComponent/tabs/IconTab';
import { SlideArrowButton } from '#src/components/TabMenuComponent/containers/SlideArrowButton';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

type TabWithRefProps = TabContentProps & { ref: RefObject<HTMLButtonElement> };

const CustomIconTab = forwardRef<HTMLButtonElement, TabContentProps>(({ text, id, ...props }: TabContentProps, ref) => {
  return (
    <IconTab {...props} id={id} ref={ref}>
      <MinusCircleOutline />
      <div>{text}</div>
    </IconTab>
  );
});

const StyledSlideArrow = styled(SlideArrowButton)<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 18px;
  ${(p) => (p.$direction === 'left' ? 'left: 0' : 'right: 0')};
`;

const tabs = [
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '2' },
  { text: 'Text333', id: '3' },
  { text: 'Text4444', id: '4' },
  { text: 'Text55555', id: '5' },
  { text: 'Text66666', id: '6' },
  { text: 'Text7777', id: '7' },
  { text: 'Text888', id: '8' },
  { text: 'Text99', id: '9' },
];

const Wrapper = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const getUnderlinePosition = (element?: HTMLButtonElement | null | undefined) => {
  if (!element) return { left: 0, width: 0 };
  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement?.getBoundingClientRect();
  return { left: rect.left - (parentRect ? parentRect.left : 0), width: rect.width };
};

export const IconTabMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Создание табов для отрисовки">
  const [activeTab, setActiveTab] = useState<string | undefined>('3');
  const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTab(e.currentTarget.id);
  };

  const tabsWithRef: Array<TabWithRefProps> = tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  const iconTabs = tabs.map((tab, index) => {
    return (
      <CustomIconTab
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTab}
        onClick={handleTabClick}
        ref={tabsWithRef[index].ref}
      />
    );
  });
  //</editor-fold>

  //<editor-fold desc="Параметры для корректной отрисовки TabActiveUnderline">
  const styleUnderline = (enableTransition: boolean) => {
    const { left, width } = getUnderlinePosition(tabsWithRef.find((tab) => tab.id === activeTab)?.ref.current);
    setUnderlineTransition(enableTransition);
    setUnderlineWidth(width);
    setUnderlineLeft(left);
  };
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineTransition, setUnderlineTransition] = useState(false);
  useLayoutEffect(() => {
    if (underlineWidth === 0) {
      setTimeout(() => {
        styleUnderline(false);
      }, 300);
    } else {
      styleUnderline(true);
    }
  }, [activeTab]);
  //</editor-fold>

  //<editor-fold desc="Отображение и обработка кнопок прокурутки">
  const scrollingContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollingContainerLeft, setScrollingContainerLeft] = useState(0);
  const [scrolledToRight, setScrolledToRight] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const step = 160;

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
    setScrollingContainerLeft((prev) => (prev - step < 0 ? 0 : prev - step));
  };
  const handleRightClick = () => {
    if (!scrollingContainerRef.current) return;
    const parent = scrollingContainerRef.current.parentElement as HTMLDivElement;

    const newValue = scrollingContainerLeft + step;
    const maxValue = scrollingContainerRef.current.scrollWidth - parent.clientWidth;
    const resValue = newValue > maxValue ? maxValue : newValue;

    if (resValue === maxValue) setScrolledToRight(true);
    setScrollingContainerLeft(newValue > maxValue ? maxValue : newValue);
  };
  //</editor-fold

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <IconTabMenuWrapper>
          <IconTabMenuScrollingContainerWrapper>
            <IconTabMenuScrollingContainer
              $underline
              ref={scrollingContainerRef}
              $leftValue={scrolledToRight ? `${scrollingContainerLeft}px` : 0}
              $floatValue={scrolledToRight ? 'inline-end' : 'inline-start'}
              $translateXValue={`${-scrollingContainerLeft}px`}
            >
              {iconTabs}
              <ActiveTabUnderline
                $left={`${underlineLeft}px`}
                $width={`${underlineWidth}px`}
                $transition={underlineTransition}
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
      </Wrapper>
    </ThemeProvider>
  );
};
