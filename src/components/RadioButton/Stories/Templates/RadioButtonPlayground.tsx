import * as React from 'react';
import styled from 'styled-components';

import { Button, RadioButton } from '@admiral-ds/react-ui';
import type { RadioButtonProps } from '@admiral-ds/react-ui';
import { useEffect } from 'react';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const RadioButtonPlaygroundTemplate = ({ checked: argChecked, ...props }: RadioButtonProps) => {
  const [checked, setChecked] = React.useState(argChecked || false);

  useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);

  return (
    <>
      <RadioButton value={1} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} {...props}>
        Some text
      </RadioButton>
      <Separator />
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </>
  );
};
