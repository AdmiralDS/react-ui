import * as React from 'react';
import styled from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  overflow: visible;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  }
  &:active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }

  &:focus-visible {
    outline: none;
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
    }
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

export const PaginationButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props} type="button" />;
};
