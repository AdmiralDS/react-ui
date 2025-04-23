import { forwardRef, useRef, useState } from 'react';
import { IconButton } from '#src/components/IconButton';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { ReactComponent as SettingsOutline } from '@admiral-ds/icons/build/system/SettingsOutline.svg';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { css } from 'styled-components';
import styled from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';

const StyledDrop = styled(DropdownContainer)`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 4px;
`;

export interface ColumnsButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  menu?: React.ReactNode;
  renderMenu?: (obj: { closeMenu: () => void }) => React.ReactNode;
  buttonDimension?: 's' | 'l';
  disabled?: boolean;
  dropContainerCssMixin?: ReturnType<typeof css>;
  dropContainerClassName?: string;
  dropContainerStyle?: React.CSSProperties;
}

export const SettingsButton = forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  (
    {
      menu,
      renderMenu,
      buttonDimension = 'l',
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const closeMenu = () => {
      setOpened(false);
      buttonRef.current?.focus();
    };

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
        <StyledIconButton
          ref={refSetter(ref, buttonRef)}
          dimension={buttonDimension}
          onClick={handleBtnClick}
          {...props}
        >
          <SettingsOutline />
        </StyledIconButton>
        {opened && (
          <StyledDrop
            targetElement={buttonRef.current}
            alignSelf={'flex-end'}
            onClickOutside={handleClickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            {renderMenu?.({ closeMenu }) ?? menu}
          </StyledDrop>
        )}
      </>
    );
  },
);
