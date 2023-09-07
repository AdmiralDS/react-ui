import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import type { LinkProps, Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkPlaygroundTemplate = (args: LinkProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 1 Short" forwardedAs="div">
        Компонент Link используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.
      </T>
      <T font="Body/Body 1 Short" forwardedAs="div">
        Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).
      </T>
      <Divider />
      <Link {...args} href="http://localhost:6006/?path=/story/example-link--playground">
        {args.children || 'Link'}
      </Link>
    </ThemeProvider>
  );
};
