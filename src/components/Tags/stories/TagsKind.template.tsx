import * as React from 'react';
import { Tag, Tags } from '@admiral-ds/react-ui';
import type { TagsProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

// eslint-disable-next-line no-console
const handleClickDangerTag = () => console.log('click danger tag');

export const TagsKindTemplate = ({
  kind = 'success',
  statusViaBackground,
  isBorderHidden,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagsProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <Tags
          dimension={props.dimension}
          statusViaBackground={statusViaBackground}
          isBorderHidden={isBorderHidden}
          width={50}
          kind={kind}
          // eslint-disable-next-line no-console
          onClick={(event) => console.log(`click tag with id: ${event.currentTarget.id}`)}
        >
          <Tag id="1">Tag in group</Tag>
          <Tag id="2">Tag in group</Tag>
          <Tag id="3">Tag in group</Tag>
          <Tag id="4" kind="neutral">
            Neutral
          </Tag>
          <Tag id="5" kind="success">
            Success
          </Tag>
          <Tag id="6" kind="primary">
            Primary
          </Tag>
          <Tag id="7" kind="danger" width="auto" onClick={handleClickDangerTag}>
            Danger
          </Tag>
          <Tag id="8" kind="warning">
            Warning
          </Tag>
        </Tags>
      </ThemeProvider>
    </>
  );
};
