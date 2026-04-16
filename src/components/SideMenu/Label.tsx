import { useRef, useLayoutEffect, useState, memo } from 'react';
import styled, { type css } from 'styled-components';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { Tooltip } from '#src/components/Tooltip';
import { typography } from '#src/components/Typography';

import type { SideMenuProps, SideMenuDimension, SideMenuItemRenderProps } from './types';

export const LabelText = styled.span<{ $dimension: SideMenuDimension; $header?: boolean; $multiline?: boolean }>`
  text-align: left;
  overflow: hidden;
  ${({ $multiline }) => !$multiline && 'white-space: nowrap; text-overflow: ellipsis;'};

  ${({ $dimension, $header }) =>
    $dimension === 'l'
      ? $header
        ? typography['Subtitle/Subtitle 2']
        : typography['Body/Body 1 Long']
      : $header
        ? typography['Subtitle/Subtitle 3']
        : typography['Body/Body 2 Long']};
`;
const LabelTooltip = styled.div<{ $tooltipCssMixin?: ReturnType<typeof css> }>`
  ${(p) => p.$tooltipCssMixin};
`;

// TODO: подумать над созданием общей утилиты в разделе components/common
const useTooltipVisible = (container: HTMLElement | null, element: HTMLElement | null) => {
  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, element]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }

    if (container) {
      container.addEventListener('mouseenter', show);
      container.addEventListener('mouseleave', hide);
      return () => {
        container.removeEventListener('mouseenter', show);
        container.removeEventListener('mouseleave', hide);
      };
    }
  }, [container]);

  return overflow && tooltipVisible;
};

type LabelProps = {
  dimension: SideMenuDimension;
  label: SideMenuItemRenderProps['label'];
  container: HTMLElement | null;
  isHeader?: boolean;
  multiline?: SideMenuProps['multiline'];
  visibleTooltip?: SideMenuProps['visibleTooltip'];
  tooltipCssMixin?: SideMenuProps['tooltipCssMixin'];
  children?: React.ReactNode;
};

export const Label = memo(
  ({
    dimension,
    label,
    isHeader = false,
    multiline,
    visibleTooltip,
    tooltipCssMixin,
    container,
    children,
  }: LabelProps) => {
    const textRef = useRef(null);

    const tooltipVisible = visibleTooltip && !multiline ? useTooltipVisible(container, textRef.current) : false;
    return (
      <>
        <LabelText ref={textRef} $dimension={dimension} $header={isHeader} $multiline={multiline}>
          {children || label}
        </LabelText>
        {tooltipVisible && !multiline && (
          <Tooltip
            targetElement={container}
            renderContent={() => <LabelTooltip $tooltipCssMixin={tooltipCssMixin}>{label}</LabelTooltip>}
          />
        )}
      </>
    );
  },
);
