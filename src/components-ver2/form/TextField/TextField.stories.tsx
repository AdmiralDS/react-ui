// import { HintDialog } from '#src/components/Hint/styled';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '#src/components-ver2/form/TextField';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as HelpSolidSVG } from '@admiral-ds/icons/build/service/HelpSolid.svg';
// import { Hint } from '#src/components/Hint';
import { T } from '#src/components-ver2/T';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

export default {
  title: 'Admiral-2.1/Form Field/TextField',
  component: TextField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    rows: {
      type: { name: 'number', required: false },
    },

    maxLength: {
      type: { name: 'number', required: false },
    },

    extraText: {
      type: 'string',
    },

    displayStatusIcon: {
      control: { type: 'boolean' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    disableCopying: {
      control: { type: 'boolean' },
    },

    displayCharacterCounter: {
      control: { type: 'boolean' },
    },

    displayInline: {
      control: { type: 'boolean' },
    },

    icons: {
      control: false,
    },

    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    autoHeight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TextField>;

const HelpSolid = styled(HelpSolidSVG)`
  & *[fill^='#'] {
    fill: ${(p) => p.theme.color.text.secondary};
  }
  [data-focus-within] & *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const InverseColor = styled(T)`
  color: ${(p) => p.theme.color.text.staticWhite};
`;

// const InverseBackgroundHint = styled(Hint)`
//   & ${HintDialog} {
//     background-color: ${(p) => p.theme.color.background.inversion};
//   }
// `;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof TextField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');
  const fieldRef = React.useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <DisplayContainer>
        <TextField {...props} value={localValue} onChange={handleChange} />
        <TextField required label="Поле необходимо заполнить" />
        <TextField
          ref={fieldRef}
          label="Напишите сочинение на заданную тему"
          // icons={
          //   <InverseBackgroundHint
          //     target={fieldRef}
          //     renderContent={() => (
          //       <InverseColor as="span" font="Body/Body 2 Long">
          //         Тема сочинения: "Как я использую компоненты?"
          //       </InverseColor>
          //     )}
          //   >
          //     <HelpSolid />
          //   </InverseBackgroundHint>
          // }
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const TextFieldInput = Template.bind({});

TextFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

TextFieldInput.storyName = 'Text field example';
