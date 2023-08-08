import * as React from 'react';

import { Button, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { formDataToObject } from '#src/components/input/Select/stories/utils';
import { Form, FormValuesWrapper } from '#src/components/input/Select/stories/styled';
import { OPTIONS_SIMPLE } from '#src/components/input/Select/stories/data';

export const SearchSelectUncontrolledTemplate = (props: SelectProps) => {
  const [submitValues, setSubmitValues] = React.useState<null | Record<string, any>>(null);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formElem = evt.target as HTMLFormElement;

    if (formElem) {
      setSubmitValues(formDataToObject(new FormData(formElem)));
    }
  };

  return (
    <>
      <Form action="" onSubmit={onSubmit}>
        <Select {...props} name="myOwesomeField" mode="searchSelect" defaultValue={OPTIONS_SIMPLE[0]}>
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </Select>
        <Button type="submit" dimension="m">
          Cабмить меня, чего ты медлишь?!
        </Button>
        <FormValuesWrapper>
          {submitValues === null
            ? 'Здесь будут выводится значения, которые ты засабмитишь...'
            : JSON.stringify(submitValues)}
        </FormValuesWrapper>
      </Form>
    </>
  );
};
