import * as React from 'react';
import type { IOnCloseProps } from '@admiral-ds/react-ui';
import { Option, Select, T } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectWithOnChangeHandlerTemplate = () => {
  const [activeSegments, setActiveSegments] = React.useState<string[]>([]);
  const [optionList] = React.useState<string[]>([
    'James Welch',
    'Lucille Daniels',
    'Christopher Bradley',
    'Ann Cain',
    'Christopher Rodriguez',
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setActiveSegments(selectedValues);
  };

  const handleSelectedChange = (value: string | Array<string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const handleClear = () => {
    setActiveSegments([]);
  };

  const handleChipOnClose = (props: IOnCloseProps) => {
    const selectedValues = activeSegments.filter((segment) => segment !== props.value);
    setActiveSegments(selectedValues);
  };

  const segmentsOptions = optionList.map((segmentName) => (
    <Option
      key={segmentName}
      value={segmentName}
      disabled={segmentName === 'Christopher Bradley'}
      renderChip={() => ({
        children: segmentName,
        onClose: handleChipOnClose,
        key: `${segmentName}-chip`,
        disabled: segmentName === 'Christopher Bradley',
      })}
    >
      {segmentName}
    </Option>
  ));
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Так как компонент построен на нативном select, при использовании нативного события onchange в режиме multiple
        необходимо помнить, что в качестве event.target.value возвращается значение первой выбранной option из массива
        выбранных опций. Поэтому для обработки этого события используйте event.selectedOptions или свойство
        option.selected.
        <Separator $height={8} />
        Кроме того, рекомендуем использовать ненативное событие onSelectedChange, которое для режима multiple возвращает
        выбранные опции в порядке их выбора пользователем.
        <Separator $height={8} />
        Также следует помнить, что при использовании renderChip в Option нужно прокидывать все пропсы, включая disabled
        и readOnly при наличии, для корректного отображения чипсов.
      </T>
      <Separator />
      <Select
        dimension="m"
        multiple
        value={activeSegments}
        onChange={handleChange}
        onSelectedChange={handleSelectedChange}
        onClearIconClick={handleClear}
        displayClearIcon
        placeholder={'placeholder'}
        style={{ minWidth: '300px' }}
      >
        {segmentsOptions}
      </Select>
    </>
  );
};
