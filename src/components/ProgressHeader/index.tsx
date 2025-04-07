import type { FC, HTMLAttributes } from 'react';
import * as React from 'react';
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

const Wrapper = styled.div`
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  min-width: 140px;
  min-height: 4px;
  display: flex;
`;
const Progress = styled.div<{ $percent: number; $appearance?: AppearanceHeaderBar }>`
  background: ${({ theme, $appearance }) =>
    $appearance === 'error'
      ? `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`
      : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
  transition: all 0.3s linear;
`;

export const ProgressHeader: FC<ProgressHeaderProps> = ({ percent = 0, appearance = 'primary', ...props }) => {
  return (
    <Container {...props}>
      <Wrapper>
        <Progress $appearance={appearance} $percent={percent} style={{ width: `${percent}%` }} />
      </Wrapper>
    </Container>
  );
};

ProgressHeader.displayName = 'ProgressHeader';
