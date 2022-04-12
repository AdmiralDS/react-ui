import React, { HTMLAttributes } from 'react';
import type { FC } from 'react';

import { ReactComponent as StepDefault } from './svg/Step.svg';
import { ReactComponent as StepCompleted } from './svg/StepCompleted.svg';
import { ReactComponent as StepError } from './svg/StepError.svg';
import { StepTrack, StepRail, StepIcon, StepWrapper, StepContentWrapper } from './style';
import StepperContext from './StepperContext';

export interface StepProps
  extends Omit<HTMLAttributes<HTMLLIElement | HTMLButtonElement | HTMLAnchorElement>, 'onClick'> {
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
  active?: boolean;
  completed?: boolean;
  link?: string;
  index?: number;
  onClick?: (step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => void;
}

export const Step: FC<StepProps> = ({
  index = -1,
  link,
  error,
  warning,
  disabled: propDisabled,
  completed: propCompleted,
  active: propActive,
  onClick,
  children,
  ...props
}) => {
  const { activeStep, orientation, stepWidth } = React.useContext(StepperContext);
  const clickable = !propDisabled && (!!onClick || !!link) && index <= activeStep;
  const active = propActive || activeStep === index;
  const completed = (propCompleted || activeStep > index) && !propDisabled;
  const disabled = activeStep < index || propDisabled;
  const icon = error || warning ? StepError : completed ? StepCompleted : StepDefault;
  const stepRef = React.useRef<HTMLLIElement | null>(null);

  const handleClick = () => {
    if (!disabled) {
      onClick?.({ index, active, completed, disabled });
    }
  };

  const nonClickableProps = { clickable: false };
  const linkProps = { clickable: true, as: 'a', href: link };
  const buttonProps = { clickable: true, as: 'button', type: 'button', disabled };
  const extraProps = !clickable ? nonClickableProps : link ? linkProps : buttonProps;

  return (
    <StepWrapper
      ref={stepRef}
      data-orientation={orientation}
      orientation={orientation}
      data-error={error}
      error={error}
      data-warning={warning}
      warning={warning}
      data-completed={completed}
      data-active={active}
      active={active}
      data-disabled={propDisabled}
      stepWidth={stepWidth}
      onClick={handleClick}
      {...extraProps}
      {...props}
    >
      <StepContentWrapper tabIndex={-1}>
        <StepTrack aria-hidden>
          <StepIcon as={icon} width={20} height={20} />
          <StepRail />
        </StepTrack>
        {children}
      </StepContentWrapper>
    </StepWrapper>
  );
};
