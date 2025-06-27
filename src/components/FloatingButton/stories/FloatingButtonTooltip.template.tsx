import * as React from 'react';
import { FloatingButton, T } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as ChatOutline } from '@admiral-ds/icons/build/category/ChatOutline.svg';
import styled from 'styled-components';

const Separator = styled.div`
  height: 8px;
`;

export const FloatingButtonTooltipTemplate = (props: FloatingButtonProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Иконка внутри FloatingButton должна быть однозначной и понятной. Для пояснения значения иконки можно
        использовать Tooltip c подсказкой. Для того чтобы задать текст подсказки используйте параметр tooltip.
        <Separator />
        По дефолту Tooltip появляется слева от кнопки при ховере. Можно настроить появление тултипа справа, снизу,
        сверху, в зависимости от расположения кнопки, для этого используйте параметр tooltipPosition.
        <Separator />В случае, когда смысл кнопки очевиден, тултип можно не использовать.
      </T>
      <FloatingButton tooltip="Написать в чат" {...props}>
        <ChatOutline />
      </FloatingButton>
    </>
  );
};
