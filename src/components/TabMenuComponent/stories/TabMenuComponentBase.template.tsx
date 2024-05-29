import type { MouseEventHandler } from 'react';
import { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { TabIcon } from '#src/components/TabMenuComponent/TabIcon';
import { TabMenuIconContainer } from '#src/components/TabMenuComponent/TabMenuIconContainer';
import { TabActiveUnderline } from '#src/components/TabMenuComponent/TabActiveUnderline';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import type { TabProps } from '#src/components/TabMenuComponent/types';

interface TabContentProps extends TabProps {
  text: string;
  id?: string;
}

const TabContent = ({ text }: TabContentProps) => {
  return (
    <>
      <MinusCircleOutline />
      <div>{text}</div>
    </>
  );
};

const CustomTab = ({ text, id, ...props }: TabContentProps) => {
  return (
    <TabIcon id={id} {...props}>
      <MinusCircleOutline />
      <div>{text}</div>
    </TabIcon>
  );
};

const tabs = [
  { text: 'Text1', id: '1' },
  { text: 'Text22', id: '22' },
  { text: 'Text333', id: '333' },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 10px;
`;

export const TabMenuComponentBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
    console.log(rect);
    setUnderlineWidth(rect.width);
    setUnderlineLeft(rect.left - (parentRect ? parentRect.left : 0));
  };

  const iconTabs = tabs.map((tab) => {
    return <CustomTab text={tab.text} id={tab.id} key={tab.id} onClick={handleTabClick} />;
  });
  const tab1 = useRef<HTMLButtonElement>(null);
  const tab2 = useRef<HTMLButtonElement>(null);
  const tab3 = useRef<HTMLButtonElement>(null);
  //const [activeTab, setActiveTab] = useState(tab1);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabIcon content={<TabContent text="Text1" />} />
        <TabIcon content={<TabContent text="Text22" />} selected />
        <TabIcon content={<TabContent text="Text333" />} disabled />
      </Wrapper>
      <Wrapper>
        <TabMenuIconContainer>
          {iconTabs}
          <TabActiveUnderline $left={`${underlineLeft}px`} $width={`${underlineWidth}px`} />
        </TabMenuIconContainer>
      </Wrapper>
      <Wrapper>
        <TabMenuIconContainer $underline>
          <TabIcon ref={tab1} content={<TabContent text="Text1" />} />
          <TabIcon ref={tab2} content={<TabContent text="Text22" />} selected />
          <TabIcon ref={tab3} content={<TabContent text="Text333" />} disabled />
        </TabMenuIconContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
