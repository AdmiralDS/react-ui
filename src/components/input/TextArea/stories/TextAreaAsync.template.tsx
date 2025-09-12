import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { TextArea } from '@admiral-ds/react-ui';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TEXT =
  'At breakpoint boundaries, mini units divide the screen into a fixed master ' +
  'grid, and multiples of mini units map to fluid grid column widths and row ' +
  'heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +
  'master grid, and multiples of mini units map to fluid grid column widths and ' +
  'row heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +
  'master grid, and multiples of mini units map to fluid grid column widths and row ' +
  'heights.At breakpoint boundaries, mini units divide the screen into a fixed master ' +
  'grid, and multiples of mini units map to fluid grid column widths and row heights.';

export const TextAreaAsyncTemplate = () => {
  const [textValue, setTextValue] = useState<string>('' /*TEXT*/);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setTextValue(TEXT);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [setTextValue]);

  const handleChangeTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setTextValue(inputValue);
  };

  return (
    <Form>
      <TextArea
        data-container-id="textField-1"
        autoHeight
        rows={3}
        maxRows={6}
        value={textValue}
        onChange={handleChangeTextValue}
      />

      <TextArea data-testid="textField-2" autoHeight rows={3} maxRows={6} required />
    </Form>
  );
};
