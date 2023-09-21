import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import type { LinkProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkPlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: LinkProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <T font="Body/Body 1 Short" as="div">
        Компонент Link используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.
      </T>
      <T font="Body/Body 1 Short" as="div">
        Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).
      </T>
      <Divider />
      <Link {...props} href="http://localhost:6006/?path=/story/example-link--playground">
        {props.children || 'Link'}
      </Link>
    </ThemeProvider>
  );
};
