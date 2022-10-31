import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { Color } from '#src/components/themes/common';
import { DropMenu } from '#src/components/DropMenu';
import { MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { Pill, Pills } from '#src/components/Pill/index';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as BonusOutline } from '@admiral-ds/icons/build/category/BonusOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';

export default {
  title: 'Admiral-2.1/Pills',
  decorators: [withDesign],
  component: Pill,
  parameters: {
    //componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Pill>;

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

const stylesByStatusCssMixin = css<{ status?: Status }>`
  background-color: ${(p) => p.theme.color[getBackgroundColorByStatus(p.status)]};
  color: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
`;

const StatusPill = styled(Pill).attrs<{ status?: Status }>((p) => ({
  'data-status': p.status,
}))<{ status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
  }
`;

const TemplateSimplePills: ComponentStory<typeof Pill> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <></>
        <Pills>
          <StatusPill status="Success">
            <HeartOutlinePillIcon />
            <span>Playground</span>
          </StatusPill>
          <StatusPill status="Error">Playground</StatusPill>
          <StatusPill status="Warning">Playground</StatusPill>
          <StatusPill status="Special">Playground</StatusPill>
          <StatusPill status="Attention">Playground</StatusPill>
          <StatusPill>Playground</StatusPill>
        </Pills>
      </ThemeProvider>
    </>
  );
};
const StyledPillIcon = styled.div<{ status?: Status }>`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
    }
  }
`;

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};
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

const TemplatePillMenu: ComponentStory<typeof Pill> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [selectedPill, setSelectedPill] = React.useState<PillOptionProps | undefined>(items[0]);

  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [items]);

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <DropMenu
          items={model}
          selected={selectedPill?.id}
          onSelectItem={(id) => setSelectedPill(items.find((item) => item.id === id))}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
            return (
              <StatusPill
                ref={buttonRef as React.Ref<HTMLDivElement>}
                status={selectedPill?.status}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
              >
                {selectedPill?.icon && (
                  <StyledPillIcon status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>
                )}
                {selectedPill?.label}
                <StyledPillIcon status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
              </StatusPill>
            );
          }}
        />
      </ThemeProvider>
    </>
  );
};

export const SimplePills = TemplateSimplePills.bind({});
SimplePills.args = {};
SimplePills.storyName = 'Pills. Базовый пример.';

export const PillsMenu = TemplatePillMenu.bind({});
PillsMenu.args = {};
PillsMenu.storyName = 'PillMenu. Pill с выпадающим списком.';
