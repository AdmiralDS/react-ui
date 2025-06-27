import { useRef } from 'react';
import styled from 'styled-components';

import { Divider, T } from '@admiral-ds/react-ui';
import type { DividerProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
`;

const Separator = styled.div`
  height: 24px;
`;

export const DividerPlaygroundTemplate = (props: DividerProps) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент для визуального разделения групп контента, создания визуальной иерархии или упорядочивания длинного
        списка элементов.
        <Separator />
        Рекомендации
        <li>
          Используйте Divider, только когда это необходимо. В большинстве ситуаций можно обойтись пустым пространством
          (отступами) и цветами.
        </li>
        <li>Не используйте компонент для создания обводок и других аналогичных элементов.</li>
        <li>
          При использовании между несколькими одинаковыми элементами интерфейса, разделители ставятся только между ними.
          Не ставьте разделители перед первым элементом и после последнего.
        </li>
        <Separator />
        Ширина компонента задается пользователем. Высота формируется контентом.
        <Separator />
        Компонент не используется на мобильных устройствах
      </T>
      <Separator />
      <Wrapper>
        <Divider ref={dividerRef} {...props} />
      </Wrapper>
    </>
  );
};
