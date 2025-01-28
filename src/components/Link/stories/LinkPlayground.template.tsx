import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import type { LinkProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const LinkPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: LinkProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Компонент Link используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.
        <Separator />
        Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).
      </T>
      <Separator $height={24} />
      <Link {...props} href="http://localhost:6006/?path=/story/example-link--playground">
        {props.children || 'Link'}
      </Link>
    </ThemeProvider>
  );
};
