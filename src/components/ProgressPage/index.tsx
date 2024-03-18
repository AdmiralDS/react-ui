import type { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export type AppearanceProgressPage = 'primary' | 'error';

export interface ProgressPageProps extends HTMLAttributes<HTMLDivElement> {
  /** Значение прогресса от 1 до 100 */
  percent?: number;
  /** Текст над прогрессбаром */
  label?: string | ReactNode;
  /** Вид компонента */
  appearance?: AppearanceProgressPage;
}

const Wrapper = styled.div`
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  border-radius: 2px;
  min-width: 140px;
  min-height: 4px;
  display: flex;
`;
const Progress = styled.div<{ $percent: number; $appearance?: AppearanceProgressPage }>`
  background: ${({ theme, $appearance }) =>
    $appearance === 'error'
      ? `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`
      : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  width: ${({ $percent }) => $percent}%;
  border-radius: 2px;
  transition: all 0.3s linear;
`;

const Label = styled.div<{ $appearance?: AppearanceProgressPage }>`
  display: flex;
  padding-bottom: 8px;
  font-size: 12px;
  justify-content: space-between;
  width: 100%;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
  color: ${({ theme, $appearance }) =>
    $appearance === 'error'
      ? `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`};
`;

const Container = styled.div``;

export const ProgressPage: FC<ProgressPageProps> = ({ percent = 0, label, appearance = 'primary', ...props }) => {
  return (
    <Container {...props}>
      <Label $appearance={appearance}>{label}</Label>
      <Wrapper>
        <Progress $appearance={appearance} $percent={percent} />
      </Wrapper>
    </Container>
  );
};

ProgressPage.displayName = 'ProgressPage';
