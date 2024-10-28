import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';

export const SearchSelectWithOnChangeHandlerTemplate = () => {
  const [activeSegments, setActiveSegments] = React.useState<string[]>([]);

  const segmentsOptions = [
    'James Welch',
    'Lucille Daniels',
    'Christopher Bradley',
    'Ann Cain',
    'Christopher Rodriguez',
  ].map((segmentName) => (
    <Option
      key={segmentName}
      value={segmentName}
      renderChip={() => ({
        children: segmentName,
        onClose: () => ({}),
        key: `${segmentName}-chip`,
      })}
    >
      {segmentName}
    </Option>
  ));

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

  return (
    <>
      <T font="Body/Body 1 Short" as="div" style={{ marginBottom: 16 }}>
        Вместо нативного <b>onChange</b> рекомендуем использовать <b>onSelectedChange</b>. В обработчике события{' '}
        <b>onChange</b> для режима <b>multiple</b> список выбранных значения можно получить через{' '}
        <b>event.selectedOptions</b>
      </T>
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
