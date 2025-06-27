import * as React from 'react';

import { Chips, T } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

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
  { id: '3', label: 'Самара', disabled: false, selected: false, badge: 3 },
];

export const ChipsTagsCloseTemplate = (props: ChipsProps) => {
  const [dataListM, setDataM] = React.useState(listData);
  const [dataListS, setDataS] = React.useState(listData);
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Взаимодействовать можно только с чипсами имеющими иконку закрытия “Close”. При нажатии на иконку закрытия
        элемент удаляется из списка выбранных.
      </T>
      <Separator $height={24} />
      <WrapperChip $dimension={props.dimension}>
        {dataListM.map((item) => (
          <Chips
            key={item.id}
            {...props}
            badge={item.badge || props.badge}
            onClose={() => setDataM((prev) => prev.filter((d) => d.id !== item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <Separator />
      <WrapperChip $dimension="s">
        {dataListS.map((item) => (
          <Chips
            key={item.id}
            {...props}
            dimension="s"
            badge={item.badge || props.badge}
            onClose={() => setDataS((prev) => prev.filter((d) => d.id !== item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </>
  );
};
