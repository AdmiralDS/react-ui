import * as React from 'react';
import styled from 'styled-components';

import { ContentSwitcher, ContentSwitcherItem } from '@admiral-ds/react-ui';

import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Divider = styled.div`
  width: 10px;
`;

export const ContentSwitcherWithIconTemplate = () => {
  return (
    <>
      <ContentSwitcher dimension={'l'}>
        <ContentSwitcherItem active>
          <StarSolid width={20} />
          <Divider />
          Active button
        </ContentSwitcherItem>
        <ContentSwitcherItem>
          <StarSolid width={20} />
          <Divider />
          Default button
        </ContentSwitcherItem>
        <ContentSwitcherItem disabled>
          Disabled button
          <Divider />
          <StarSolid width={17} />
        </ContentSwitcherItem>
      </ContentSwitcher>
    </>
  );
};
