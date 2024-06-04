import type { MouseEventHandler, RefObject } from 'react';
import { createRef, forwardRef, useLayoutEffect, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { TabIcon } from '#src/components/TabMenuComponent/TabIcon';
import { TabMenuIconContainer } from '#src/components/TabMenuComponent/TabMenuIconContainer';
import { TabActiveUnderline } from '#src/components/TabMenuComponent/TabActiveUnderline';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import type { TabProps } from '#src/components/TabMenuComponent/types';
import { SlideArrow } from '#src/components/TabMenuComponent/SlideArrow';

import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

type TabWithRefProps = TabContentProps & { ref: RefObject<HTMLButtonElement> };

const CustomTab = forwardRef<HTMLButtonElement, TabContentProps>(({ text, id, ...props }: TabContentProps, ref) => {
  return (
    <TabIcon {...props} id={id} ref={ref}>
      <MinusCircleOutline />
      <div>{text}</div>
    </TabIcon>
  );
});

const tabs = [
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '22' },
  { text: 'Text333', id: '333' },
  { text: 'Text4444', id: '4444' },
  { text: 'Text55555', id: '55555' },
  { text: 'Text666666', id: '666666' },
];

const Wrapper = styled.div`
  width: 100%;
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

export const TabMenuComponentBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [activeTab, setActiveTab] = useState<string | undefined>('333');
  const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setActiveTab(e.currentTarget.id);
  };

  const tabsWithRef: Array<TabWithRefProps> = useMemo(() => {
    return tabs.map((tab) => ({ ...tab, ref: createRef<HTMLButtonElement>() }));
  }, [tabs]);
  const iconTabs = tabs.map((tab, index) => {
    return (
      <CustomTab
        text={tab.text}
        id={tab.id}
        key={tab.id}
        selected={tab.id === activeTab}
        onClick={handleTabClick}
        ref={tabsWithRef[index].ref}
      />
    );
  });

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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabMenuIconContainer $underline>
          {iconTabs}
          <TabActiveUnderline
            $left={`${underlineLeft}px`}
            $width={`${underlineWidth}px`}
            $transition={underlineTransition}
          />
        </TabMenuIconContainer>
        <SlideArrow>
          <ArrowLeftOutline />
        </SlideArrow>
        <SlideArrow>
          <ArrowRightOutline />
        </SlideArrow>
      </Wrapper>
    </ThemeProvider>
  );
};
