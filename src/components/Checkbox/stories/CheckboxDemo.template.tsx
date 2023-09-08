import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Checkbox, T } from '@admiral-ds/react-ui';
import type { CheckBoxProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

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

export const CheckboxDemoTemplate = (props: CheckBoxProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);
  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);
  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <Container>
          <T font="Header/H6" as="div">
            Состояния
          </T>
          <Row>
            <Checkbox
              {...props}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <Checkbox dimension="s" />
            <T font="Body/Body 1 Long" as="div">
              Default
            </T>
          </Row>
          <Row>
            <Checkbox indeterminate />
            <Checkbox dimension="s" indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Частично выбранный
            </T>
          </Row>
          <Row>
            <Checkbox disabled />
            <Checkbox dimension="s" disabled />
            <T font="Body/Body 1 Long" as="div">
              Disable
            </T>
          </Row>
          <Row>
            <Checkbox disabled defaultChecked />
            <Checkbox dimension="s" disabled defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Disable active
            </T>
          </Row>
          <Row>
            <Checkbox error />
            <Checkbox dimension="s" error />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Состояние ошибки
            </T>
          </Row>
          <Row>
            <Checkbox readOnly />
            <Checkbox dimension="s" readOnly />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Readonly
            </T>
          </Row>
          <Row>
            <Checkbox readOnly defaultChecked />
            <Checkbox dimension="s" readOnly defaultChecked />
            <T font="Body/Body 1 Long" forwardedAs="div">
              Readonly active
            </T>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
