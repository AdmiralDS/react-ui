import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';

const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  return (
    <>
      <Tags>
        <Tag onClick={clickHandler} kind={{ background: '#E052BD' }}>
          Magenta
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{ background: '#EAFAF9', border: '#4AD2CA', backgroundHover: '#7EFFDB' }}
        >
          Turquoise
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{ background: '#FBE9F7', border: '#E052BD', backgroundHover: '#D59BF6' }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: '#E052BD' }}>Magenta</Tag>
        <Tag statusViaBackground kind={{ background: '#EAFAF9', border: '#4AD2CA' }}>
          Turquoise
        </Tag>
        <Tag statusViaBackground kind={{ background: '#FBE9F7', border: '#E052BD' }}>
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
