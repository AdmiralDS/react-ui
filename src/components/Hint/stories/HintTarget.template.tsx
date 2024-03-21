import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const HintTargetTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button
        ref={btnRef}
        dimension="xl"
        appearance="primary"
        iconEnd={
          <Hint
            {...props}
            visible={visible}
            onVisibilityChange={handleVisibilityChange}
            renderContent={() => text}
            targetElement={btnRef.current}
            anchorId="hint_target"
          >
            <HelpOutline tabIndex={0} height={24} width={24} aria-label="Help Icon" aria-describedby="hint_target" />
          </Hint>
        }
      >
        Hover on icon
      </Button>
    </ThemeProvider>
  );
};
