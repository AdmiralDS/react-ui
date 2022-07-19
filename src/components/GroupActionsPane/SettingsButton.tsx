import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useRef, useState } from 'react';
import { IconButton } from '#src/components/IconButton';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { ReactComponent as SettingsOutline } from '@admiral-ds/icons/build/system/SettingsOutline.svg';
import { refSetter } from '#src/components/common/utils/refSetter';
import styled from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const StyledDrop = styled(DropdownContainer)`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${(props) => props.theme.shadow['Shadow 08']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  menu: React.ReactNode;
  buttonDimension?: 's' | 'l';
}

export const SettingsButton = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  ({ menu, buttonDimension = 'l', ...props }, ref) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleBtnClick = () => {
      setOpened((prevOpened) => !prevOpened);
    };

    const handleClickOutside = (e: Event) => {
      if (e.target && buttonRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpened(false);
    };

    return (
      <>
        <IconButton
          ref={refSetter(ref, buttonRef)}
          dimension={buttonDimension}
          // onKeyDown={handleKeyDown}
          onClick={handleBtnClick}
          {...props}
        >
          <SettingsOutline />
        </IconButton>
        {opened && (
          <StyledDrop targetRef={buttonRef} alignSelf={'flex-end'} onClickOutside={handleClickOutside}>
            {menu}
          </StyledDrop>
        )}
      </>
    );
  },
);
