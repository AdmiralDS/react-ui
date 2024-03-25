import * as React from 'react';
import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

const MobileWrapper = styled.div`
  width: 320px;
  height: 100px;
  padding-top: 16px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-bottom-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const SwitcherWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const list = [
  { title: 'Active button', content: '1' },
  { title: 'Default button', content: '2' },
  { title: 'Disabled button', content: '3', disabled: true },
];

export const ContentSwitcherExampleTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - l
      </T>
      <Separator />
      <ContentSwitcher dimension={'l'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <Separator />
      <ContentSwitcher dimension={'m'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <Separator />
      <ContentSwitcher dimension={'s'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Mobile Adaptive
      </T>
      <MobileWrapper>
        <SwitcherWrapper>
          <ContentSwitcher dimension={'m'}>
            {list.map((item, index) => {
              return (
                <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                  {item.title}
                </ContentSwitcherItem>
              );
            })}
          </ContentSwitcher>
        </SwitcherWrapper>
      </MobileWrapper>
    </>
  );
};
