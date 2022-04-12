import type { FC, HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '#/components/Typography';

export type AppearanceProgressPage = 'primary' | 'error';

export interface ProgressPageProps extends HTMLAttributes<HTMLDivElement> {
  /** Значение прогресса от 1 до 100 */
  percent?: number;
  /** Текст над прогрессбаром */
  label?: string | ReactNode;
  /** Вид компонента */
  appearance?: AppearanceProgressPage;
}

const Wrapper = styled.div<{ appearance?: AppearanceProgressPage }>`
  background: ${({ theme }) => theme.color.background.tertiary};
  border-radius: 2px;
  min-width: 140px;
  min-height: 4px;
  display: flex;
`;
const Progress = styled.div<{ percent: number; appearance?: AppearanceProgressPage }>`
  background: ${({ theme, appearance }) =>
    appearance === 'error' ? theme.color.status.danger : theme.color.basic.primary};
  width: ${({ percent }) => percent}%;
  border-radius: 2px;
  transition: all 0.3s linear;
`;

const Label = styled.div<{ appearance?: AppearanceProgressPage }>`
  display: flex;
  padding-bottom: 8px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  font-family: ${TYPOGRAPHY.fontFamily};
  color: ${({ theme, appearance }) => (appearance === 'error' ? theme.color.status.danger : theme.color.text.primary)};
`;

const Container = styled.div``;

export const ProgressPage: FC<ProgressPageProps> = ({
  percent = 0,
  children,
  label,
  appearance = 'primary',
  ...props
}) => {
  return (
    <Container {...props}>
      <Label appearance={appearance}>{label}</Label>
      <Wrapper appearance={appearance}>
        <Progress appearance={appearance} percent={percent} />
      </Wrapper>
    </Container>
  );
};
