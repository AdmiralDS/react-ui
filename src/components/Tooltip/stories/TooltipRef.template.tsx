import * as React from 'react';
import { Tooltip, Button } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TooltipRefTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const tooltipRef = React.useRef(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test3">
        <DeleteOutline height={24} width={24} />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={() => 'Delete file'}
          ref={tooltipRef}
          tooltipPosition={props.tooltipPosition}
          id="test3"
        />
      )}
    </ThemeProvider>
  );
};
