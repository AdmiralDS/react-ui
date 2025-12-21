import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { Tooltip } from '#src/components/Tooltip';
import type { css, DataAttributes } from 'styled-components';
import { ButtonContainer } from './commonMixin';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

const nothing = () => {};

export interface TextContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Отображаемый тескт */
  text?: string;

  /** Конфиг функция пропсов для контейнера, в котором находится текст. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?:
    | ((
        props: React.ComponentProps<typeof ButtonContainer>,
      ) => (Partial<React.ComponentProps<typeof ButtonContainer>> & DataAttributes) | (() => void))
    | (() => void);

  /** CSS миксин для переопределения стилей текста */
  textCssMixin?: ReturnType<typeof css>;
}

export const TextContainer = ({ text, containerPropsConfig = nothing, textCssMixin, ...props }: TextContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [overflowActive, setOverflowActive] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current && checkOverflow(containerRef.current) !== overflowActive) {
      setOverflowActive(checkOverflow(containerRef.current));
    }
  }, [tooltipVisible, overflowActive]);

  useEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const label = containerRef.current;
    if (label) {
      label.addEventListener('mouseenter', show);
      label.addEventListener('mouseleave', hide);
      return () => {
        label.removeEventListener('mouseenter', show);
        label.removeEventListener('mouseleave', hide);
      };
    }
  }, []);

  const showTooltip = tooltipVisible && overflowActive && !!text;

  return (
    <>
      <ButtonContainer ref={containerRef} {...props} $cssMixin={textCssMixin} {...containerPropsConfig({ ...props })}>
        <span>{text}</span>
      </ButtonContainer>
      {showTooltip && <Tooltip targetElement={containerRef.current} renderContent={() => text} />}
    </>
  );
};
