import type { HTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import { ReactElement, UIEvent, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';

export type MenuDimensions = 'l' | 'm' | 's';

export const menuListHeights = css<{ dimension?: MenuDimensions }>`
  max-height: ${({ dimension }) => {
    switch (dimension) {
      case 'l':
        return `${48 * 6}px`;
      case 'm':
        return `${40 * 6}px`;
      case 's':
        return `${32 * 6}px`;
      default:
        return `${48 * 6}px`;
    }
  }};
`;

const Wrapper = styled.div<{ dimension?: MenuDimensions }>`
  pointer-events: initial;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: 4px;
  ${(p) => p.theme.shadow['Shadow 08']}
  max-width: calc(100vw - 32px);
  border-color: transparent;
  ${menuListHeights};
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 8px 0;
  appearance: none;
  flex: 0 0 auto;
  border: none;
`;

const StyledInput = styled.input`
  appearance: none;
  margin: 0;
  position: absolute;
  //top: 0;
  //left: 0;
  //transform: translate(-50%, -50%);
  height: 100%;
`;

const RadioWrapper = styled.div`
  position: relative;
`;

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Элементы содержимого */
  children: ReactNode;
  /** Активная секция Menu */
  selected?: string;

  onSelectItem?: (value: string) => void;
}

export const Menu = React.forwardRef<HTMLDivElement | null, MenuProps>(
  ({ children, dimension = 'l', selected = '', onSelectItem, ...props }, ref) => {
    const [hovered, setHovered] = React.useState<string | undefined>(selected);
    const [mySelected, setSelected] = useState<string | undefined>(selected);
    const fieldsetRef = React.useRef<HTMLFieldSetElement | null>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const activeOption = e.currentTarget.id;
      const code = keyboardKey.getCode(e);
      switch (code) {
        case keyboardKey[' ']:
        case keyboardKey.Enter: {
          if (mySelected !== activeOption) {
            setSelected(activeOption);
            if (onSelectItem) onSelectItem(activeOption);
          }
          e.preventDefault();
          break;
        }
      }
    };

    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const activeOption = e.currentTarget.id;
      const input = e.currentTarget.querySelector('input[type="radio"]');
      if (hovered !== activeOption) {
        setHovered(activeOption);
        (input as HTMLInputElement)?.focus();
      }
    };

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const activeOption = e.currentTarget.id;
      if (selected !== activeOption) {
        setSelected(activeOption);
        if (onSelectItem) onSelectItem(activeOption);
      }
      const input = e.currentTarget.closest('.radio-wrapper')?.querySelector('input[type="radio"]');
      (input as HTMLInputElement)?.focus();
    };

    const decorateHandlers = <T extends UIEvent>(handlers: Array<React.EventHandler<T>>) => {
      return function (e: T) {
        handlers.filter((item) => item).forEach((item) => item(e));
      };
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const activeOption = e.currentTarget.id;
      setHovered(activeOption);
    };

    const getClonedChild = (child: ReactElement) => {
      const clonedChild = React.cloneElement(child, {
        hovered: hovered === child.props.id,
        selected: mySelected === child.props.id,
        onClick: decorateHandlers([clickHandler, child.props.onClick]),
        ...child.props,
      });

      return (
        <RadioWrapper id={child.props.id} onMouseMove={mouseMoveHandler} className="radio-wrapper">
          <StyledInput
            type="radio"
            name="radio-set"
            id={child.props.id}
            onChange={changeHandler}
            onKeyDown={handleKeyDown}
            checked={child.props.id === hovered}
            disabled={child.props.disabled}
          />
          <label htmlFor={child.props.id}>{clonedChild}</label>
        </RadioWrapper>
      );
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
          const detectedSubGroup = child.props.children?.some?.((element: ReactElement) => Array.isArray(element));

          if (detectedSubGroup) {
            return child.props.children.flat().map((child: ReactElement) => {
              return getClonedChild(child);
            });
          }

          return getClonedChild(child);
        }
        return child;
      });
    };

    useLayoutEffect(() => {
      const selectedItem =
        fieldsetRef.current?.querySelector('input[type="radio"]:checked') ||
        fieldsetRef.current?.querySelector('input[type="radio"]:not([disabled])');

      if (!hovered) setHovered((selectedItem as HTMLInputElement)?.id);
      (selectedItem as HTMLInputElement)?.focus();
    }, []);

    return (
      <Wrapper ref={ref} {...props}>
        <Fieldset ref={fieldsetRef}>{renderChildrenDropDown()}</Fieldset>
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
