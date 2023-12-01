import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxComponent, T } from '@admiral-ds/react-ui';
import type { CheckboxComponentProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 66px;
  }
  > * {
    flex: 0 0 auto;
  }
`;

export const CheckboxComponentDemoTemplate = ({
  themeBorderKind,
  ...props
}: CheckboxComponentProps & { themeBorderKind?: BorderRadiusType }) => {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);
  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
        <Container>
          <T font="Header/H6" as="div">
            Состояния
          </T>
          <Row>
            <CheckboxComponent
              {...props}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <CheckboxComponent dimension="s" />
            <T font="Body/Body 1 Long" as="div">
              Default
            </T>
          </Row>
          <Row>
            <CheckboxComponent indeterminate />
            <CheckboxComponent dimension="s" indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Частично выбранный
            </T>
          </Row>
          <Row>
            <CheckboxComponent disabled />
            <CheckboxComponent dimension="s" disabled />
            <T font="Body/Body 1 Long" as="div">
              Disable
            </T>
          </Row>
          <Row>
            <CheckboxComponent disabled defaultChecked />
            <CheckboxComponent dimension="s" disabled defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Disable active
            </T>
          </Row>
          <Row>
            <CheckboxComponent error />
            <CheckboxComponent dimension="s" error />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Состояние ошибки
            </T>
          </Row>
          <Row>
            <CheckboxComponent readOnly />
            <CheckboxComponent dimension="s" readOnly />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Readonly
            </T>
          </Row>
          <Row>
            <CheckboxComponent readOnly defaultChecked />
            <CheckboxComponent dimension="s" readOnly defaultChecked />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Readonly active
            </T>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
