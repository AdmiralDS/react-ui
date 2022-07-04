import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '#src/components/IconButton';
import { ReactComponent as SearchOutline } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { refSetter } from '#src/components/common/utils/refSetter';
import { TextInput } from '#src/components/input';
import styled from 'styled-components';
import { SearchInput } from '#src/components/GroupActionsPane/SearchInput';

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonDimension?: 's' | 'l';
  onOpenSearch: (value: boolean) => void;
}

const StyledTextInput = styled(TextInput)`
  flex-grow: 1;
  border: none;
`;

export const SearchButton = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  ({ buttonDimension = 'l', onOpenSearch, ...props }, ref) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleBtnClick = () => {
      setOpened((prevOpened) => !prevOpened);
    };

    useEffect(() => {
      onOpenSearch(opened);
    }, [opened]);

    return (
      <>
        {opened && <SearchInput />}
        <IconButton
          ref={refSetter(ref, buttonRef)}
          dimension={buttonDimension}
          // onKeyDown={handleKeyDown}
          onClick={handleBtnClick}
          {...props}
        >
          <SearchOutline />
        </IconButton>
      </>
    );
  },
);
