import { useState } from 'react';
import styled from 'styled-components';

import { T, TextInput, TreeSelect } from '@admiral-ds/react-ui';
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

  return (
    <Layout>
      <T font="Body/Body 1 Long">
        Откройте TreeSelect, затем кликните по полю над ним. Ожидается, что фокус останется в верхнем поле, но
        TreeSelect забирает его обратно при закрытии списка.
      </T>

      <T font="Body/Body 1 Long">Текущий фокус: {focusedField}</T>

      <TextInput
        aria-label="Верхнее поле"
        placeholder="Кликните сюда после открытия списка"
        onFocus={() => setFocusedField('верхнее поле')}
      />

      <TreeSelect items={ITEMS} placeholder="Откройте список" onFocus={() => setFocusedField('TreeSelect')} />
    </Layout>
  );
};
