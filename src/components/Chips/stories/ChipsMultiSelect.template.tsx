import * as React from 'react';
import styled from 'styled-components';

import { Chips, T } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 20}px;
`;

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;

const listDataIcon = [
  {
    id: '1',
    label: 'Москва',
    disabled: false,
    iconStart: <VacationIcon />,
    iconEnd: <AlertSolid />,
    selected: false,
  },
  { id: '2', label: 'Тверь', disabled: false, iconStart: <TrophyIcon />, selected: false },
  { id: '3', label: 'Самара', disabled: false, iconEnd: <BurnIcon />, selected: false },
  { id: '4', label: 'Омск', disabled: false, iconEnd: <DiamondSolid />, selected: false },
  { id: '5', label: 'Вильнус', disabled: false, iconStart: <BurnIcon />, selected: false, badge: 3 },
];

export const ChipsMultiSelectTemplate = (props: ChipsProps) => {
  const [listM, setListM] = React.useState(listDataIcon);
  const handleKeyM = (id: string) => {
    setListM((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };
  const [listS, setListS] = React.useState(listDataIcon);
  const handleKeyS = (id: string) => {
    setListS((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Chips в режиме чекбоксов, когда можно выбрать любое количество значений.
      </T>
      <Separator $height={24} />
      <WrapperChip $dimension={props.dimension}>
        {listM.map((item) => (
          <Chips
            {...props}
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyM.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip $dimension="s">
        {listS.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyS.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
