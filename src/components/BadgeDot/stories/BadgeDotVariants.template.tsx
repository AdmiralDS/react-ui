import * as React from 'react';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`;

const String = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
  & > *:last-child {
    margin-right: 40px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgeDotVariantsTemplate = () => {
  return (
    <>
      <Layout>
        <String>
          <BadgeDot dimension="xs" />
          <BadgeDot dimension="s" />
          <BadgeDot />
          <BadgeDot dimension="l" />
          Neutral
        </String>
        <String>
          <BadgeDot appearance="info" dimension="xs" />
          <BadgeDot appearance="info" dimension="s" />
          <BadgeDot appearance="info" />
          <BadgeDot appearance="info" dimension="l" />
          Info
        </String>
        <String>
          <BadgeDot appearance="error" dimension="xs" />
          <BadgeDot appearance="error" dimension="s" />
          <BadgeDot appearance="error" />
          <BadgeDot appearance="error" dimension="l" />
          Error
        </String>
        <String>
          <BadgeDot appearance="success" dimension="xs" />
          <BadgeDot appearance="success" dimension="s" />
          <BadgeDot appearance="success" />
          <BadgeDot appearance="success" dimension="l" />
          Success
        </String>
        <String>
          <BadgeDot appearance="warning" dimension="xs" />
          <BadgeDot appearance="warning" dimension="s" />
          <BadgeDot appearance="warning" />
          <BadgeDot appearance="warning" dimension="l" />
          Warning
        </String>
        <String>
          <BadgeDot appearance="attention" dimension="xs" />
          <BadgeDot appearance="attention" dimension="s" />
          <BadgeDot appearance="attention" />
          <BadgeDot appearance="attention" dimension="l" />
          Attention
        </String>
      </Layout>
    </>
  );
};
