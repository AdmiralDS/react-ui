import styled, { css } from 'styled-components';

const Dot = styled.div<{ $dimension: Dimension; $appearance: Appearance }>`
  position: relative;
  box-sizing: border-box;
`;

type Dimension = 'l' | 'm' | 's' | 'xs';
type Appearance = 'neutral' | 'info' | 'error' | 'success' | 'warning' | 'attention';

export interface BadgeDotProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
}

export const BadgeDot = ({ dimension = 'm', appearance = 'neutral' }: BadgeDotProps) => {
  return <Dot $dimension={dimension} $appearance={appearance} />;
};
