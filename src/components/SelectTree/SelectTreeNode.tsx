import React, { ChangeEvent, FC, HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { typography } from '#/components/Typography';
import { Checkbox } from '#/components/Checkbox';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

type Dimension = 'm' | 's';

export interface SelectTreeNodeProps extends HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  checked?: boolean;
  expanded?: boolean;
  children?: SelectTreeNodeProps[];
}

export interface SelectTreeBranchProps {
  node: SelectTreeNodeProps;
  dimension?: Dimension;
  level: number;
  expandAll: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: (event: MouseEvent<SVGSVGElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLLIElement>) => void;
}

const Chevron = styled(ChevronRightOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  margin-right: 16px;
  & path {
    fill: ${(p) => p.theme.color.basic.tertiary};
  }
`;

const TreeItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.li<{ isOpened?: boolean; dimension?: Dimension; level: number }>`
  color: ${(p) => p.theme.color.text.primary};
  & ${Chevron} {
    width: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
    height: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
    transform: ${(p) => (p.isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
  ${(p) => (p.dimension === 'm' ? typography['Additional/M'] : typography['Additional/XS'])};
  display: flex;
  align-items: flex-start;
  padding: ${(p) => (p.dimension === 'm' ? `16px 16px 16px ${p.level * 40}px` : `10px 16px 10px ${p.level * 36}px`)};
`;

const IconWrapper = styled.div<{ dimension?: Dimension }>`
  margin-right: 8px;
  > svg {
    width: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
    height: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
  }
`;

const StyledCheckbox = styled(Checkbox)<{ dimension?: Dimension }>`
  margin-right: 16px;
  height: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
  min-width: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
`;

const TitleContent = styled.div``;

export const SelectTreeNode: FC<SelectTreeBranchProps> = ({
  dimension,
  node,
  level,
  onChange,
  onButtonClick,
  onKeyDown,
  expandAll,
}) => {
  const checkStatus = node.children ? node.children.filter((child) => 'checked' in child) : [];
  const every = checkStatus.every((child) => child.checked === true);
  const some = checkStatus.some((child) => child.checked === true);

  return (
    <>
      <Wrapper isOpened={node.expanded} dimension={dimension} level={level} onKeyDown={onKeyDown}>
        {node.children && <Chevron data-key={node.id} onClick={onButtonClick} />}
        {'checked' in node && (
          <StyledCheckbox
            id={node.id}
            data-key={node.id}
            dimension={dimension}
            indeterminate={!every && every !== some}
            checked={node.checked}
            onChange={onChange}
          />
        )}
        {node.icon && <IconWrapper dimension={dimension}>{node.icon}</IconWrapper>}
        <TitleContent>{node.label}</TitleContent>
      </Wrapper>
      {node.expanded &&
        node.children &&
        node.children.map((child, i) => {
          return (
            <TreeItem key={[node.id, i].join('/')}>
              <SelectTreeNode
                key={node.id}
                dimension={dimension}
                node={child}
                level={level + 1}
                expandAll={expandAll}
                onKeyDown={onKeyDown}
                onButtonClick={onButtonClick}
                onChange={onChange}
              />
            </TreeItem>
          );
        })}
    </>
  );
};
