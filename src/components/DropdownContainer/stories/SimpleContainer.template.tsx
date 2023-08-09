import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, DropdownContainer, mediumGroupBorderRadius, typography } from '@admiral-ds/react-ui';
import type { DropdownContainerProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const StyledText = styled.div`
  ${typography['Body/Body 1 Short']}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  padding: 8px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
  overflow: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SimpleContainerTemplate = (props: DropdownContainerProps & { themeBorderKind?: BorderRadiusType }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { targetRef, ...other } = props;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Текст
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-end"
            targetRef={targetRef || buttonRef}
            onClickOutside={clickOutside}
            className="dropContainerClass"
            {...other}
          >
            <StyledText>
              Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться
            </StyledText>
          </DropdownContainer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};
