import { useLayoutEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { checkOverflow, Pill, Tooltip, TooltipHoc } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledPill = styled(Pill)`
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
`;

const StyledPillWithTooltipHoc = TooltipHoc(StyledPill);

const LabelWrapper = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PillWithTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const pillLabel = 'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны';

  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      wrapper.addEventListener('focus', show);
      wrapper.addEventListener('blur', hide);
      return () => {
        wrapper.removeEventListener('mouseenter', show);
        wrapper.removeEventListener('mouseleave', hide);
        wrapper.removeEventListener('focus', show);
        wrapper.removeEventListener('blur', hide);
      };
    }
  }, [setTooltipVisible]);
  //debugger;
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <Desc>
          В случаях ограниченного пространства задавайте максимальную ширину компонента, подсвечивая полный текст при
          наведении.
        </Desc>
        <Desc>Вариант Pill ограниченной ширины с использованием Tooltip при переполнении:</Desc>
        <StyledPill ref={wrapperRef} style={{ width: '253px' }}>
          <LabelWrapper ref={textRef}>{pillLabel}</LabelWrapper>
        </StyledPill>
        {tooltipVisible && overflow && <Tooltip targetElement={wrapperRef.current} renderContent={() => pillLabel} />}
        <Desc>Вариант Pill с ограничением по количеству символов и с использованием TooltipHoc:</Desc>
        <StyledPillWithTooltipHoc renderContent={() => pillLabel}>
          {pillLabel.slice(0, 40) + '...'}
        </StyledPillWithTooltipHoc>
      </WrapperVertical>
    </ThemeProvider>
  );
};
