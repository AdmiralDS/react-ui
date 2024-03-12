import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const HintClickTemplate = ({
  themeBorderKind,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (visible) {
      setVisible(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Hint
        {...props}
        renderContent={() => text}
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
          onClick={handleButtonClick}
        />
      </Hint>
    </ThemeProvider>
  );
};
