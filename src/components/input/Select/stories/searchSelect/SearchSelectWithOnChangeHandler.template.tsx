import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

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
      <T font="Body/Body 1 Long" as="div">
        Так как компонент построен на нативном select, при использовании нативного события <b>onchange</b> в режиме{' '}
        <b>multiple</b> необходимо помнить, что в качестве event.target.value возвращается значение первой выбранной
        option из массива выбранных опций. Поэтому для обработки этого события используйте <b>event.selectedOptions</b>{' '}
        или свойство option.selected.
        <Separator $height={8} />
        Кроме того, рекомендуем использовать ненативное событие <b>onSelectedChange</b>, которое для режима
        <b>multiple</b> возвращает выбранные опции в порядке их выбора пользователем
      </T>
      <Separator />
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
