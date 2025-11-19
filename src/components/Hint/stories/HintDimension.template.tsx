import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const StyledButton = styled(Button)`
  padding: 4px;
`;
const Separator = styled.div`
  height: 8px;
`;

export const HintDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Hint имеет три фиксированных по ширине размера: S - 280px, M - 384px и L - 488px (по умолчанию), которые
        используются в зависимости от предполагаемого объема текста. Пользователь также может задавать кастомную ширину
        компонента напрямую через параметр style или используя classname.
        <Separator />
        На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства с
        учетом стандартных отступов по бокам.
        <Separator />
        Высота компонента настраивается автоматически при задании контента. Максимальная высота компонента – 320px,
        после чего у контента появляется вертикальный скролл.
      </T>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...props}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="dim_l"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_l">
            Open Hint L
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          anchorId="dim_m"
          dimension="m"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_m">
            Open Hint M
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="dim_s"
          dimension="s"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_s">
            Open Hint S
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          anchorId="width_custom"
          style={{ width: '500px' }}
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="width_custom-pos">
            Open Hint with custom width
          </StyledButton>
        </Hint>
      </div>
    </ThemeProvider>
  );
};
