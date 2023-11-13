import * as React from 'react';
import { GlobalSearch, typography } from '@admiral-ds/react-ui';
import type { GlobalSearchProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as GovernmentOutline } from '@admiral-ds/icons/build/category/GovernmentOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BasicExampleTemplate = ({
  themeBorderKind,
  ...props
}: GlobalSearchProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Wrapper>
        <GlobalSearch {...props}>
          <GovernmentOutline width={48} />
        </GlobalSearch>
      </Wrapper>
    </ThemeProvider>
  );
};
