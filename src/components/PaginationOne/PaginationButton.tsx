import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  overflow: visible;
  background-color: ${({ theme }) => theme.color.background.tertiary};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.secondary};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.background.tertiaryHover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.background.tertiaryHover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }

  &:focus {
    outline: none;
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color.basic.primary};
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: 4px;
    }
    background-color: ${({ theme }) => theme.color.background.tertiaryHover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.background.tertiary};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.disable};
    }
  }
`;

export const PaginationButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props} type="button" />;
};
