import styled, { css } from 'styled-components';
import { Divider } from '#src/components/Divider';
import { TextButton } from '#src/components/TextButton';
import { Button } from '#src/components/Button';

const ActionsPanelDiv = styled.div`
  box-sizing: border-box;
  margin: 0 16px 16px 16px;
  height: 48px;
`;

const PanelContent = styled.div<{
  $actionsPanelCssMixin?: ReturnType<typeof css>;
}>`
  display: flex;

  ${(p) => p.$actionsPanelCssMixin}
`;

export interface ActionsPanelProps {
  actionsPanelCssMixin?: ReturnType<typeof css>;
  children: React.ReactNode;
}

export const ActionsPanel = ({ actionsPanelCssMixin: actionsPanelCssMixin, children, ...props }: ActionsPanelProps) => {
  return (
    <ActionsPanelDiv {...props}>
      <Divider dimension="s" />
      <PanelContent $actionsPanelCssMixin={actionsPanelCssMixin}>{children}</PanelContent>
    </ActionsPanelDiv>
  );
};

const TodayTextButton = styled(TextButton)`
  margin-top: 21px;
`;

export interface PanelWithTodayButtonProps {
  onTodayButtonMouseDown: React.MouseEventHandler;
}

export const PanelWithTodayButton = ({ onTodayButtonMouseDown }: PanelWithTodayButtonProps) => {
  const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onTodayButtonMouseDown(e);
  };
  return (
    <ActionsPanel>
      <TodayTextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
    </ActionsPanel>
  );
};

const ClearTextButton = styled(TextButton)`
  margin-top: 21px;
`;

const mixin = css`
  width: 100%;
  justify-content: space-between;
`;

const RightButtonsBlock = styled.div`
  display: flex;
`;

const CancelTextButton = styled(TextButton)`
  margin-top: 21px;
  margin-right: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

export const PanelWithOkButton = () => {
  return (
    <ActionsPanel actionsPanelCssMixin={mixin}>
      <ClearTextButton dimension="s" text="Очистить" />
      <RightButtonsBlock>
        <CancelTextButton dimension="s" text="Отменить" />
        <StyledButton dimension="s">Ok</StyledButton>
      </RightButtonsBlock>
    </ActionsPanel>
  );
};
