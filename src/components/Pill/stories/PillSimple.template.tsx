import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { Pill, Pills } from '@admiral-ds/react-ui';
import type { Color } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Error':
      return 'Error/Error 60 Main';
    case 'Success':
      return 'Success/Success 50 Main';
    case 'Special':
      return 'Purple/Purple 60 Main';
    case 'Warning':
      return 'Warning/Warning 50 Main';
    case 'Attention':
      return 'Attention/Attention 50 Main';
    default:
      return 'Neutral/Neutral 10';
  }
};

const getFontColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Attention':
      return 'Special/Dark Static Neutral 00';
    case 'Error':
    case 'Success':
    case 'Special':
    case 'Warning':
      return 'Special/Static White';
    default:
      return 'Neutral/Neutral 90';
  }
};

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
`;

const stylesByStatusCssMixin = css<{ $status?: Status }>`
  background-color: ${(p) => p.theme.color[getBackgroundColorByStatus(p.$status)]};
  color: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
  }
`;

export const PillSimpleTemplate = (props: any) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(props.borderRadiusKind)}>
        <WrapperVertical>
          <Desc>
            Компонент Pills - визуальный индикатор для обозначения статуса какого-либо элемента для быстрой
            идентификации. Компонент предназначен для максимальной гибкости в дизайне, для остальных случаев используйте
            компонент Tag.
          </Desc>
          <Desc>
            Компонент может быть с иконкой или без. Фон компонента и текст с иконками можно окрашивать в произвольные
            цвета из палитры. Следите за читаемостью текста, не все комбинации цвета обеспечивают достаточный контраст
            между текстом и фоном. Отдавайте предпочтения контрастным Main-цветам. Всегда думайте как различные цветовые
            сочетания будут выглядеть в темной теме, назначайте статичные цвета, где это необходимо.
          </Desc>
          <Desc>
            В данном примере заданы варианты статусов с определенными цветами фона и текста (StatusPill). В даьнейшем
            они использованы для создания Pill с дропдауном и Nested Pills.
          </Desc>
          <Pills>
            <StatusPill $status="Success">
              <HeartOutlinePillIcon />
              <span>Playground</span>
            </StatusPill>
            <StatusPill $status="Error">Playground</StatusPill>
            <StatusPill $status="Warning">Playground</StatusPill>
            <StatusPill $status="Special">Playground</StatusPill>
            <StatusPill $status="Attention">Playground</StatusPill>
            <StatusPill>Playground</StatusPill>
          </Pills>
        </WrapperVertical>
      </ThemeProvider>
    </>
  );
};
