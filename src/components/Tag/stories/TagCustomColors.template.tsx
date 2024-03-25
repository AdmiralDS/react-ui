import * as React from 'react';
import { Tag, Tags, LIGHT_THEME } from '@admiral-ds/react-ui';
import { useTheme } from 'styled-components';

const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;
  return (
    <>
      <Tags>
        <Tag
          onClick={clickHandler}
          kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}
        >
          Purple
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
            border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
            backgroundHover: `var(--admiral-color-Teal_Teal20, ${theme.color['Teal/Teal 20']})`,
          }}
        >
          Teal
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
            border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
            backgroundHover: `var(--admiral-color-Magenta_Magenta20, ${theme.color['Magenta/Magenta 20']})`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}>
          Purple
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
            border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
          }}
        >
          Teal
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
            border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
