import * as React from 'react';
import styled from 'styled-components';

import { Chips, T } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import { ReactComponent as VacationIcon } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 20}px;
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

export const ChipsIconTemplate = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = React.useState('');
  const [selectedS, setSelectedS] = React.useState('');
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В компоненте можно включать иконки справа и/или слева от текста.
      </T>
      <Separator $height={24} />
      <WrapperChip $dimension={props.dimension}>
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            key={d.id}
            selected={selectedM === d.id}
            onClick={() => (props.disabled ? null : setSelectedM(d.id))}
            iconStart={d?.iconStart}
            iconEnd={d?.iconEnd}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip $dimension="s">
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            dimension="s"
            key={d.id}
            selected={selectedS === d.id}
            onClick={() => (props.disabled ? null : setSelectedS(d.id))}
            iconStart={d?.iconStart}
            iconEnd={d?.iconEnd}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
