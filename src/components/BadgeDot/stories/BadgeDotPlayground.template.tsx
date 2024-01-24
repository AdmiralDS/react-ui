import * as React from 'react';
import styled from 'styled-components';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import type { BadgeDotProps } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`;

const String = styled.div<{ appearance?: BadgeDotProps['appearance'] }>`
  display: flex;
  align-items: center;
  ${({ appearance, theme }) =>
    appearance && appearance.indexOf('white') > -1 && `background: ${theme.color['Neutral/Neutral 05']};`}
  & > * {
    margin-right: 16px;
  }
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export const BadgeDotPlaygroundTemplate = (props: BadgeDotProps) => {
  return (
    <>
      <Layout>
        <String appearance={props.appearance}>
          <BadgeDot {...props} />
          Appearance: {props.appearance || 'neutral'}
          <br />
          Dimension: {props.dimension || 'm'}
        </String>
      </Layout>
    </>
  );
};
