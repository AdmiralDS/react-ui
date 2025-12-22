import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { Spinner, TextButton } from '@admiral-ds/react-ui';
import type { TextButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { ReactComponent as AddressBookOutline } from '@admiral-ds/icons/build/system/AddressBookOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

const mixin = css`
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;

export const TextButtonPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const textContainerProps = { 'data-testid': 'textContainer' };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TextButton
        {...props}
        text="Text Button"
        iconStart={<AttachFileOutline />}
        data-testid={'button-with-ellipsis'}
        textContainerPropsConfig={() => textContainerProps}
        style={{ maxWidth: 100 }}
      />
      <Separator />
      <TextButton
        {...props}
        text="Color from mixin"
        data-testid={'button-with-mixin'}
        iconEnd={<AttachFileOutline />}
        textCssMixin={mixin}
        textContainerPropsConfig={() => textContainerProps}
      />
      <Separator />
      <TextButton
        {...props}
        text="Button with 2 icons"
        iconStart={<AddressBookOutline />}
        iconEnd={<Spinner />}
        name={'custom-button'}
        data-testid={'text-button'}
        className={'custom-class'}
        aria-label={'some action'}
        onClick={() => console.log('button clicked')}
        textContainerPropsConfig={() => textContainerProps}
      />
    </ThemeProvider>
  );
};
