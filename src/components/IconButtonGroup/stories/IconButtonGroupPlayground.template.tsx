import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  IconButton,
  IconButtonGroup,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const IconButtonGroupPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
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
      </NotificationItemContent>
    </NotificationItem>
  </ThemeProvider>
);
