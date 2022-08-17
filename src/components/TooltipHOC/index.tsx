import * as React from 'react';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip } from '../TooltipRefactor';

type TooltipPositionType = 'bottom' | 'top' | 'left' | 'right' | 'bottomPageCenter' | 'topPageCenter';

export interface TooltipHocProps {
  renderContent: () => React.ReactNode;
  container?: Element | null;
  withDelay?: boolean;
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  tooltipPosition?: TooltipPositionType;
}

export type WrappedComponentProps = {
  innerRef?: any;
};

export function TooltipHOC<P extends React.ComponentPropsWithRef<any>>(Component: React.ComponentType<P>) {
  const WrappedComponent = (props: P & TooltipHocProps & WrappedComponentProps) => {
    const { innerRef, renderContent, container, withDelay, tooltipRef, tooltipPosition, ...wrappedOnlyProps } = props;
    const anchorElementRef = React.useRef<any>(null);

    return (
      <>
        <Component {...(wrappedOnlyProps as any)} ref={refSetter(innerRef, anchorElementRef)} />
        <Tooltip
          targetRef={anchorElementRef}
          renderContent={renderContent}
          container={container}
          withDelay={withDelay}
          tooltipPosition={tooltipPosition}
          tooltipRef={tooltipRef}
        />
      </>
    );
  };

  // использую forwardRef на тот случай, если ref захотят прокинуть на результат вызова TooltipHoc
  return React.forwardRef<any, P & TooltipHocProps>((props: P & TooltipHocProps, ref) => {
    return <WrappedComponent innerRef={ref} {...props} />;
  });
}
