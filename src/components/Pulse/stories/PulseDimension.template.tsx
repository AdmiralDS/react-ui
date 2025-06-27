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

export const PulseDimensionTemplate = (props: PulseProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент представлен в трёх размерах: L, M (по умолчанию) и S.
      </T>
      <Wrapper>
        <Pulse {...props} dimension="l" />
        <Pulse {...props} dimension="m" />
        <Pulse {...props} dimension="s" />
      </Wrapper>
    </>
  );
};
