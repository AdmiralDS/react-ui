import * as React from 'react';
import { Badge, typography } from '@admiral-ds/react-ui';
import type { BadgeProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`;

const String = styled.div<{ $appearance?: BadgeProps['appearance'] }>`
  display: flex;
  align-items: center;
  ${({ $appearance, theme }) =>
    $appearance &&
    $appearance.indexOf('white') > -1 &&
    `background: var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']});`}
  & > * {
    margin-right: 16px;
  }

  & > *:last-child {
    margin-right: 40px;
  }
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const BadgeVariantsTemplate = () => {
  return (
    <>
      <Layout>
        <String>
          <Badge>5</Badge>
          <Badge dimension="s">5</Badge>
          Light
        </String>
        <String>
          <Badge appearance="info">5</Badge>
          <Badge appearance="info" dimension="s">
            5
          </Badge>
          Info
        </String>
        <String>
          <Badge appearance="warning">5</Badge>
          <Badge appearance="warning" dimension="s">
            5
          </Badge>
          Warning
        </String>
        <String>
          <Badge appearance="success">5</Badge>
          <Badge appearance="success" dimension="s">
            5
          </Badge>
          Success
        </String>
        <String>
          <Badge appearance="error">5</Badge>
          <Badge appearance="error" dimension="s">
            5
          </Badge>
          Error
        </String>
        <String>
          <Badge appearance="grey">5</Badge>
          <Badge appearance="grey" dimension="s">
            5
          </Badge>
          Grey
        </String>
        <String>
          <Badge appearance="dark">5</Badge>
          <Badge appearance="dark" dimension="s">
            5
          </Badge>
          Dark
        </String>
        <String>
          <Badge appearance="lightInactive">5</Badge>
          <Badge appearance="lightInactive" dimension="s">
            5
          </Badge>
          Light Inactive
        </String>
        <String>
          <Badge appearance="lightDisable">5</Badge>
          <Badge appearance="lightDisable" dimension="s">
            5
          </Badge>
          Light Disable
        </String>
        <String $appearance="white">
          <Badge appearance="white">5</Badge>
          <Badge appearance="white" dimension="s">
            5
          </Badge>
          White
        </String>
        <String $appearance="whiteInactive">
          <Badge appearance="whiteInactive">5</Badge>
          <Badge appearance="whiteInactive" dimension="s">
            5
          </Badge>
          White Inactive
        </String>
        <String $appearance="whiteDisable">
          <Badge appearance="whiteDisable">5</Badge>
          <Badge appearance="whiteDisable" dimension="s">
            5
          </Badge>
          White Disable
        </String>
        <String $appearance="whiteBlue">
          <Badge appearance="whiteBlue">5</Badge>
          <Badge appearance="whiteBlue" dimension="s">
            5
          </Badge>
          White Blue
        </String>
      </Layout>
    </>
  );
};
