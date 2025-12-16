import type { css } from 'styled-components';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';

export const MainLabel = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;

  && {
    overflow-wrap: break-word;
  }

  &&& {
    ${(p) => p.$cssMixin && p.$cssMixin}
  }
`;
export const AdditionalLabel = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 50%;
  text-align: right;
  margin-left: 8px;

  && {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  &&& {
    ${(p) => p.$cssMixin && p.$cssMixin}
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  text-align: left;
  min-width: 0;
  ${typography['Body/Body 2 Short']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-focus-within] & {
    color: ${(p) =>
      p.disabled ? '' : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  }
  [data-required-within] &:is(label)[required] ${MainLabel}:first-child::after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }
  margin-bottom: 8px;
`;

Label.displayName = 'Label';
