import * as React from 'react';

import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { ExtraText, TextWrapper, Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectCustomOptionMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        При использовании кастомных опций, реализуемых через Option children, в режиме multiple, необходимо определить у
        Option свойство renderChip, так как содержимое Chip и Tooltip формируется в методе renderChip, в противном
        случае внутри Chip и Tooltip у компонента Chip будет отображаться тот же child, что указан в качестве дочернего
        для Option.
      </T>
      <Separator />
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onSelectedChange={handleSelectedChange}
        mode="searchSelect"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={`${ind}0000`} renderChip={() => `${ind}0000`}>
            <TextWrapper>
              {`${ind}0000`}
              <ExtraText>{`Доп ${ind}`}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </Select>
    </>
  );
};
