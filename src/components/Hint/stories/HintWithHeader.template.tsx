import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const renderHintContent = () => {
  return (
    <div>
      <T font="Subtitle/Subtitle 3" forwardedAs="div" style={{ marginBottom: '4px' }}>
        Hint header
      </T>
      {text}
    </div>
  );
};

export const HintWithHeaderTemplate = (args: HintProps) => {
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
        renderContent={renderHintContent}
        anchorId="hint_click"
        visibilityTrigger="click"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_click"
        />
      </Hint>
    </ThemeProvider>
  );
};
