import { Chips } from '#src/components/Chips';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { MultiInput } from '#src/components/input/MultiInput';
import { Menu } from '#src/components/Menu';
import { mediumGroupBorderRadius } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import styled, { css } from 'styled-components';

const ROW_HEIGHT = 24;
const ROW_GAP = 4;

const ShadowContainerMixin = css`
  ${typography['Body/Body 1 Short']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  overflow: auto;
`;

export const StyledMenu = styled(Menu)`
  ${ShadowContainerMixin}
`;

const rowHeightStyle = css<{
  $opened?: boolean;
  $minRowCount?: number;
  $maxRowCount?: number;
}>`
  .wrapper-options {
    min-height: ${({ $minRowCount }) => {
      if (!$minRowCount) return `${ROW_HEIGHT}px`;
      return `${ROW_HEIGHT * $minRowCount + ($minRowCount - 1) * ROW_GAP}px`;
    }};

    max-height: ${({ $maxRowCount, $opened }) => {
      if ($opened) return 'none';
      if (!$maxRowCount) return 'none';
      return `${ROW_HEIGHT * $maxRowCount + ($maxRowCount - 1) * ROW_GAP}px`;
    }};

    overflow-y: ${({ $opened, $maxRowCount }) => {
      // В открытом состоянии показываем все чипсы (без ограничений)
      if ($opened) return 'visible';
      // В закрытом состоянии при maxRowCount скрываем переполнение и показываем +N
      if ($maxRowCount) return 'hidden';
      return 'visible';
    }};
  }
`;

export const StyledMultiInput = styled(MultiInput)<{
  $hidden?: boolean;
  $opened?: boolean;
  $minRowCount?: number;
  $maxRowCount?: number;
}>`
  cursor: pointer;
  ${rowHeightStyle}

  & .wrapper-options input {
    ${(props) => props.$hidden && `display: none`};
  }

  /* Чтобы на "+N" не мигал курсор от контейнера (pointer) */
  & [data-testid='tree-select-overflow-chip'] {
    cursor: default;
  }
`;

const disabledChipStyle = css`
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

const hoverChipStyle = css`
  &:hover {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }
`;

export const StyledChip = styled(Chips)<{ readOnly?: boolean }>`
  ${({ disabled, readOnly }) => (disabled ? disabledChipStyle : readOnly ? null : hoverChipStyle)}
`;
