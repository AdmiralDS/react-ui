import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxComponent, Hint } from '@admiral-ds/react-ui';
import type { CheckboxComponentProps, CheckboxDimension, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as InfoSolidSVG } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;
  }
`;

const InfoSolid = styled(InfoSolidSVG)<{ $dimension: CheckboxDimension }>`
  margin-left: 5px;
  width: ${(props) => (props.$dimension === 'm' ? '24px' : '20px')};

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
  [data-focus-within] & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const CheckboxWithInformer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CheckboxComponentBaseTemplate = ({
  themeBorderKind,
  ...props
}: CheckboxComponentProps & { themeBorderKind?: BorderRadiusType }) => {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);

  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <Container>
        <CheckboxComponent
          {...props}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          data-container-id="checkboxFieldIdOne"
          id="checkboxFieldId"
          name="checkboxFieldName"
        >
          Управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent dimension="s" data-container-id="checkboxFieldIdTwo">
          Не управляемый маленький чекбокс
        </CheckboxComponent>
        <CheckboxComponent dimension="m" data-container-id="checkboxFieldIdThree">
          Двойная
          <br />
          строка
        </CheckboxComponent>
        <CheckboxComponent
          disabled
          defaultChecked
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdFour"
        >
          Disabled не управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent disabled data-container-id="checkboxFieldIdFive">
          Disabled не управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent readOnly defaultChecked data-container-id="checkboxFieldIdSix">
          Readonly не управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent
          readOnly
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdSeven"
        >
          Readonly не управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent
          error
          extraText={
            <span>
              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
            </span>
          }
          data-container-id="checkboxFieldIdEight"
        >
          Error не управляемый чекбокс
        </CheckboxComponent>
        <CheckboxComponent
          dimension="s"
          indeterminate
          extraText="Вариация с дополнительным текстом"
          data-container-id="checkboxFieldIdNine"
        >
          Не управляемый маленький чекбокс indeterminate
        </CheckboxComponent>
        <CheckboxWithInformer>
          <CheckboxComponent dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">
            Чекбокс с информером
          </CheckboxComponent>
          <Hint
            {...props}
            visible={visible1}
            onVisibilityChange={handleHintChange1}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid $dimension="m" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
        <CheckboxWithInformer>
          <CheckboxComponent dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">
            Маленький чекбокс с информером
          </CheckboxComponent>
          <Hint
            {...props}
            visible={visible2}
            onVisibilityChange={handleHintChange2}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid $dimension="s" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
      </Container>
    </ThemeProvider>
  );
};
