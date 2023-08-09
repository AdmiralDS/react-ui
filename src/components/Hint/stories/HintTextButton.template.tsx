import * as React from 'react';
import { Hint, Button, TextButton } from '@admiral-ds/react-ui';
import type { HintProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import styled, { ThemeProvider } from 'styled-components';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

export const HintTextButtonTemplate = (args: HintProps) => {
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
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
        visibilityTrigger="click"
        renderContent={() => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {text}
            <Separator height={4} />
            <TextButton appearance="primary" dimension="s" text="Text Button" />
          </div>
        )}
        anchorId="hint_textbutton"
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_textbutton"
        />
      </Hint>
    </ThemeProvider>
  );
};
