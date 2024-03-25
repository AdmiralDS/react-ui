import styled from 'styled-components';
import { DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from '@admiral-ds/react-ui';
import type { SpinnerProps } from '@admiral-ds/react-ui';

const Layout = styled.div<{
  $inverse?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  background: ${({ theme, $inverse }) =>
    $inverse
      ? `var(--admiral-color-Primary_Primary60Main, ${theme.color[MainPrimaryColorName]})`
      : `var(--admiral-color-Neutral_Neutral00, ${theme.color[DefaultBackgroundColorName]})`};

  > * {
    flex: 0 0 auto;
    margin: 24px;
  }
`;

export const SpinnerDarkTemplate = ({ inverse = true }: SpinnerProps) => {
  return (
    <>
      <Layout $inverse={inverse}>
        <Spinner dimension="xl" inverse={inverse} />
        <Spinner dimension="l" inverse={inverse} />
        <Spinner dimension="m" inverse={inverse} />
        <Spinner dimension="ms" inverse={inverse} />
        <Spinner dimension="s" inverse={inverse} />
      </Layout>
    </>
  );
};
