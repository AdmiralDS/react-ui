import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const HintBaseTemplate = (args: HintProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={swapBorder}>
      <Hint
        {...args}
        renderContent={() => text}
        anchorId="hint_base"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          icon={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_base"
        />
      </Hint>
    </ThemeProvider>
  );
};
