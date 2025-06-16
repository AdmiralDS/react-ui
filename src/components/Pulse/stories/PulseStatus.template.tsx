import { Pulse, T } from '@admiral-ds/react-ui';
import type { PulseProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
`;

export const PulseStatusTemplate = (props: PulseProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент выполнен в одном цвете (и основание и волна) и имеет четыре цвета-статуса: info (по умолчанию),
        danger, success, warning. Пользователь может задать свой кастомный цвет из палитры библиотеки. Для того, чтобы
        задать кастомный статус в параметр status нужно передать объект со свойством background и значением кастомного
        цвета.
      </T>
      <Wrapper>
        <Pulse {...props} status="info" />
        <Pulse {...props} status="danger" />
        <Pulse {...props} status="success" />
        <Pulse {...props} status="warning" />
        <Pulse {...props} status={{ background: '#8A3FFC' }} />
      </Wrapper>
    </>
  );
};
