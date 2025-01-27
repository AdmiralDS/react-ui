import * as React from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import {
  Menu,
  mediumGroupBorderRadius,
  LIGHT_THEME,
  getHighlightedFilteredOptions,
  keyboardKey,
  MenuActionsPanel,
  TextInput,
  TextButton,
  T,
} from '@admiral-ds/react-ui';
import type { MenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';
import { uid } from '#src/components/common/uid';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div`
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;

export const MenuActionsAddUserValueTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const initialButtonText = 'Добавить';
  const theme = useTheme() || LIGHT_THEME;

  const [options, setOptions] = React.useState([...STORY_ITEMS]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [buttonText, setButtonText] = React.useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
  const [active, setActive] = React.useState<string | undefined>(options[0].id);

  const model = React.useMemo(() => {
    return getHighlightedFilteredOptions(
      options,
      inputValue,
      theme.locales[theme.currentLocale].suggestInput.emptyMessage,
      props.dimension,
    );
  }, [props.dimension, options, inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    // prevent selecting option on Space press
    if (code === keyboardKey[' ']) {
      e.stopPropagation();
    }
  };

  const handleTextButtonClick = () => {
    const newId = uid();
    const newValue = Math.floor(Math.random());
    const newOption = { id: newId, label: inputValue, value: newValue };
    const newOptions = [newOption, ...options];
    setOptions(newOptions);
    setActive(newId);
  };

  React.useEffect(() => {
    if (inputValue === '') {
      setButtonText(initialButtonText);
      setButtonDisabled(true);
    } else {
      setButtonText(`${initialButtonText} «${inputValue}»`);
      setButtonDisabled(false);
    }
  }, [inputValue]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'l' ? 'm' : props.dimension;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с Actions и Search.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          active={active}
          onActivateItem={setActive}
          // eslint-disable-next-line no-console
          onSelectItem={(id) => console.log(`Selected id: ${id}`)}
          renderTopPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextInput
                  dimension={menuPanelContentDimension}
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={(...p) => {
                    props.onKeyDown?.(...p);
                    handleKeyDown(...p);
                  }}
                />
              </MenuActionsPanel>
            );
          }}
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton
                  text={buttonText}
                  disabled={buttonDisabled}
                  icon={<PlusOutline />}
                  dimension={menuPanelContentDimension}
                  onClick={handleTextButtonClick}
                />
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
