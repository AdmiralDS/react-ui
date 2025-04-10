import * as React from 'react';
import { Tooltip, TOOLTIP_DELAY, Button } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TooltipDelayTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [timer, setTimer] = React.useState<NodeJS.Timeout>();

  React.useEffect(() => {
    function show() {
      setTimer(setTimeout(() => setVisible(true), TOOLTIP_DELAY));
    }
    function hide() {
      clearTimeout(timer);
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
        if (timer) clearTimeout(timer);
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setTimer, setVisible, timer]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <DeleteOutline aria-hidden />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={() =>
            `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`
          }
          tooltipPosition={props.tooltipPosition}
          style={{ minWidth: '200px', maxWidth: '300px' }}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
