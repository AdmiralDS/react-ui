import styled, { css } from 'styled-components';
import { skeletonMixin } from '#src/components/input/Container';
import type { ComponentDimension, InputStatus } from '../types';
import { mediumGroupBorderRadius } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { BorderedDivStyles, InputBorderedDiv } from '../TextInput';

const iconSizeValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};

const containerPadding = css<{ $dimension?: ComponentDimension }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'xl':
        return '16px 16px';
      case 's':
        return '6px 12px';
      default:
        return '8px 16px';
    }
  }};
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

export const WrapperOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-right: 4px;
  flex-grow: 1;
`;

const IconPanel = styled.div<{ $disabled?: boolean; $dimension?: ComponentDimension }>`
  display: flex;
  align-items: flex-start;

  & > svg {
    border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }
  }
`;

export const Container = styled.div<{
  disabled?: boolean;
  $skeleton?: boolean;
  $status?: InputStatus;
  readOnly?: boolean;
  $dimension?: ComponentDimension;
}>`
  position: relative;
  display: flex;
  column-gap: 8px;
  align-items: stretch;
  overflow: hidden;
  border: none;
  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};

  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});

  &[data-read-only],
  &[data-disabled] {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }

  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}
  ${({ $skeleton }) => $skeleton && skeletonMixin};
  ${containerPadding};
  ${BorderedDivStyles}
`;

export const Input = styled.input<{ $dimension?: ComponentDimension }>`
  outline: none;
  appearance: none;
  border-radius: inherit;
  box-sizing: border-box;
  flex: 1 1 48px;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:user-invalid + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  &&&:user-invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  &&&:user-invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  ${ieFixes}
`;

export const IconPanelBefore = styled(IconPanel)`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const IconPanelAfter = styled(IconPanel)`
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;
