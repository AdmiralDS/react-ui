import * as React from 'react';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { PanelButton } from '../styled/PanelButton';

type ButtonProps = {
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled: boolean;
  type: 'left' | 'right';
  innerRef?: React.RefObject<HTMLDivElement>;
};

const ICON_SIZE = 24;

const ButtonComponent: React.FC<ButtonProps> = ({ onMouseDown, disabled, type, innerRef }) => (
  <PanelButton
    ref={innerRef}
    onMouseDown={(event) => {
      event?.preventDefault();
      onMouseDown(event);
    }}
    disabled={disabled}
  >
    {type === 'left' && <ChevronLeftOutline width={ICON_SIZE} height={ICON_SIZE} />}
    {type === 'right' && <ChevronRightOutline width={ICON_SIZE} height={ICON_SIZE} />}
  </PanelButton>
);

export const Button = React.memo<ButtonProps>(ButtonComponent);
