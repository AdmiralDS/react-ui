import type {
  ChangeEvent,
  FunctionComponent,
  HTMLAttributes,
  MouseEventHandler,
  MouseEvent,
  ReactNode,
  SVGProps,
} from 'react';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import { CheckboxField } from '#src/components/form';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { IconPlacement } from '#src/components/IconPlacement';

export interface TreeNodeRenderOptionProps {
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
  /**
   * @deprecated Помечено как deprecated в версии 6.1.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр indent
   *
   * Уровень дерева item-а
   */
  level?: number;
  /** Отступ item-а */
  indent?: number;
  /** Наличие дочерних элемнтов у item-а */
  hasChildren?: boolean;
  /** Признак развернутого состояния item-а */
  expanded?: boolean;
  /** Обработчик клика мыши на item */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /** Обработчик наведения мыши на item */
  onHover?: () => void;
  /** обработчик изменения состояния открытости узла */
  onToggleExpand?: () => void;
}

export interface TreeItemProps {
  id: string;
  render: (options: TreeNodeRenderOptionProps) => ReactNode;
  disabled?: boolean;
  checked?: boolean;
  children?: Array<TreeItemProps>;
  expanded?: boolean;
}

const ICON_SIZE_M = 24;
const ICON_SIZE_S = 20;

export type Dimension = 'm' | 's';

export interface NodeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: ReactNode;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  onChange?: (value: boolean) => void;
}

export interface TreeNodeProps extends NodeProps, TreeNodeRenderOptionProps {}

const Chevron = styled(ChevronRightOutline)<{ $isOpened?: boolean }>`
  transition: all 0.3s;
  & path {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  width: 100%;
  height: 100%;
  transform: ${(p) => (p.$isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const StyledIconPlacement = styled(IconPlacement)`
  flex-shrink: 0;
  margin: 0 16px 0 0;
`;

export const backgroundColor = css<{ $selected?: boolean; $hovered?: boolean }>`
  background: ${({ theme, $selected, $hovered }) =>
    $hovered
      ? `var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']})`
      : $selected
        ? `var(--admiral-color-Opacity_Focus, ${theme.color['Opacity/Focus']})`
        : `var(--admiral-color-Special_ElevatedBG, ${theme.color['Special/Elevated BG']})`};
`;

const RowWrapper = styled.div<{
  $dimension?: Dimension;
  $indent?: number;
  $selected?: boolean;
  $hovered?: boolean;
  disabled?: boolean;
}>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short'])};
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  min-height: ${({ $dimension }) => ($dimension === 'm' ? '40px' : '32px')};
  ${(p) => !p.disabled && backgroundColor};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) =>
    p.$dimension === 'm'
      ? `8px 16px 8px ${16 + (p.$indent || 0) * 40}px`
      : `6px 16px 6px ${16 + (p.$indent || 0) * 36}px`};
`;

const IconWrapper = styled.div<{ $dimension?: Dimension }>`
  margin-right: 8px;
  flex-shrink: 0;
  width: ${(p) => (p.$dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};
  height: ${(p) => (p.$dimension === 'm' ? `${ICON_SIZE_M}px` : `${ICON_SIZE_S}px`)};
  > svg {
    width: 100%;
    height: 100%;
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const StyledCheckbox = styled(CheckboxField)`
  margin-right: 8px;
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
  indent,
  level,
  onChange,
  onHover,
  onClick,
  onToggleExpand,
  children,
  className,
  style,
  ...props
}: TreeNodeProps) => {
  const Icon: FunctionComponent<SVGProps<SVGSVGElement>> | null = icon || null;
  const [mouseOnChevron, setMouseOnChevron] = useState<boolean>(false);
  const chevronRef = useRef<HTMLButtonElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [hoveredState, setHoveredState] = useState<boolean>(false);

  const hoveredValue = hovered ?? hoveredState;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    onHover?.();
    if (!hoveredState) setHoveredState(true);
    props.onMouseMove?.(e);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setHoveredState(false);
    props.onMouseLeave?.(e);
    // }
  };

  const handleChevronMouseMove = () => {
    if (!mouseOnChevron && hasChildren) setMouseOnChevron(true);
  };

  const handleChevronMouseLeave = () => {
    if (hasChildren) setMouseOnChevron(false);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === chevronRef.current) return;
    if (!disabled) onClick?.(e);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <RowWrapper
      ref={rowRef}
      className={className}
      style={style}
      $dimension={dimension}
      $indent={indent}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      $selected={selected}
      $hovered={hoveredValue}
      disabled={disabled}
    >
      {hasChildren && (
        <StyledIconPlacement
          ref={chevronRef}
          dimension={dimension === 'm' ? 'lBig' : 'mBig'}
          highlightFocus={false}
          onClick={onToggleExpand}
          onMouseMove={handleChevronMouseMove}
          onMouseLeave={handleChevronMouseLeave}
        >
          <Chevron $isOpened={expanded} aria-hidden />
        </StyledIconPlacement>
      )}
      {checkboxVisible && (
        <StyledCheckbox
          {...props}
          hovered={!mouseOnChevron && hoveredValue}
          dimension={dimension}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate}
          onChange={handleCheckboxChange}
        />
      )}
      {Icon && (
        <IconWrapper $dimension={dimension}>
          <Icon />
        </IconWrapper>
      )}
      {label && <TitleContent>{label}</TitleContent>}
      {children}
    </RowWrapper>
  );
};
