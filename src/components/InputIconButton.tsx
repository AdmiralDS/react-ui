import * as React from 'react';
import styled from 'styled-components';

export interface AnyIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function AnyIcon({ icon, ...props }: AnyIconProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

export const InputIconButton = styled(AnyIcon)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  [disabled] & {
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${(props) => props.theme.color['Neutral/Neutral 30']};
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;
