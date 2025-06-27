import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const HintClassNameTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        На Hint, созданный через портал, добавляется класс через пропс className.
      </T>
      <Hint
        {...props}
        className="custom-hint-class"
        renderContent={() => text}
        anchorId="hint-class1"
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
          aria-describedby="hint-class1"
        />
      </Hint>
    </ThemeProvider>
  );
};
