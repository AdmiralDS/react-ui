import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useRef } from 'react';
import { IconButton } from '#src/components/IconButton';
import { ReactComponent as SearchOutline } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { refSetter } from '#src/components/common/utils/refSetter';
import { SearchInput } from '#src/components/GroupActionsPane/SearchInput';
import styled from 'styled-components';

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  dimension?: 's' | 'l';
  opened?: boolean;
  searchValue?: string;
  onChangeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenSearch: () => void;
  onCloseSearch: () => void;
}

const StyledIconButton = styled(IconButton)`
  &:focus-visible {
    z-index: 1;
  }
`;

export const SearchBlock = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  (
    { dimension = 'l', opened = true, searchValue = '', onOpenSearch, onCloseSearch, onChangeSearchValue, ...props },
    ref,
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleBtnClick = () => {
      if (!opened) {
        onOpenSearch();
      }
    };

    const handleInputFocus = () => {
      if (!opened && !!searchValue) {
        onOpenSearch();
      }
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.relatedTarget !== buttonRef.current) {
        onCloseSearch();
      }
    };

    const handleButtonBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      if (inputRef.current && e.relatedTarget !== inputRef.current && opened) {
        onCloseSearch();
      }
    };

    const visibleInput = opened || !!searchValue;
    const collapsedInput = !opened && !!searchValue;

    return (
      <>
        {visibleInput && (
          <SearchInput
            ref={inputRef}
            dimension={dimension}
            autoFocus
            tabIndex={0}
            collapsed={collapsedInput}
            value={searchValue}
            onChange={onChangeSearchValue}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />
        )}
        <StyledIconButton
          ref={refSetter(ref, buttonRef)}
          dimension={dimension}
          onClick={handleBtnClick}
          onBlur={handleButtonBlur}
          {...props}
        >
          <SearchOutline />
        </StyledIconButton>
      </>
    );
  },
);
