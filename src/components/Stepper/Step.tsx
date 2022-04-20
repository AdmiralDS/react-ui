import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';

import { ReactComponent as StepDefault } from '#src/components/Stepper/svg/Step.svg';
import { ReactComponent as StepCompleted } from '#src/components/Stepper/svg/StepCompleted.svg';
import { ReactComponent as StepError } from '#src/components/Stepper/svg/StepError.svg';
import { StepContentWrapper, StepIcon, StepRail, StepTrack, StepWrapper } from '#src/components/Stepper/style';
import StepperContext from '#src/components/Stepper/StepperContext';

export interface StepProps
  extends Omit<HTMLAttributes<HTMLLIElement | HTMLButtonElement | HTMLAnchorElement>, 'onClick'> {
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
  active?: boolean;
  completed?: boolean;
  link?: string;
  index?: number;
  hideLine?: boolean;
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
  hideLine,
  onClick,
  children,
  ...props
}) => {
  const { activeStep, orientation, stepWidth } = React.useContext(StepperContext);
  const clickable = !propDisabled && (!!onClick || !!link) && !!propCompleted;
  const active = propActive !== undefined ? propActive : activeStep === index;
  const completed = !!propCompleted && !propDisabled;
  const disabled = (!completed && !active) || !!propDisabled;
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
          {!hideLine && <StepRail />}
        </StepTrack>
        {children}
      </StepContentWrapper>
    </StepWrapper>
  );
};
