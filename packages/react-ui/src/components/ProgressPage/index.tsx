import type { FC, HTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '#src/components/Typography';

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
  background: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  border-radius: 2px;
  min-width: 140px;
  min-height: 4px;
  display: flex;
`;
const Progress = styled.div<{ percent: number; appearance?: AppearanceProgressPage }>`
  background: ${({ theme, appearance }) =>
    appearance === 'error' ? theme.color['Error/Error 60 Main'] : theme.color['Primary/Primary 60 Main']};
  width: ${({ percent }) => percent}%;
  border-radius: 2px;
  transition: all 0.3s linear;
`;

const Label = styled.div<{ appearance?: AppearanceProgressPage }>`
  display: flex;
  padding-bottom: 8px;
  font-size: 12px;
  justify-content: space-between;
  width: 100%;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  font-family: ${TYPOGRAPHY.fontFamily};
  color: ${({ theme, appearance }) =>
    appearance === 'error' ? theme.color['Error/Error 60 Main'] : theme.color['Neutral/Neutral 90']};
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

ProgressPage.displayName = 'ProgressPage';
