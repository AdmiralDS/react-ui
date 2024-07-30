import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  & > button {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
  & > button:not(:first-child) {
    margin-left: -1px;
  }
  & > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

type Dimension = 'xl' | 'l' | 'm' | 's';

type IconButtonGroupProps = {
  dimension?: Dimension;
  children: React.ReactNode;
};

export const IconButtonGroup = ({ children, dimension, ...props }: IconButtonGroupProps) => {
  return <Wrapper>{children}</Wrapper>;
};
