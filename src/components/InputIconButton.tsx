import * as React from 'react';
import styled from 'styled-components';

export interface AnyIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function AnyIcon({ icon, ...props }: AnyIconProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

/**
 * @deprecated since version 8.0.1
 * Will be deleted in version 10.x.x
 *
 * Use InputIcon instead
 */
export const InputIconButton = styled(AnyIcon)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
`;

const ContainerWithCursor = styled.div`
  cursor: pointer;
  [disabled] &&& {
    cursor: not-allowed;
  }
`;

const IconSvg = styled(AnyIcon)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
`;

export interface InputIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  ref?: ((instance: SVGSVGElement | null) => void) | React.RefObject<SVGSVGElement> | null;
}

export const InputIcon = (props: InputIconProps) => {
  return (
    <ContainerWithCursor>
      <IconSvg {...props} />
    </ContainerWithCursor>
  );
};
