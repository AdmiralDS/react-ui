import * as React from 'react';

import { ContentSwitcher, ContentSwitcherItem, T, TooltipHoc } from '@admiral-ds/react-ui';

import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as HomeOutline } from '@admiral-ds/icons/build/system/HomeOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import styled from 'styled-components';

const list = [
  {
    title: <DeleteOutline width={20} />,
    tooltipText: 'Delete',
  },
  {
    title: <EmailOutline width={20} />,
    tooltipText: 'Email',
  },
  {
    title: <HomeOutline width={20} />,
    tooltipText: 'Home',
  },
  {
    title: <PrintOutline width={20} />,
    tooltipText: 'Print',
  },
];

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const ContentSwitcherItemWithTooltip = TooltipHoc(ContentSwitcherItem);

export const ContentSwitcherIconOnlyTemplate = () => {
  const [activeLPrimary, setActiveLPrimary] = React.useState(0);
  const [activeMPrimary, setActiveMPrimary] = React.useState(0);
  const [activeSPrimary, setActiveSPrimary] = React.useState(0);
  const [activeLSecondary, setActiveLSecondary] = React.useState(0);
  const [activeMSecondary, setActiveMSecondary] = React.useState(0);
  const [activeSSecondary, setActiveSSecondary] = React.useState(0);

  return (
    <>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Dimension - L
        </T>
        <ContentSwitcher dimension={'l'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLPrimary}
              onClick={() => setActiveLPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'l'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLSecondary}
              onClick={() => setActiveLSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - M
        </T>
        <ContentSwitcher dimension={'m'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMPrimary}
              onClick={() => setActiveMPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'m'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMSecondary}
              onClick={() => setActiveMSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - S
        </T>
        <ContentSwitcher dimension={'s'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSPrimary}
              onClick={() => setActiveSPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'s'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSSecondary}
              onClick={() => setActiveSSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
      </WrapperVertical>
    </>
  );
};
