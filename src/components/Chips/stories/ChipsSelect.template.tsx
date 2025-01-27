import * as React from 'react';
import styled from 'styled-components';

import { Chips, T } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 20}px;
`;

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const listData = [
  { id: '1', label: 'Москва', disabled: false, selected: false },
  { id: '2', label: 'Тверь', disabled: false, selected: false },
  { id: '3', label: 'Самара', disabled: false, selected: false },
];

export const ChipsSelectTemplate = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = React.useState('');
  const [selectedS, setSelectedS] = React.useState('');
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Набор из двух и более чипсов, которые могут быть в активном (выбранном) состоянии или пассивном (выключенном)
        состоянии. Chips в режиме радио кнопок, когда можно выбрать только одно значение из списка.
      </T>
      <Separator $height={24} />
      <WrapperChip $dimension={props.dimension}>
        {listData.map((item) => (
          <Chips
            {...props}
            key={item.id}
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip $dimension="s">
        {listData.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
