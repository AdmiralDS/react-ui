import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconPlacement, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const IconPlacementPlaygroundTemplate = ({
  dimension = 'lBig',
  disabled = false,
  highlightFocus = false,
  ...props
}: IconPlacementProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    console.log(`Current border ${theme.shape.borderRadiusKind}`);
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperVertical>
        <T font="Body/Body 1 Short" as="div">
          Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов.
          По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable.
        </T>
        <T font="Body/Body 1 Short" as="div">
          Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement
          применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство
          внутри компонентов.
        </T>
        <T font="Body/Body 1 Short" as="div">
          У компонента есть три размера иконки: L 24, M 20 и S 16. У размеров L и M два размера Hover-круга для
          различных ситуаций, что бы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в
          названии вариантов компонента как Big, малые — Small.
        </T>
        <IconPlacement {...props} dimension={dimension} disabled={disabled} highlightFocus={highlightFocus}>
          <CloseOutline />
        </IconPlacement>
      </WrapperVertical>
    </ThemeProvider>
  );
};
