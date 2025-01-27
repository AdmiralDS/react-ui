import * as React from 'react';
import { Badge, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const String = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
`;
const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 20}px;
  width: 8px;
`;

export const BadgeAccessabilityTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        При фокусе на компоненте, включающем в себя компонент Badge, осуществляется следующая озвучка: "Количество {'<'}
        число, указанное в Badge{'>'}". При желании текст озвучки можно поменять с помощью атрибута aria-label, как это
        сделано во второй кнопке.
      </T>
      <Separator $height={24} />
      <String>
        <Button>
          Пример
          <Separator />
          <Badge appearance="whiteInactive">4</Badge>
        </Button>
        <Button>
          Example
          <Separator />
          <Badge appearance="whiteInactive" aria-label="Amount 4">
            4
          </Badge>
        </Button>
      </String>
    </>
  );
};
