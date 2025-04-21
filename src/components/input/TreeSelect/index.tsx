import { forwardRef, useRef, useState } from 'react';
import type { ContainerProps } from '#src/components/input/MultiInput';
import { DropDownTree } from './DropDownTree';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { DropdownContainerProps, TreeSelectItemProps } from './types';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { InputIconButton } from '#src/components/InputIconButton';
import type { DataAttributes } from 'styled-components';
import { StyledMultiInput } from '#src/components/input/TreeSelect/styled';

export interface TreeSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | string[];
  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Значение по умолчанию для некотролируемого селекта */
  defaultValue?: string | string[];

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений */
  onClearIconClick?: () => void;

  /** Состояние skeleton */
  skeleton?: boolean;

  /**
   * Список опций дерева
   */
  items: Array<TreeSelectItemProps>;

  /** Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  openButtonPropsConfig?: (
    props: React.ComponentProps<typeof OpenStatusButton>,
  ) => Partial<React.ComponentProps<typeof OpenStatusButton> & DataAttributes>;
  /** Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton> & DataAttributes>;
}

export const TreeSelect = forwardRef<HTMLInputElement, TreeSelectProps>(
  ({ items, displayClearIcon, disabled, isLoading, readOnly, placeholder, openButtonPropsConfig }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOutside = (e: Event) => {
      if (e.target && inputRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpen(!open);
    };

    const getDropdownConfig = (config: DropdownContainerProps) => {
      return { ...config, onClickOutside: handleClickOutside, targetElement: inputContainerRef?.current };
    };

    const handleClick = () => {
      setOpen(!open);
    };

    const getInputContainerProps = (props: ContainerProps) => ({ ...props, ref: inputContainerRef });

    const openButtonProps = {
      $isOpen: open,
      onClick: handleClick,
      'aria-hidden': true,
    } satisfies React.ComponentProps<typeof OpenStatusButton>;

    const iconsAfter = [];
    if (!readOnly)
      iconsAfter.push(
        <OpenStatusButton
          data-disabled={disabled ? true : undefined}
          data-loading={isLoading ? true : undefined}
          {...openButtonProps}
          {...openButtonPropsConfig?.(openButtonProps)}
        />,
      );

    return (
      <>
        <StyledMultiInput
          containerPropsConfig={getInputContainerProps}
          ref={refSetter(ref, inputRef)}
          displayClearIcon={displayClearIcon}
          onClick={handleClick}
          iconsAfter={iconsAfter}
          placeholder={placeholder}
          style={{ cursor: 'pointer' }}
        />
        {open && <DropDownTree dropdownConfig={getDropdownConfig} items={items} />}
      </>
    );
  },
);

TreeSelect.displayName = 'TreeSelect';

export type { TreeSelectItemProps };
