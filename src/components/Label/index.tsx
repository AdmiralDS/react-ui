import styled from 'styled-components';
import { typography } from '#src/components/Typography';

export const Label = styled.label<{ disabled?: boolean }>`
  text-align: left;
  ${typography['Body/Body 2 Short']}
  color: ${(props) => props.theme.color['Neutral/Neutral 50']};

  [data-disabled] & {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-focus-within] & {
    color: ${(props) => (props.disabled ? '' : props.theme.color['Neutral/Neutral 50'])};
  }
  [data-required-within] &:after {
    content: ' *';
    color: ${(props) => props.theme.color['Error/Error 60 Main']};
  }
  margin-bottom: 8px;
`;

Label.displayName = 'Label';
