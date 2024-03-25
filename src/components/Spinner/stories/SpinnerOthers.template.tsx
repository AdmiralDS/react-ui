import * as React from 'react';
import styled from 'styled-components';

import { Button, DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from '@admiral-ds/react-ui';

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

const StyledButton = styled(Button)`
  padding: 0 8px;
`;

export const SpinnerOthersTemplate = () => {
  return (
    <>
      <Layout>
        <StyledButton dimension="m" appearance="secondary">
          <Spinner dimension="m" />
        </StyledButton>
        <StyledButton dimension="m" appearance="primary">
          <Spinner dimension="m" inverse />
        </StyledButton>
      </Layout>
    </>
  );
};
