import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';

const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} kind={{ background: 'var(--admiral-color-Purple_Purple60Main)' }}>
          Purple
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: 'var(--admiral-color-Teal_Teal10)',
            border: 'var(--admiral-color-Teal_Teal50)',
            backgroundHover: 'var(--admiral-color-Teal_Teal20)',
          }}
        >
          Teal
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: 'var(--admiral-color-Magenta_Magenta10)',
            border: 'var(--admiral-color-Magenta_Magenta50)',
            backgroundHover: 'var(--admiral-color-Magenta_Magenta20)',
          }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: 'var(--admiral-color-Purple_Purple60Main)' }}>Purple</Tag>
        <Tag
          statusViaBackground
          kind={{ background: 'var(--admiral-color-Teal_Teal10)', border: 'var(--admiral-color-Teal_Teal50)' }}
        >
          Teal
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: 'var(--admiral-color-Magenta_Magenta10)',
            border: 'var(--admiral-color-Magenta_Magenta50)',
          }}
        >
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
