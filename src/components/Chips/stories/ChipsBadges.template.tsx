import * as React from 'react';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

const listDataIcon = [
  {
    id: '1',
    label: 'Москва',
    disabled: false,
    iconBefore: <VacationIcon />,
    iconAfter: <AlertSolid />,
    selected: false,
  },
  { id: '2', label: 'Тверь', disabled: false, iconBefore: <TrophyIcon />, selected: false },
  { id: '3', label: 'Самара', disabled: false, iconAfter: <BurnIcon />, selected: false },
  { id: '4', label: 'Омск', disabled: false, iconAfter: <DiamondSolid />, selected: false },
  { id: '5', label: 'Вильнус', disabled: false, iconBefore: <BurnIcon />, selected: false, badge: 3 },
];

const Separator = styled.div`
  height: 20px;
`;

const WrapperChip = styled.div<{ dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ dimension }) => (dimension === 's' ? 8 : 12)}px;
  }
`;

export const ChipsBadgesTemplate = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = React.useState('');
  const [selectedS, setSelectedS] = React.useState('');

  return (
    <>
      <WrapperChip dimension="m">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="m"
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="s"
            appearance="filled"
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
            iconBefore={item?.iconBefore}
            iconAfter={item?.iconAfter}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
