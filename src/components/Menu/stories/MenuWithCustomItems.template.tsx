import * as React from 'react';
import styled from 'styled-components';
import type { HTMLAttributes } from 'react';
import { Menu, typography, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

interface MyMenuItemProps extends HTMLAttributes<HTMLElement>, RenderOptionProps {
  text: string;
  success?: boolean;
}

//<editor-fold desc="MyMenuItem">
const MyItem = styled.div<{
  selected?: boolean;
  hovered?: boolean;
  width?: number;
  $success?: boolean;
}>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  padding: 12px 16px;

  ${typography['Body/Body 1 Long']}

  background: ${({ theme, selected }) =>
    selected ? theme.color['Opacity/Focus'] : theme.color['Special/Elevated BG']};

  &&[data-disabled='true'] {
    cursor: default;
    background-color: ${({ theme, selected }) =>
      selected ? theme.color['Opacity/Focus'] : theme.color['Special/Elevated BG']};
    color: ${(p) => p.theme.color['Neutral/Neutral 30']};
  }

  &&[data-hovered='true'] {
    background-color: ${(p) => p.theme.color['Opacity/Hover']};
    color: ${({ theme, $success }) =>
      $success ? theme.color['Success/Success 70'] : theme.color['Magenta/Magenta 60 Main']};
  }

  color: ${({ theme, $success }) =>
    $success ? theme.color['Success/Success 50 Main'] : theme.color['Purple/Purple 60 Main']};
`;

const MyMenuItem = ({
  text,
  onHover,
  onClick,
  disabled,
  hovered,
  selected = false,
  success = false,
  selfRef = undefined,
  hasSubmenu = false,
  ...props
}: MyMenuItemProps) => {
  const handleMouseMove = () => {
    onHover?.();
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) onClick?.(e);
  };

  return (
    <MyItem
      selected={selected}
      data-disabled={disabled}
      data-hovered={hovered}
      $success={success}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >
      {text}
    </MyItem>
  );
};
//</editor-fold>

export const MenuWithCustomItemsTemplate = (props: MenuProps) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MyMenuItem success={item.id === '3'} {...options} key={item.id} text={item.label} />
      ),
      disabled: item.value === 4,
    }));
  }, []);

  return (
    <>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} defaultSelected={'4'} />
      </Wrapper>
    </>
  );
};
