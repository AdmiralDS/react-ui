import * as React from 'react';

import { Flex, FLEX_CELL_MAX_SIZE, InputField, TextField } from '@admiral-ds/react-ui';
import type { FlexContainerProps } from '@admiral-ds/react-ui';

export const FlexPlaygroundTemplate = ({ rowGap = 20, columnGap = 10, ...props }: FlexContainerProps) => {
  return (
    <>
      <Flex.Container {...props} rowGap={rowGap} columnGap={columnGap}>
        <Flex.Row {...props} rowGap={rowGap} columnGap={columnGap}>
          {Array.from({ length: FLEX_CELL_MAX_SIZE }, (_, i) => (
            <Flex.Cell {...props} columnGap={columnGap} key={FLEX_CELL_MAX_SIZE - i} col={FLEX_CELL_MAX_SIZE - i}>
              <InputField label={`Инпут шириной ${FLEX_CELL_MAX_SIZE - i}`} />
            </Flex.Cell>
          ))}
          <Flex.GrowCell {...props}>
            <TextField label="TextField" required />
          </Flex.GrowCell>
        </Flex.Row>
        <Flex.Row {...props} rowGap={rowGap} columnGap={columnGap}>
          <Flex.Cell {...props} columnGap={columnGap} col={5}>
            <InputField label={`Инпут шириной 5`} />
          </Flex.Cell>
          {/* пространство между инпутами в 3 колонки */}
          <Flex.Cell col={3} />
          <Flex.Cell {...props} columnGap={columnGap} col={3}>
            <InputField label={`Инпут шириной 3`} />
          </Flex.Cell>
        </Flex.Row>
      </Flex.Container>
    </>
  );
};
