import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Tooltip, Button, T, typography } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType, TooltipDimension } from '@admiral-ds/react-ui';
import { ReactComponent as VIPOutline } from '@admiral-ds/icons/build/category/VIPOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const CustomP = styled.p<{ $dimension?: TooltipDimension }>`
  padding: 0;
  margin: 0;
  color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  ${(p) => (p.$dimension === 'm' ? typography['Subtitle/Subtitle 3'] : typography['Caption/Caption 1'])};
  ${(p) => (p.$dimension === 's' ? 'font-weight: bold;' : '')};
`;

export const TooltipCustomTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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

  const renderTooltipContent = () => {
    return (
      <>
        <CustomP $dimension={props.dimension}>Фамилия Имя Отчество</CustomP>
        <T font={props.dimension === 'm' ? 'Body/Body 2 Short' : 'Caption/Caption 1'} color="Neutral/Neutral 00">
          Старший дизайнер
        </T>
      </>
    );
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <VIPOutline aria-hidden />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={renderTooltipContent}
          tooltipPosition={props.tooltipPosition}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
