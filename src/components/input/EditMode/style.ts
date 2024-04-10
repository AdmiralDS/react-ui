import styled, { css } from 'styled-components';

import { Button } from '#src/components/Button';
import { TextInput } from '#src/components/input/TextInput';
import { TextArea } from '#src/components/input/TextArea';
import { typography } from '#src/components/Typography';

import { ReactComponent as EditSolid } from '@admiral-ds/icons/build/system/EditSolid.svg';
import { ReactComponent as SentOutline } from '@admiral-ds/icons/build/service/SentOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

const TypographyMixin = css`
  [data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
  }

  [data-dimension='s-bold'] & {
    ${typography['Subtitle/Subtitle 3']}
  }

  [data-dimension='m'] & {
    ${typography['Body/Body 1 Long']}
  }

  [data-dimension='m-bold'] & {
    ${typography['Subtitle/Subtitle 2']}
  }

  [data-dimension='xl'] & {
    ${typography['Header/H5']}
  }

  [data-dimension='xxl'] & {
    ${typography['Header/H4']}
  }
`;

export const EditInput = styled(TextInput)`
  flex: 1 1 auto;
  & input {
    ${TypographyMixin}
  }
`;

export const EditArea = styled(TextArea)`
  flex: 1 1 auto;
  & textarea,
  & :first-child {
    ${TypographyMixin}
  }
`;

export const EditButton = styled(Button)<{ $multiline: boolean }>`
  margin-left: 4px;
  flex-shrink: 0;
  ${(p) => p.$multiline && 'align-self: flex-start;'}
`;

export const multilineIcon = css`
  align-self: flex-start;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    margin-top: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    margin-top: 8px;
  }

  [data-dimension='xl'] &&& {
    margin-top: 14px;
  }

  [data-dimension='xxl'] &&& {
    margin-top: 16px;
  }
`;

const iconStyle = css`
  display: flex;
  flex-shrink: 0;
  user-select: none;
`;

export const EditIcon = styled(EditSolid)<{ $multiline: boolean }>`
  ${iconStyle}
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  cursor: pointer;

  [data-disabled='true'] & {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
  [data-disabled='false'] & {
    &:hover {
      & *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
      }
    }
  }

  ${(p) => p.$multiline && multilineIcon}
`;

export const ConfirmIcon = styled(SentOutline)`
  ${iconStyle}
`;

export const CancelIcon = styled(CloseOutline)`
  ${iconStyle}
`;

export const Wrapper = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  ${({ $cssMixin }) => $cssMixin || ''};
`;

const MultilineMixin = css`
  overflow-wrap: anywhere;
  height: auto;
  white-space: normal;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  [data-dimension='xl'] &&& {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  [data-dimension='xxl'] &&& {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

const SinglelineMixin = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  [data-dimension='s'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='s-bold'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='m'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='m-bold'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='xl'] &&& {
    height: 56px;
    line-height: 56px;
  }

  [data-dimension='xxl'] &&& {
    height: 56px;
    line-height: 56px;
  }
`;

export const Text = styled.div<{ $multiline?: boolean }>`
  display: block;

  align-items: center;
  cursor: text;
  margin-right: 12px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${TypographyMixin};
  ${(p) => (p.$multiline ? MultilineMixin : SinglelineMixin)}

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
  }

  [data-disabled='false'] & {
    &:hover {
      & + ${EditIcon} *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
      }
    }
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }
`;
