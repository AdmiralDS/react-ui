import type { FC, ReactNode } from 'react';
import React, { HTMLAttributes, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { typography } from '#src/components-ver2/Typography';
import { Badge } from '#src/components-ver2/Badge';
import { Tooltip } from '#src/components-ver2/Tooltip';
import type { Dimension } from '#src/components-ver2/TabMenu/constants';
import {
  BADGE_MARGIN,
  ICON_MARGIN,
  ICON_SIZE_L,
  ICON_SIZE_M,
  TAB_HEIGHT_L,
  TAB_HEIGHT_M,
  TAB_PADDING_L,
  TAB_PADDING_M,
} from '#src/components-ver2/TabMenu/constants';

const DropDownItem = styled.li<{ dimension: Dimension; disabled?: boolean; selected?: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: ${({ dimension }) => (dimension === 'm' ? TAB_HEIGHT_M : TAB_HEIGHT_L)}px;
  background: ${({ theme, selected }) =>
    selected ? theme.color['Opacity/Focus'] : theme.color['Special/Elevated BG']};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${({ dimension }) => (dimension === 'm' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  user-select: none;
  cursor: pointer;

  & > div {
    overflow: hidden;
    display: flex;
  }

  & svg {
    display: inline-block;
    flex-shrink: 0;

    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
    width: ${({ dimension }) => (dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    height: ${({ dimension }) => (dimension === 'm' ? ICON_SIZE_M : ICON_SIZE_L)}px;
    margin-right: ${ICON_MARGIN};
  }
  & [data-badge] {
    margin-left: ${BADGE_MARGIN};
  }

  &:hover {
    outline: none;
    ${({ disabled, theme }) => !disabled && `background: ${theme.color['Opacity/Hover']};`}
  }

  &:focus {
    outline: none;
    ${({ disabled, theme }) => !disabled && `background: ${theme.color['Opacity/Hover']};`}
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
  color: ${theme.color['Neutral/Neutral 30']};
  background: ${theme.color['Special/Elevated BG']};
  cursor: default;
  & *[fill^='#'] {
    fill: ${theme.color['Neutral/Neutral 30']};
  }
  `}
`;

const DropdownContentWrapper = styled.div<{ dimension: Dimension }>`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  height: ${({ dimension }) => (dimension === 'm' ? TAB_HEIGHT_M : TAB_HEIGHT_L)}px;
  padding: ${({ dimension }) => (dimension === 'm' ? TAB_PADDING_M : TAB_PADDING_L)};
`;

const DropdownContent = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > div {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
  }
`;

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  id: string;
  dimension: Dimension;
  content: ReactNode;
  selected: string | null;
  disabled?: boolean;
  icon?: ReactNode;
  badge?: number;
}

export const Item: FC<ItemProps> = ({
  id,
  dimension,
  disabled,
  selected,
  icon,
  badge,
  content,
  onClick,
  onKeyDown,
  ...props
}) => {
  const itemRef = useRef(null);
  const [overflow, setOverflow] = useState(false);

  const detectOverflow = (e: any) => {
    return e.offsetWidth < e.scrollWidth;
  };

  useLayoutEffect(() => {
    if (itemRef.current && detectOverflow(itemRef.current) !== overflow) {
      setOverflow(detectOverflow(itemRef.current));
    }
  }, [content, dimension]);

  const renderContent = () => (
    <DropdownContentWrapper dimension={dimension}>
      {icon && icon}
      <DropdownContent ref={itemRef}>{content}</DropdownContent>
      {typeof badge !== 'undefined' && (
        <Badge data-badge dimension="s" appearance={id === selected ? 'info' : disabled ? 'lightDisable' : 'light'}>
          {badge}
        </Badge>
      )}
    </DropdownContentWrapper>
  );
  return (
    <DropDownItem
      {...props}
      id={id}
      dimension={dimension}
      disabled={disabled}
      selected={selected === id}
      aria-selected={selected === id}
      role="tab"
      tabIndex={selected === id ? 0 : -1}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {overflow ? <Tooltip renderContent={() => content}>{renderContent()}</Tooltip> : renderContent()}
    </DropDownItem>
  );
};
