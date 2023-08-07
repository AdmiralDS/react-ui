import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';
import type { ToggleProps } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const TogglePlaygroundTemplate = ({
  dimension,
  disabled,
  readOnly,
  width,
  extraText,
  labelPosition,
  checked: argChecked,
  ...props
}: ToggleProps) => {
  const [checked, setChecked] = React.useState(argChecked || false);

  React.useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);
  return (
    <>
      <Toggle
        {...props}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Controlled component
      </Toggle>
      <Separator />
      <Toggle
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Uncontrolled component
      </Toggle>
    </>
  );
};
