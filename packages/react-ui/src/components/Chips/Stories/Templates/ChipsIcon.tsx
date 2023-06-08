import * as React from 'react';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

const WrapperChip = styled.div<{ dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ dimension }) => (dimension === 's' ? 8 : 12)}px;
  }
`;

const Separator = styled.div`
  height: 20px;
`;

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

export const ChipsIconTemplate = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = React.useState('');
  const [selectedS, setSelectedS] = React.useState('');
  return (
    <>
      <WrapperChip dimension={props.dimension}>
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            key={d.id}
            selected={selectedM === d.id}
            onClick={() => (props.disabled ? null : setSelectedM(d.id))}
            iconBefore={d?.iconBefore}
            iconAfter={d?.iconAfter}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip dimension="s">
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            dimension="s"
            key={d.id}
            selected={selectedS === d.id}
            onClick={() => (props.disabled ? null : setSelectedS(d.id))}
            iconBefore={d?.iconBefore}
            iconAfter={d?.iconAfter}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
