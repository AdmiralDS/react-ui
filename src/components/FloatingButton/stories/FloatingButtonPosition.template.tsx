import * as React from 'react';
import { FloatingButton, T } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';

export const FloatingButtonPositionTemplate = (props: FloatingButtonProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '80px' }}>
        Кнопка FloatingButton постоянно видна на экране и не скроллится с контентом страницы. По умолчанию кнопка
        располагается в правом нижнем углу экрана, на расстоянии 28 px от краев экрана. Пользователь может задать свое
        расположение кнопки, переопределив её позиционирование через стили.
      </T>
      <FloatingButton {...props}>
        <EmailOutline />
      </FloatingButton>
      <FloatingButton style={{ insetBlockEnd: '88px' }} {...props}>
        <EmailOutline />
      </FloatingButton>
    </>
  );
};
