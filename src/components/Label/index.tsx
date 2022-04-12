import styled from 'styled-components';
import { TYPOGRAPHY } from '#/components/Typography';

export const Label = styled.label`
  text-align: left;
  font-family: ${() => TYPOGRAPHY.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color.text.secondary};

  [data-disabled] & {
    color: ${(props) => props.theme.color.text.tertiary};
  }

  [data-focus-within] & {
    color: ${(props) => props.theme.color.basic.press};
  }
  [data-required-within] &:before {
    content: '* ';
    color: ${(props) => props.theme.color.status.danger};
  }
  margin-bottom: 8px;
`;
