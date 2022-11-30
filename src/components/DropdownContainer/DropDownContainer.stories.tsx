import React, { useMemo, useRef, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { Button } from '#src/components/Button';
import styled, { css, ThemeProvider } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';
import { withDesign } from 'storybook-addon-designs';
import { Menu } from '#src/components/Menu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { Theme } from '#src/components/themes';
import { mediumGroupBorderRadius, ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/DropDownContainer',
  decorators: [withDesign],
  component: DropdownContainer,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DropdownContainer>;

const StyledText = styled.div`
  ${typography['Body/Body 1 Short']}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  padding: 8px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
  overflow: auto;
`;

const StyledAdditionalText = styled.div`
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  pointer-events: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Simple: ComponentStory<typeof DropdownContainer> = (args) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const { targetRef, ...other } = args;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Текст
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-end"
            targetRef={targetRef || buttonRef}
            onClickOutside={() => setOpen(!open)}
            {...other}
          >
            <StyledText>
              Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться
            </StyledText>
          </DropdownContainer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

const cards = [
  {
    id: '1',
    label: 'Номер Карты /****45',
    value: 1,
  },
  {
    id: '2',
    label: 'Номер Карты /****75',
    value: 2,
  },
  { id: '3', label: 'Номер Карты /****22', value: 3 },
  {
    id: '4',
    label: 'Номер Карты /****33',
    value: 4,
  },
  {
    id: '5',
    label: 'Номер Карты /****21',
    value: 5,
  },
  {
    id: '6',
    label: 'Номер Карты /****35',
    value: 6,
  },
  { id: '7', label: 'Номер Карты /****39', value: 7 },
  {
    id: '8',
    label: 'Номер Карты /****41',
    value: 8,
  },
];

const containerContrastBorder = css`
  border: dashed 2px ${(p) => p.theme.color['Neutral/Neutral 90']};
`;

const TemplateWithMenu: ComponentStory<typeof DropdownContainer> = (args) => {
  const model = useMemo(() => {
    return cards.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem key={item.id} {...options}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {item.label} <CardSolid width={24} height={24} />
            </div>
            <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
          </MenuItem>
        ),
      };
    }, []);
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [active, setActive] = useState<string | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { targetRef, ...other } = args;

  const handleSelectItem = (value?: string) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Карты
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-start"
            targetRef={targetRef || buttonRef}
            onClickOutside={() => setOpen(!open)}
            {...other}
            dropContainerCssMixin={containerContrastBorder}
          >
            <Menu
              model={model}
              selected={selected}
              active={active}
              onActivateItem={setActive}
              onSelectItem={handleSelectItem}
            />
          </DropdownContainer>
        )}
      </Wrapper>
    </>
  );
};

export const SimpleContainer = Simple.bind({});
export const MenuContainer = TemplateWithMenu.bind({});

SimpleContainer.storyName = 'Простой контейнер';
MenuContainer.storyName = 'Контейнер с меню';
