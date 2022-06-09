import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckboxField } from '#src/components/form/CheckboxField';

import { withDesign } from 'storybook-addon-designs';
import type { CheckboxDimension } from '#src/components/Checkbox/CheckboxDimension';
import { ALL_DIMENSIONS_VALUES } from '#src/components/Checkbox/CheckboxDimension';
import styled, { ThemeProvider } from 'styled-components';
import { ReactComponent as InfoSolidSVG } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { Hint } from '#src/components/Hint';
import { Theme } from '#src/components/themes';

export default {
  title: 'Admiral-2.1/Form Field/CheckboxField',
  decorators: [withDesign],
  component: CheckboxField,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      options: [false, true],
      control: { type: 'radio' },
    },
    disabled: {
      options: [undefined, true],
      control: { type: 'radio' },
    },
    error: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof CheckboxField>;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 16px;
  }
`;

const InfoSolid = styled(InfoSolidSVG)<{ dimension: CheckboxDimension }>`
  margin-left: 5px;
  width: ${(props) => (props.dimension === 'm' ? '24px' : '20px')};

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

const CheckboxFieldDemo: ComponentStory<typeof CheckboxField> = (props) => {
  const args = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [checked, setChecked] = useState<boolean>(args.checked ?? false);
  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Container>
        <CheckboxField
          {...args}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        >
          Управляемый чекбокс
        </CheckboxField>
        <CheckboxField dimension="s">Не управляемый маленький чекбокс</CheckboxField>
        <CheckboxField disabled defaultChecked extraText="Дополнительный текст. Additional text">
          Disabled не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          error
          extraText={
            <span>
              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
            </span>
          }
        >
          Error не управляемый чекбокс
        </CheckboxField>
        <CheckboxField dimension="s" indeterminate extraText="Вариация с дополнительным текстом">
          Не управляемый маленький чекбокс indeterminate
        </CheckboxField>
        <CheckboxWithInformer>
          <CheckboxField dimension="m" extraText="Вариация с информером">
            Чекбокс с информером
          </CheckboxField>
          <Hint
            {...args}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid dimension="m" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
        <CheckboxWithInformer>
          <CheckboxField dimension="s" extraText="Вариация с информером">
            Маленький чекбокс с информером
          </CheckboxField>
          <Hint
            {...args}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid dimension="s" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
      </Container>
    </ThemeProvider>
  );
};

export const Example = CheckboxFieldDemo.bind({});
