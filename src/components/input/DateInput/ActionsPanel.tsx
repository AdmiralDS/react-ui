import styled from 'styled-components';
import type { css } from 'styled-components';
import { Divider } from '#src/components/Divider';

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
