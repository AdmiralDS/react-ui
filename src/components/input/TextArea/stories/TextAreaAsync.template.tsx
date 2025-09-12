import { useLayoutEffect, useState, useId } from 'react';
import styled from 'styled-components';

import { Button, TextArea } from '@admiral-ds/react-ui';

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
  const copyIconProps = { 'data-testid': useId() };
  const [textValue, setTextValue] = useState<string>('' /*TEXT*/);

  // useLayoutEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setTextValue(TEXT);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [setTextValue]);

  const handleChangeTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setTextValue(inputValue);
  };
  const handleClearButtonClick = () => {
    setTextValue('');
  };
  const handleFillButtonClick = () => {
    setTextValue(TEXT);
  };

  return (
    <Form>
      <Button onClick={handleClearButtonClick}>Clear area</Button>
      <Button onClick={handleFillButtonClick}>Fill area</Button>
      <TextArea
        data-container-id="textField-1"
        autoHeight
        value={textValue}
        onChange={handleChangeTextValue}
        displayCopyIcon
        copyIconPropsConfig={() => copyIconProps}
      />
    </Form>
  );
};
