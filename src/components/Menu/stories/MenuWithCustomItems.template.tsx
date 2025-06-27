import styled from 'styled-components';
import { Menu, typography, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuModelItemProps, MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { useMemo } from 'react';

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
] as const;

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

type MyMenuItemProps = React.ComponentPropsWithoutRef<'div'> &
  RenderOptionProps & {
    text: string;
    success?: boolean;
  };

//<editor-fold desc="MyMenuItem">
const MyItem = styled.div<{
  selected?: boolean;
  hovered?: boolean;
  width?: number;
  $success?: boolean;
  $dimension?: RenderOptionProps['dimension'];
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
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      case 'l':
      default:
        return '12px 16px';
    }
  }};
  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  background: ${({ theme, selected }) =>
    selected
      ? `var(--admiral-color-Opacity_Focus, ${theme.color['Opacity/Focus']})`
      : `var(--admiral-color-Special_ElevatedBG, ${theme.color['Special/Elevated BG']})`};

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: ${({ theme, selected }) =>
      selected
        ? `var(--admiral-color-Opacity_Focus, ${theme.color['Opacity/Focus']})`
        : `var(--admiral-color-Special_ElevatedBG, ${theme.color['Special/Elevated BG']})`};
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  &&[data-hovered='true'] {
    background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    color: ${({ theme, $success }) =>
      $success
        ? `var(--admiral-color-Success_Success70, ${theme.color['Success/Success 70']})`
        : `var(--admiral-color-Magenta_Magenta60Main, ${theme.color['Magenta/Magenta 60 Main']})`};
  }

  color: ${({ theme, $success }) =>
    $success
      ? `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`
      : `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})`};
`;

const MyMenuItem = ({
  text,
  onHover,
  onClick,
  disabled,
  hovered,
  selected = false,
  success = false,
  dimension,
  onLeave,
  hasSubmenu,
  ...props
}: MyMenuItemProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onHover?.(e);
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
      $dimension={dimension}
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
  const model = useMemo(() => {
    return STORY_ITEMS.map<MenuModelItemProps>((item) => ({
      id: item.id,
      render: (options) => <MyMenuItem success={item.id === '3'} {...options} key={item.id} text={item.label} />,
      disabled: item.value === 4,
    }));
  }, []);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с использованием собственных пунктов.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} defaultSelected={'4'} />
      </Wrapper>
    </>
  );
};
