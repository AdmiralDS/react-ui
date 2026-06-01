import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Option, Select, Field, TextButton, MenuActionsPanel, T } from '@admiral-ds/react-ui';
import type { SelectProps, FieldProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

import { OPTIONS_CITIES } from '#src/components/input/Select/stories/data';

type SearchSelectWithChooseAllButtonTemplateProps = SelectProps &
  Pick<
    FieldProps,
    | 'label'
    | 'extraText'
    | 'status'
    | 'required'
    | 'disabled'
    | 'readOnly'
    | 'additionalLabel'
    | 'visibleLabelTooltips'
    | 'labelCssMixins'
    | 'displayInline'
  > & {
    restrictions?: number[];
    options?: string[];
  };

export const SearchSelectWithChooseAllButtonTemplate = ({
  placeholder = 'Города',
  label = 'Выберите города',
  options = OPTIONS_CITIES,
  restrictions = [2],
  extraText,
  status,
  required,
  disabled,
  readOnly,
  additionalLabel,
  visibleLabelTooltips,
  labelCssMixins,
  displayInline,
  ...props
}: SearchSelectWithChooseAllButtonTemplateProps) => {
  const [selectValues, setSelectValues] = React.useState<string[]>([]);
  const [_searchValue, setSearchValue] = React.useState<string>('');
  const [optionsWithoutDisabled, _setOptionsWithoutDisabled] = React.useState<string[]>([
    ...options.filter((_, ind) => !restrictions.includes(ind)),
  ]);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={restrictions.includes(ind)}>
        {option}
      </Option>
    ));
  };

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValues(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleChooseAll = () => {
    setSelectValues(optionsWithoutDisabled);
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Выбираются только доступные чекбоксы (не disabled) и группируются сверху.
        <Separator $height={8} />
        После выбора всех доступных вариантов кнопка "Выбрать все" становится неактивна
      </T>
      <Separator />
      <Field
        label={label}
        id="propsId"
        extraText={extraText}
        status={status}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        additionalLabel={additionalLabel}
        visibleLabelTooltips={visibleLabelTooltips}
        labelCssMixins={labelCssMixins}
        displayInline={displayInline}
      >
        <Select
          {...props}
          id="propsId"
          status={status}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          value={selectValues}
          onSelectedChange={handleSelectedChange}
          onInputChange={handleInputChange}
          dropContainerClassName="dropContainerClass"
          mode="searchSelect"
          multiple={true}
          moveSelectedOnTop={true}
          showCheckbox={true}
          displayClearIcon={true}
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton
                  onClick={handleChooseAll}
                  dimension={'m'}
                  appearance={'primary'}
                  disabled={selectValues.length === optionsWithoutDisabled.length}
                  text="Выбрать все"
                />
              </MenuActionsPanel>
            );
          }}
        >
          {renderOptions()}
        </Select>
      </Field>
    </>
  );
};
