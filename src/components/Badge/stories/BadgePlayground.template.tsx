import * as React from 'react';
import styled from 'styled-components';
import { Badge, typography } from '@admiral-ds/react-ui';
import type { BadgeProps } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`;

const String = styled.div<{ appearance?: BadgeProps['appearance'] }>`
  display: flex;
  align-items: center;
  ${({ appearance, theme }) =>
    appearance &&
    appearance.indexOf('white') > -1 &&
    `background: var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']});`}
  & > * {
    margin-right: 16px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgePlaygroundTemplate = (props: BadgeProps) => {
  return (
    <>
      <Layout>
        <String appearance={props.appearance}>
          <Badge {...props}>4</Badge>
          Appearance: {props.appearance || 'light'}
          <br />
          Dimension: {props.dimension || 'm'}
        </String>
      </Layout>
    </>
  );
};
