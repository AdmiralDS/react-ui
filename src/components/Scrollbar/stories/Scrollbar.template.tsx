import styled from 'styled-components';
import { NotificationItem, NotificationItemTitle, ScrollContainer, Toggle } from '@admiral-ds/react-ui';
import { useState } from 'react';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const NotificationItemContent = styled(ScrollContainer)`
  padding-right: 12px;
  padding-bottom: 12px;
  ${(p) => p.theme.typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const ScrollbarTemplate = () => {
  const [checked, setChecked] = useState(false);

  return (
    <NotificationItem
      displayStatusIcon
      style={{ paddingRight: 0, display: 'flex', maxWidth: 600, maxHeight: 400, flexDirection: 'column' }}
    >
      <NotificationItemTitle>ScrollContainer</NotificationItemTitle>
      <NotificationItemContent forwardedAs="section">
        ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.
        <Separator height={8} />
        Скролбары появляется автоматически при переполнении.
        <Separator height={8} />
        Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация скролбаров
        происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и не трогать
        поведение нативного скрола.
        <Separator height={8} />
        Использование requestAnimationFrame не нагружает браузер, так как в функции обратного вызова происходит только
        чтение состояния контейнера и только при появлении изменений управление передается на синхронизацию позиции
        скрола.
        <Separator height={8} />
        Если необходимо расположить скролы вне контейнера, то можно использовать компонент Scrollbars, предварительно
        отключив нативные скролы на контейнере с помощью миксина hideNativeScrollbarsCss и передав его нод в параметр
        contentNode
        {checked && <div style={{ width: 700, height: 500 }}></div>}
      </NotificationItemContent>
      <Toggle checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}>
        еще больше переполнить контейнер
      </Toggle>
    </NotificationItem>
  );
};
