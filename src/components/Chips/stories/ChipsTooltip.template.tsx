import * as React from 'react';
import styled from 'styled-components';

import { Chips, T } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

const listDataIconTooltip = [
  { id: '1', label: 'Ограниченное пространство', disabled: false },
  { id: '2', label: 'Ограниченное пространство', disabled: false },
  { id: '3', label: 'Ограниченное пространство', disabled: false },
];

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const StyledChipsTooltip = styled(Chips)`
  width: 160px;
`;
const Separator = styled.div`
  height: 24px;
`;

export const ChipsTooltipTemplate = (props: ChipsProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой происходит уход в троеточие.
        Но можно изменять этот параметр, стилизуя компонент через styled components. В случае сокращения над компонентом
        при ховере появляется Тултип с расшифровкой.
      </T>
      <Separator />
      <WrapperChip>
        {listDataIconTooltip.map((item) => (
          <StyledChipsTooltip {...props} renderContentTooltip={() => item.label} key={item.id}>
            {item.label}
          </StyledChipsTooltip>
        ))}
      </WrapperChip>
    </>
  );
};
