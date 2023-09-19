import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { DropMenu, MenuItem, Pill, refSetter } from '@admiral-ds/react-ui';
import type { Theme, RenderOptionProps, Color } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as BonusOutline } from '@admiral-ds/icons/build/category/BonusOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Error':
      return 'Error/Error 60 Main';
    case 'Success':
      return 'Success/Success 50 Main';
    case 'Special':
      return 'Purple/Purple 60 Main';
    case 'Warning':
      return 'Warning/Warning 50 Main';
    case 'Attention':
      return 'Attention/Attention 50 Main';
    default:
      return 'Neutral/Neutral 10';
  }
};

const getFontColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Attention':
      return 'Special/Dark Static Neutral 00';
    case 'Error':
    case 'Success':
    case 'Special':
    case 'Warning':
      return 'Special/Static White';
    default:
      return 'Neutral/Neutral 90';
  }
};

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
`;

const stylesByStatusCssMixin = css<{ $status?: Status }>`
  background-color: ${(p) => p.theme.color[getBackgroundColorByStatus(p.$status)]};
  color: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
`;

const StatusPill = styled(Pill).attrs<{ $status?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
  }
`;

const StyledPillIcon = styled.div<{ $status?: Status }>`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${(p) => p.theme.color[getFontColorByStatus(p.$status)]};
    }
  }
`;

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};

interface PillMenuProps {
  options: Array<PillOptionProps>;
}

const PillMenu = React.forwardRef<HTMLDivElement, PillMenuProps>(({ options, ...props }, ref) => {
  const [selectedPill, setSelectedPill] = React.useState<PillOptionProps | undefined>(options[0]);

  const model = React.useMemo(() => {
    return options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [options]);

  return (
    <DropMenu
      items={model}
      dropContainerClassName="dropContainerClass"
      selected={selectedPill?.id}
      onSelectItem={(id) => setSelectedPill(options.find((item) => item.id === id))}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
        return (
          <StatusPill
            {...props}
            ref={refSetter(ref, buttonRef as React.Ref<HTMLDivElement>)}
            $status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon $status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon $status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

const items: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Success',
    icon: <BonusOutline />,
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Error',
    icon: <AlertOutline />,
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Warning',
    icon: <BurnSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
    icon: <HeartOutline />,
  },
  {
    id: '5',
    label: 'Option five',
  },
];

export const PillMenuTemplate = (props: any) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <WrapperVertical>
          <Desc>Компонент может быть с выпадающим меню. Позволяет выбирать различные статусы (цвета) индикатора.</Desc>
          <Desc>Для добавления выпадающего меню к кастомному StatusPill используется компонент DropMenu.</Desc>
          <PillMenu options={items} />
        </WrapperVertical>
      </ThemeProvider>
    </>
  );
};
