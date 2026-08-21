import { useState } from 'react';
import styled from 'styled-components';

import { MenuActionsPanel, T, TextInput, TreeSelect } from '@admiral-ds/react-ui';
import type { TreeSelectItemProps } from '@admiral-ds/react-ui';

const ITEMS: Array<TreeSelectItemProps> = [
  { id: '1', label: 'Опция 1', checked: false },
  { id: '2', label: 'Опция 2', checked: false },
];

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`;

export const FocusOutsideRegressionTemplate = () => {
  const [focusedField, setFocusedField] = useState('нет');
  const [panelValue, setPanelValue] = useState('тест');

  return (
    <Layout>
      <T font="Body/Body 1 Long">
        При открытии и выборе опций TreeSelect должен сохранять фокус. При закрытии по клику вне компонента фокус должен
        остаться на элементе, по которому кликнули.
      </T>

      <T font="Body/Body 1 Long">
        Когда фокус на TreeSelect, Home и End должны перемещать активный пункт к началу и концу списка. ArrowLeft и
        ArrowRight не должны управлять списком.
      </T>

      <T font="Body/Body 1 Long">
        В TreeSelect клавиши Home, End и стрелки должны перемещать курсор, а Backspace — удалять символы текста.
        Backspace не должен удалять чипы TreeSelect: их можно удалить только через меню или по крестику на чипе.
      </T>

      <T font="Body/Body 1 Long">Текущий фокус: {focusedField}</T>

      <TextInput
        aria-label="Внешнее поле"
        placeholder="Кликните сюда, чтобы закрыть TreeSelect"
        onFocus={() => setFocusedField('внешнее поле')}
      />

      <TreeSelect
        items={ITEMS}
        defaultValue={['1']}
        placeholder="Откройте список"
        onFocus={() => setFocusedField('TreeSelect')}
        renderTopPanel={({ dimension }) => (
          <MenuActionsPanel dimension={dimension}>
            <TextInput
              aria-label="Поле верхней панели"
              dimension={dimension}
              value={panelValue}
              onChange={(e) => setPanelValue(e.currentTarget.value)}
              onFocus={() => setFocusedField('поле верхней панели')}
            />
          </MenuActionsPanel>
        )}
      />
    </Layout>
  );
};
