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

export const TextButtonDimensionTemplate = (
  props: TextButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean },
) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind, props.CSSCustomProps)}>
      <WrapperButton>
        <div>
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} appearance="primary" />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconEnd={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} disabled={true} />
          <Separator />
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" />
        </div>
        <div>
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconEnd={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton
            dimension="m"
            text="Text Button"
            iconStart={<AttachFileOutline />}
            appearance="secondary"
            disabled
          />
          <Separator />
          <StyledText font="Body/Body 1 Long" forwardedAs="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="s" text="Text Button" appearance="secondary" />
        </div>
      </WrapperButton>
    </ThemeProvider>
  );
};
