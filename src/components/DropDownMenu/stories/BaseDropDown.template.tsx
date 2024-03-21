import * as React from 'react';
import type { KeyboardEventHandler, MouseEventHandler } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, DropDownItem, DropDownMenu } from '@admiral-ds/react-ui';
import type { DropDownMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const items = [
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
  { id: '6', label: 'Option six', value: 7 },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

export const BaseDropDownTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DropDownMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<number | string>('');
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === 32) {
      setSelected((e.target as HTMLElement).id);
      setOpen(false);
    } else if (e.keyCode === 27) {
      setOpen(false);
    }
  };

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    setSelected((e.target as HTMLElement).id);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ width: 'fit-content' }}>
        <Button ref={buttonRef} onClick={() => setOpen(!open)} style={{ margin: 'auto' }}>
          Нажми
        </Button>
        {open && (
          <DropDownMenu {...props} targetRef={buttonRef} alignSelf="flex-start" onClickOutside={() => setOpen(!open)}>
            {items.map((item) => {
              return (
                <DropDownItem
                  dimension={props.dimension}
                  id={item.id}
                  onMouseDown={handleClick}
                  selected={selected === item.id}
                  key={item.id}
                  onKeyDown={handleKeyDown}
                >
                  {item.label}
                </DropDownItem>
              );
            })}
          </DropDownMenu>
        )}
      </div>
    </ThemeProvider>
  );
};
