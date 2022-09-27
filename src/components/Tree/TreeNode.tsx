import React, { HTMLAttributes, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Checkbox } from '#src/components/Checkbox';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

export interface RenderOptionProps {
  /** Размер компонента */
  dimension?: Dimension;
  /** Активная секция Tree */
  selected?: boolean;
  /** Акцентная секция Tree */
  hovered?: boolean;
  /** Признак отображения checkbox-а */
  checkboxVisible?: boolean;
  /** Отключение секции */
  disabled?: boolean;
  /** Значение checkbox-а */
  checked?: boolean;
  /** Неопределенное состояние checkbox-а */
  indeterminate?: boolean;
  /** Уровень дерева item-а */
  level?: number;
  /** Наличие дочерних элемнтов у item-а */
  hasChildren?: boolean;
  /** Признак развернутого состояния item-а */
  expanded?: boolean;
  /** Обработчик клика мыши на item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
  /** обработчик изменения состояния открытости узла */
  onToggleExpand?: () => void;
}

export interface TreeItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  children?: Array<TreeItemProps>;
  expanded?: boolean;
}

const ICON_SIZE_M = 24;
const ICON_SIZE_S = 20;

export type Dimension = 'm' | 's';

export interface NodeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: React.ReactNode;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onChange?: (value: boolean) => void;
}

export interface TreeNodeProps extends NodeProps, RenderOptionProps {}

const Chevron = styled(ChevronRightOutline)<{ $isOpened?: boolean; dimension?: Dimension }>`
  transition: all 0.3s;
  & path {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
  width: 100%;
  height: 100%;
  transform: ${(p) => (p.$isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const hoveredCss = css`
  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      background-color: ${(p) => p.theme.color['Opacity/Hover']};
    }
  }
`;

const ChevronWrapper = styled.div<{
  dimension?: Dimension;
  empty?: boolean;
}>`
  flex-shrink: 0;
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: ${(p) => (p.dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};
  height: ${(p) => (p.dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};

  ${({ empty }) => !empty && hoveredCss}
`;

export const backgroundColor = css<{ selected?: boolean; hovered?: boolean }>`
  background: ${({ theme, selected, hovered }) =>
    hovered
      ? theme.color['Opacity/Hover']
      : selected
      ? theme.color['Opacity/Focus']
      : theme.color['Special/Elevated BG']};
`;

const RowWrapper = styled.div<{
  dimension?: Dimension;
  level?: number;
  selected?: boolean;
  hovered?: boolean;
  disabled?: boolean;
}>`
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${(p) => (p.dimension === 'm' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short'])};
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  min-height: ${({ dimension }) => (dimension === 'm' ? '40px' : '32px')};
  ${backgroundColor};
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  padding: ${(p) =>
    p.dimension === 'm' ? `8px 16px 8px ${16 + (p.level || 0) * 40}px` : `6px 16px 6px ${16 + (p.level || 0) * 36}px`};
`;

const IconWrapper = styled.div<{ dimension?: Dimension }>`
  margin-right: 8px;
  flex-shrink: 0;
  width: ${(p) => (p.dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};
  height: ${(p) => (p.dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};
  > svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
`;

const StyledCheckbox = styled(Checkbox)`
  margin: 2px 10px 2px 2px;
  flex-shrink: 0;
`;

const TitleContent = styled.div`
  padding-top: 2px;
`;

export const TreeNode = ({
  dimension = 'm',
  label,
  icon,
  checkboxVisible,
  hasChildren,
  selected,
  hovered,
  disabled,
  expanded,
  checked,
  indeterminate,
  level,
  onChange,
  onHover,
  onClickItem,
  onToggleExpand,
  children,
}: TreeNodeProps) => {
  const Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null = icon || null;
  const [mouseOnChevron, setMouseOnChevron] = useState<boolean>(false);
  const chevronRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = () => {
    onHover?.();
  };

  const handleChevronMouseMove = () => {
    if (!mouseOnChevron && hasChildren) setMouseOnChevron(true);
  };

  const handleChevronMouseLeave = () => {
    if (hasChildren) setMouseOnChevron(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === chevronRef.current) return;
    if (!disabled) onClickItem?.();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <RowWrapper
      dimension={dimension}
      level={level}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      selected={selected}
      hovered={hovered}
      disabled={disabled}
    >
      <ChevronWrapper
        ref={chevronRef}
        empty={!hasChildren}
        dimension={dimension}
        onClick={onToggleExpand}
        onMouseMove={handleChevronMouseMove}
        onMouseLeave={handleChevronMouseLeave}
      >
        {hasChildren && <Chevron $isOpened={expanded} dimension={dimension} />}
      </ChevronWrapper>

      {checkboxVisible && (
        <StyledCheckbox
          hovered={!mouseOnChevron && hovered}
          dimension={dimension}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate}
          onClick={handleCheckboxClick}
          onChange={handleCheckboxChange}
        />
      )}
      {Icon && (
        <IconWrapper dimension={dimension}>
          <Icon />
        </IconWrapper>
      )}
      {label && <TitleContent>{label}</TitleContent>}
      {children}
    </RowWrapper>
  );
};
