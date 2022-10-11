import * as React from 'react';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { PanelButton } from '../styled/PanelButton';

type ButtonProps = {
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled: boolean;
  type: 'left' | 'right';
};

const ICON_SIZE = 24;

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(({ onMouseDown, disabled, type }, ref) => (
  <PanelButton
    ref={ref}
    onMouseDown={(event) => {
      event?.preventDefault();
      onMouseDown(event);
    }}
    disabled={disabled}
  >
    {type === 'left' && <ChevronLeftOutline width={ICON_SIZE} height={ICON_SIZE} />}
    {type === 'right' && <ChevronRightOutline width={ICON_SIZE} height={ICON_SIZE} />}
  </PanelButton>
));
