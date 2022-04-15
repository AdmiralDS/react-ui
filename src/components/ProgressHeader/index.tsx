import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import styled from 'styled-components';

export type AppearanceHeaderBar = 'primary' | 'error';

export interface ProgressHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Значение прогресса от 1 до 100 */
  percent?: number;
  /** Вид компонента */
  appearance?: AppearanceHeaderBar;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div<{ appearance?: AppearanceHeaderBar }>`
  background: ${({ theme }) => theme.color.background.tertiary};
  min-width: 140px;
  min-height: 4px;
  display: flex;
`;
const Progress = styled.div<{ percent: number; appearance?: AppearanceHeaderBar }>`
  background: ${({ theme, appearance }) =>
    appearance === 'error' ? theme.color.status.danger : theme.color.basic.primary};
  width: ${({ percent }) => percent}%;
  transition: all 0.3s linear;
`;

export const ProgressHeader: FC<ProgressHeaderProps> = ({ percent = 0, appearance = 'primary', ...props }) => {
  return (
    <Container {...props}>
      <Wrapper appearance={appearance}>
        <Progress appearance={appearance} percent={percent} />
      </Wrapper>
    </Container>
  );
};

ProgressHeader.displayName = 'ProgressHeader';
