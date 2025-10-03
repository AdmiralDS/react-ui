import type { ComponentDimension } from '#src/components/input/types';

type SizeProps = { $dimension?: ComponentDimension };

export const iconSizeValue = (props: SizeProps) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
export const horizontalPaddingValue = (props: SizeProps) => {
  switch (props.$dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};
