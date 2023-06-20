import * as React from 'react';
import { Badge, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const String = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
`;
const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

export const BadgeAccessabilityTemplate = () => {
  return (
    <>
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
