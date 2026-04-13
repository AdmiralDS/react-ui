import { useRef, useLayoutEffect, useState, memo } from 'react';
import styled, { type css } from 'styled-components';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { Tooltip } from '#src/components/Tooltip';
import { typography } from '#src/components//Typography';

import { HighlightedLabel } from './HighlightedLabel';
import type { SideMenuProps, SideMenuDimension, SideMenuItemRenderProps } from './types';
import type { SideMenuContextValue } from './contexts';

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
  labelType: SideMenuItemRenderProps['labelType'];
  level: SideMenuItemRenderProps['level'];
  multiline: SideMenuProps['multiline'];
  visibleTooltip: SideMenuProps['visibleTooltip'];
  tooltipCssMixin: SideMenuProps['tooltipCssMixin'];
  filterActive: SideMenuContextValue['filterActive'];
  searchQuery: SideMenuContextValue['searchQuery'];
  searchFormat: SideMenuContextValue['searchFormat'];
  container: HTMLElement | null;
};

export const Label = memo(
  ({
    dimension,
    label,
    labelType,
    level,
    multiline,
    visibleTooltip,
    tooltipCssMixin,
    container,
    filterActive,
    searchQuery,
    searchFormat,
  }: LabelProps) => {
    const textRef = useRef(null);

    const tooltipVisible = visibleTooltip && !multiline ? useTooltipVisible(container, textRef.current) : false;
    return (
      <>
        <LabelText
          ref={textRef}
          $dimension={dimension}
          $header={labelType === 'header' && level < 1}
          $multiline={multiline}
        >
          {filterActive ? (
            <HighlightedLabel text={label} searchText={searchQuery} highlightFormat={searchFormat} />
          ) : (
            label
          )}
        </LabelText>
        {tooltipVisible && (
          <Tooltip
            targetElement={container}
            renderContent={() => <LabelTooltip $tooltipCssMixin={tooltipCssMixin}>{label}</LabelTooltip>}
          />
        )}
      </>
    );
  },
);
