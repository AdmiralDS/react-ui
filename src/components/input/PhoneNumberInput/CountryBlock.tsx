import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Flag } from '#src/components/input/PhoneNumberInput/Flag';
import type { ComponentName } from '@admiral-ds/flags';
import { FlagsPack } from '@admiral-ds/flags';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { refSetter } from '#src/components/common/utils/refSetter';

export interface CountryBlockProps extends MenuItemProps {
  name: ComponentName;
  value: string;
  code: string;
}

const StyledCountryBlock = styled(MenuItem)<{ disabled?: boolean }>`
  display: flex;
  justify-content: flex-start;
  flex-flow: nowrap;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledFlag = styled(Flag)`
  flex-shrink: 0;
`;

const StyledCountryName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 9px;
`;

const CountryCode = styled.span`
  flex: 0 0 auto;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
`;

export const CountryBlock = forwardRef<HTMLDivElement, CountryBlockProps>((props, ref) => {
  const { dimension, value, code, name, ...otherProps }: CountryBlockProps = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
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

  const SvgFlag = (FlagsPack as { [key: ComponentName]: React.ElementType })[name];

  return (
    <>
      <StyledCountryBlock dimension={dimension} ref={refSetter(ref, wrapperRef)} {...otherProps}>
        {SvgFlag && <StyledFlag dimension={dimension} Component={SvgFlag} />}
        <StyledCountryName ref={textRef}>{value}</StyledCountryName>
        <CountryCode>{code}</CountryCode>
      </StyledCountryBlock>
      {tooltipVisible && overflow && <Tooltip targetElement={wrapperRef.current} renderContent={() => value} />}
    </>
  );
});
