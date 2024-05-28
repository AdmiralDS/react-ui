import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { TabIcon } from '#src/components/TabMenuComponent/TabIcon';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const TabContent = () => {
  return (
    <>
      <MinusCircleOutline />
      <div>Text</div>
    </>
  );
};

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
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabIcon content={<TabContent />} />
        <TabIcon content={<TabContent />} selected />
        <TabIcon content={<TabContent />} disabled />
      </Wrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
