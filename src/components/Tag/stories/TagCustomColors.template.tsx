import * as React from 'react';
import { Tag, Tags, LIGHT_THEME } from '@admiral-ds/react-ui';
import { useTheme } from 'styled-components';

const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} kind={{ background: theme.color['Purple/Purple 60 Main'] }}>
          Purple
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: theme.color['Teal/Teal 10'],
            border: theme.color['Teal/Teal 50'],
            backgroundHover: theme.color['Teal/Teal 20'],
          }}
        >
          Teal
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: theme.color['Magenta/Magenta 10'],
            border: theme.color['Magenta/Magenta 50'],
            backgroundHover: theme.color['Magenta/Magenta 20'],
          }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: theme.color['Purple/Purple 60 Main'] }}>Purple</Tag>
        <Tag
          statusViaBackground
          kind={{ background: theme.color['Teal/Teal 10'], border: theme.color['Teal/Teal 50'] }}
        >
          Teal
        </Tag>
        <Tag
          statusViaBackground
          kind={{ background: theme.color['Magenta/Magenta 10'], border: theme.color['Magenta/Magenta 50'] }}
        >
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
