import * as React from 'react';

import { ReactComponent as VacationSolid } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { ReactComponent as BugSolid } from '@admiral-ds/icons/build/category/BugSolid.svg';
import { ReactComponent as CompareSolid } from '@admiral-ds/icons/build/category/CompareSolid.svg';
import { ReactComponent as ElderlySolid } from '@admiral-ds/icons/build/category/ElderlySolid.svg';
import { ReactComponent as MartiniOutline } from '@admiral-ds/icons/build/category/MartiniOutline.svg';
import { ReactComponent as PostOutline } from '@admiral-ds/icons/build/category/PostOutline.svg';
import { ReactComponent as ShoppingBagOutline } from '@admiral-ds/icons/build/category/ShoppingBagOutline.svg';
import { ReactComponent as TrophyOutline } from '@admiral-ds/icons/build/category/TrophyOutline.svg';
import { ReactComponent as AgreedSolid } from '@admiral-ds/icons/build/service/AgreedSolid.svg';
import type { MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { getItemHeight, Menu, MenuItem, mediumGroupBorderRadius, typography, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    iconBefore: <TrophyIcon />,
    iconAfter: <BurnIcon />,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    iconBefore: <VacationSolid />,
    iconAfter: <AlertSolid />,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
    iconBefore: <DiamondSolid />,
    iconAfter: <BugSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    iconBefore: <TrophyOutline />,
    iconAfter: <AgreedSolid />,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
    iconBefore: <ShoppingBagOutline />,
    iconAfter: <VacationSolid />,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
    iconBefore: <ElderlySolid />,
    iconAfter: <PostOutline />,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
    iconBefore: <MartiniOutline />,
    iconAfter: <CompareSolid />,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  width: fit-content;
  margin: 10px;
  display: inline-block;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

const StyledMenuItem = styled(MenuItem)`
  ${typography['Body/Body 1 Short']}
  padding: 6px 16px;
  align-items: flex-start;
  height: ${getItemHeight('l')};
  width: 320px;
  box-sizing: border-box;
`;

const StyledAdditionalText = styled.div`
  ${typography['Caption/Caption 1']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

const iconSize = css`
  width: 24px;
  height: 24px;
`;

const IconBefore = styled.div`
  position: absolute;
  top: 4px;
  left: 16px;
  ${iconSize}
`;

const IconAfter = styled.div`
  position: absolute;
  top: 4px;
  right: 16px;
  ${iconSize}
`;

export const MenuIconsAndAdditionalTextTemplate = (props: MenuProps) => {
  const modelBase = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconBefore = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconAfter = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));
  const modelTwoIcons = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));

  const [selected1, setSelected1] = React.useState<string | undefined>('');
  const [selected2, setSelected2] = React.useState<string | undefined>('');
  const [selected3, setSelected3] = React.useState<string | undefined>('');
  const [selected4, setSelected4] = React.useState<string | undefined>('');
  const [active1, setActive1] = React.useState<string | undefined>('');
  const [active2, setActive2] = React.useState<string | undefined>('');
  const [active3, setActive3] = React.useState<string | undefined>('');
  const [active4, setActive4] = React.useState<string | undefined>('');

  return (
    <div>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с иконками и дополнительным текстом.
      </T>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelBase}
          selected={selected1}
          onSelectItem={setSelected1}
          active={active1}
          onActivateItem={setActive1}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelTwoIcons}
          selected={selected2}
          onSelectItem={setSelected2}
          active={active2}
          onActivateItem={setActive2}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelIconBefore}
          selected={selected3}
          onSelectItem={setSelected3}
          active={active3}
          onActivateItem={setActive3}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelIconAfter}
          selected={selected4}
          onSelectItem={setSelected4}
          active={active4}
          onActivateItem={setActive4}
        />
      </Wrapper>
    </div>
  );
};
