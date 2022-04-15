import { HintDialog } from '#src/components/Hint/style';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '#src/components/form/TextField';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { ReactComponent as HelpSolidSVG } from '@admiral-ds/icons/build/service/HelpSolid.svg';
import { Hint } from '#src/components/Hint';
import { T } from '#src/components/T';

export default {
  title: 'Form Field Components/TextField',
  component: TextField,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A61323',
    },
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

    readOnly: {
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

const InverseBackgroundHint = styled(Hint)`
  & ${HintDialog} {
    background-color: ${(p) => p.theme.color.background.inversion};
  }
`;

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
    <DisplayContainer>
      <TextField {...props} value={localValue} onChange={handleChange} />
      <TextField required label="Поле необходимо заполнить" />
      <TextField
        ref={fieldRef}
        label="Напишите сочинение на заданную тему"
        icons={
          <InverseBackgroundHint
            target={fieldRef}
            renderContent={() => (
              <InverseColor as="span" font="Body/Body 2 Long">
                Тема сочинения: "Как я использую компоненты?"
              </InverseColor>
            )}
          >
            <HelpSolid />
          </InverseBackgroundHint>
        }
      />
    </DisplayContainer>
  );
};

export const TextFieldInput = Template.bind({});

TextFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

TextFieldInput.storyName = 'Text field example';
