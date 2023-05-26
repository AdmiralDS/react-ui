import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeTimeInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  DateTimeSeparator,
  Field,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import type { FieldProps, InputStatus, ComponentDimension } from '@admiral-ds/react-ui';
import { DataAttributesDescription } from '#src/components/form/common';

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export default {
  title: 'Admiral-2.1/Form Field/DateTimeField',
  component: Field,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=112005%3A67969',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    maxLength: {
      type: { name: 'number', required: false },
    },
    extraText: {
      type: 'string',
    },
    prefixValue: {
      type: 'string',
    },
    suffixValue: {
      type: 'string',
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
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    status: {
      options: INPUT_STATUS_VALUES,
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
  },
} as ComponentMeta<typeof Field>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const Template1: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="Введите дату">
        <DateTimeContainer>
          <DateTimeDateInput dropContainerClassName="dateDropContainerClass" />
          <DateTimeSeparator />
          <DateTimeTimeInput dropContainerClassName="timeDropContainerClass" />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};

const Template2: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="Disabled control" disabled>
        <DateTimeContainer disabled>
          <DateTimeDateInput disabled />
          <DateTimeSeparator disabled />
          <DateTimeTimeInput disabled />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};

const Template3: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="read only control" readOnly>
        <DateTimeContainer readOnly>
          <DateTimeDateInput defaultValue="12.10.2022" readOnly />
          <DateTimeSeparator readOnly />
          <DateTimeTimeInput defaultValue="12:10" readOnly />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};

const Template4: ComponentStory<typeof Field> = (props: DateTimeFieldProps) => {
  const [dateTimeStatus, setDateTimeStatus] = React.useState<InputStatus | undefined>(props.status);
  const [additionalText, setAdditionalText] = React.useState<string>('');

  React.useEffect(() => {
    if (props.disabled || props.readOnly) {
      setAdditionalText('');
      return;
    }
    setAdditionalText('Additional text');
  }, [props.disabled, props.readOnly]);

  React.useEffect(() => {
    if (props.disabled || props.readOnly) {
      return;
    }
    switch (props.status) {
      case 'success':
        setDateTimeStatus('success');
        break;
      case 'error':
        setDateTimeStatus('error');
        break;
    }
    setAdditionalText('Additional text');
  }, [props.status]);

  return (
    <DisplayContainer>
      <Field
        label="Status control"
        status={dateTimeStatus}
        extraText={additionalText}
        disabled={props.disabled}
        readOnly={props.readOnly}
      >
        <DateTimeContainer status={dateTimeStatus} disabled={props.disabled} readOnly={props.readOnly}>
          <DateTimeDateInput
            defaultValue="12.10.2022"
            status={dateTimeStatus}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dimension={props.dimension}
          />
          <DateTimeSeparator status={dateTimeStatus} disabled={props.disabled} readOnly={props.readOnly} />
          <DateTimeTimeInput
            defaultValue="12:10"
            status={dateTimeStatus}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dimension={props.dimension}
          />
        </DateTimeContainer>
      </Field>
    </DisplayContainer>
  );
};

export const DateTimeField1 = Template1.bind({});
DateTimeField1.storyName = 'DateTimeField example';

export const DateTimeField2 = Template2.bind({});
DateTimeField2.storyName = 'DateTimeField disabled example';

export const DateTimeField3 = Template3.bind({});
DateTimeField3.storyName = 'DateTimeField read only example';

export const DateTimeField4 = Template4.bind({});
DateTimeField4.args = {
  status: 'success',
};
DateTimeField4.storyName = 'DateTimeField status example';
