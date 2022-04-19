import React, { ChangeEvent, FC, HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { typography } from '#src/components-ver2/Typography';
import { Checkbox } from '#src/components-ver2/Checkbox';
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
  onButtonClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLLIElement>) => void;
}

const Chevron = styled(ChevronRightOutline)<{ $isOpened?: boolean; dimension?: Dimension }>`
  transition: all 0.3s;
  & path {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
  width: 100%;
  height: 100%;
  transform: ${(p) => (p.$isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const ChevronWrapper = styled.div<{
  isOpened?: boolean;
  dimension?: Dimension;
}>`
  flex-shrink: 0;
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};
  height: ${(p) => (p.dimension === 'm' ? '24px' : '20px')};

  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: ${(p) => (p.dimension === 'm' ? '36px' : '32px')};
      height: ${(p) => (p.dimension === 'm' ? '36px' : '32px')};
      background-color: ${(p) => p.theme.color['Opacity/Hover']};
    }
  }
`;

const TreeItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.li<{ isOpened?: boolean; dimension?: Dimension; level: number }>`
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${(p) => (p.dimension === 'm' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short'])};
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

const StyledCheckbox = styled(Checkbox)`
  margin: 2px;
  margin-right: 16px;
  flex-shrink: 0;
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
        {node.children && (
          <ChevronWrapper data-key={node.id} isOpened={node.expanded} dimension={dimension} onClick={onButtonClick}>
            <Chevron data-key={node.id} $isOpened={node.expanded} dimension={dimension} />
          </ChevronWrapper>
        )}
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
