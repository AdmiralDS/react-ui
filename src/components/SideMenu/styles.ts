import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemButton = styled.button<{ $selected?: boolean; $disabled?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  padding-left: 0;

  border: 0;
  background: ${({ $selected }) =>
    $selected ? 'var(--admiral-color-Primary_Primary10, rgba(22, 119, 255, 0.08))' : 'transparent'};
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  text-align: left;

  &:hover {
    background: ${({ $disabled, $selected }) =>
      $disabled
        ? 'transparent'
        : $selected
          ? 'var(--admiral-color-Primary_Primary10, rgba(22, 119, 255, 0.08))'
          : 'var(--admiral-color-Neutral_Neutral5, rgba(0,0,0,0.02))'};
  }

  &:focus-visible {
    outline: 2px solid var(--admiral-color-Primary_Primary60Main, #1677ff);
    outline-offset: -2px;
  }
`;

export const GroupButton = styled.button<{ $disabled?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  padding-left: 0;

  border: 0;
  background: transparent;
  color: inherit;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  text-align: left;

  &:hover {
    background: ${({ $disabled }) =>
      $disabled ? 'transparent' : 'var(--admiral-color-Neutral_Neutral5, rgba(0,0,0,0.02))'};
  }

  &:focus-visible {
    outline: 2px solid var(--admiral-color-Primary_Primary60Main, #1677ff);
    outline-offset: -2px;
  }
`;

export const Chevron = styled.span<{ $open?: boolean }>`
  display: inline-flex;
  width: 16px;
  justify-content: center;
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.15s ease;
  flex: 0 0 auto;
`;

export const LeftCluster = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
`;

export const RightCluster = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
`;

export const LabelText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
