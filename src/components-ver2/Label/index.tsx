import styled from 'styled-components';
import { TYPOGRAPHY } from '#src/components-ver2/Typography';

export const Label = styled.label<{ disabled?: boolean }>`
  text-align: left;
  font-family: ${() => TYPOGRAPHY.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color['Neutral/Neutral 50']};

  [data-disabled] & {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-focus-within] & {
    color: ${(props) => (props.disabled ? '' : props.theme.color['Neutral/Neutral 50'])};
  }
  [data-required-within] &:before {
    content: '* ';
    color: ${(props) => props.theme.color['Error/Error 60 Main']};
  }
  margin-bottom: 8px;
`;

Label.displayName = 'Label';
