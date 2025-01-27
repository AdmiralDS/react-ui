import * as React from 'react';
import { Hint, Button, TextButton, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

export const HintTextButtonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        В качества контента хинта может выступать любой ReactNode, например допускается использование TextButton внутри
        хинта. В случае если хинт содержит в себе TextButton, триггером его появления должен быть click.
      </T>
      <Separator height={24} />
      <Hint
        {...props}
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
