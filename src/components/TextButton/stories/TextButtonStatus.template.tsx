import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { TextButton, T } from '@admiral-ds/react-ui';
import type { TextButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
`;

export const TextButtonStatusTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: TextButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const textContainerProps = { 'data-testid': 'textContainer' };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperButton>
        <div>
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton
            dimension="m"
            text="Text Button"
            iconStart={<AttachFileOutline />}
            loading
            data-testid={'loading-status'}
            textContainerPropsConfig={() => textContainerProps}
          />
          <Separator />
          <TextButton
            dimension="m"
            text="Text Button"
            iconStart={<AttachFileOutline />}
            skeleton
            data-testid={'skeleton-status'}
            textContainerPropsConfig={() => textContainerProps}
          />
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} loading />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} skeleton />
          <Separator />
        </div>
        <div>
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" />
          <Separator />
          <TextButton dimension="m" text="Text Button" loading />
          <Separator />
          <TextButton dimension="m" text="Text Button" skeleton />
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" />
          <Separator />
          <TextButton dimension="s" text="Text Button" loading />
          <Separator />
          <TextButton dimension="s" text="Text Button" skeleton />
        </div>
      </WrapperButton>
    </ThemeProvider>
  );
};
