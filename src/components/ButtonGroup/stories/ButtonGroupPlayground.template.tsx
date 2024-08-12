import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  ButtonGroup,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const ButtonGroupPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <ButtonGroup {...props}>
      <Button dimension="l">Button 56</Button>
      <Button dimension="m">Button 56</Button>
      <Button dimension="s">Button 56</Button>
    </ButtonGroup>
    <Separator height={40} />
    <NotificationItem displayStatusIcon>
      <NotificationItemTitle>Рекомендации</NotificationItemTitle>
      <NotificationItemContent>
        <li>
          Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они
          стоят рядом.
        </li>
        <Separator height={8} />
        <li>Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.</li>
        <Separator height={8} />
        <li>Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.</li>
        <Separator height={8} />
        <li>
          Нельзя использовать в группе кнопки с разными включенными опциями. Если есть иконка, то она во всех кнопках.
        </li>
      </NotificationItemContent>
    </NotificationItem>
  </ThemeProvider>
);
