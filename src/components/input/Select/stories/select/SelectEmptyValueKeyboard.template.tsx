import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SelectEmptyValueKeyboardTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value);

  return (
    <div>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        <p>
          Опция с <code>value=&quot;&quot;</code> нужна, когда пустая строка является самостоятельным значением,
          например вариантом «Не задано». Такая опция отличается от отсутствия значения: у неё есть собственная подпись,
          которую должен показать Select.
        </p>
        <p>Если Select получает пустую строку, соответствующую одной из опций, компонент автоматически:</p>
        <ul>
          <li>находит эту опцию и отображает её подпись вместо placeholder;</li>
          <li>не добавляет в нативный select вторую служебную опцию с таким же значением;</li>
          <li>делает опцию активной при открытии и учитывает её позицию при навигации с клавиатуры;</li>
          <li>сохраняет исходный порядок опций в нативном select.</li>
        </ul>
        <p>Для навигации внутренний Menu разделяет два состояния:</p>
        <ul>
          <li>
            <code>active</code> — активная опция, например выбранная при открытии списка или находящаяся под курсором;
          </li>
          <li>
            <code>preselected</code> — опция, на которую пользователь перешёл с клавиатуры, но ещё не подтвердил выбор.
          </li>
        </ul>
        <p>
          Для обоих пропсов <code>undefined</code> означает, что Menu использует внутреннее состояние, <code>null</code>{' '}
          явно сбрасывает состояние, а <code>&quot;&quot;</code> является полноценным идентификатором опции. Поэтому
          пустая строка участвует в подсветке и клавиатурной навигации, но не смешивается с отсутствием активной или
          preselected-опции.
        </p>
      </T>
      <Select {...props} value={selectValue} onChange={onChange} placeholder="Выберите значение">
        <Option value="">Не задано</Option>
        <Option value="one">one</Option>
        <Option value="two">two</Option>
      </Select>
    </div>
  );
};
