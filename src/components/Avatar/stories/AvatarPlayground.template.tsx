import styled from 'styled-components';

import { Avatar, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AvatarPlaygroundTemplate = ({ userName, ...props }: AvatarProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Аватар</NotificationItemTitle>
        <NotificationItemContent>
          Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует пять
          размеров компонента. Допускается использование одной или двух букв для обозначения пользователя (в размере XS
          только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры. Компонент может быть
          кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При
          ховере над аватаром показывается Tooltip с именем пользователя (опционально можно отключить). Может отображать
          статус пользователя с помощью статусного Бейджа. Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети».
          <Separator height={8} />
          Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за
          контрастностью и читаемостью.
          <Separator height={8} />
          Рекомендуемый алгоритм использования типов аватаров:
          <li>Если пользователь предоставил фотографию, то используется аватар с фото</li>
          <li>Если нет фото, то пишутся инициалы пользователя – первые буквы имени и фамилии</li>
          <li>Если известно только имя, то пишутся первые две буквы имени</li>
          <li>Если нет никаких данных, то используется аватар с иконкой</li>
          <li>При использовании размера аватара XS пишется только одна, первая буква имени</li>
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Avatar userName={userName || 'Just Example'} {...props} />
    </Wrapper>
  );
};
