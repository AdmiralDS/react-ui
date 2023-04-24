import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import type { Color, Shape } from '#src/components/themes/common';
import { smallGroupBorderRadius, ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { DropMenu } from '#src/components/DropMenu';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { Pill, Pills } from '#src/components/Pill/index';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as BonusOutline } from '@admiral-ds/icons/build/category/BonusOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { refSetter } from '../common/utils/refSetter';

export default {
  title: 'Admiral-2.1/Pills',
  decorators: [withDesign],
  component: Pill,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=109822%3A65203',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Pill>;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
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
        <WrapperVertical>
          <Desc>
            Компонент Pills - визуальный индикатор для обозначения статуса какого-либо элемента для быстрой
            идентификации. Компонент предназначен для максимальной гибкости в дизайне, для остальных случаев используйте
            компонент Tag.
          </Desc>
          <Desc>
            Компонент может быть с иконкой или без. Фон компонента и текст с иконками можно окрашивать в произвольные
            цвета из палитры. Следите за читаемостью текста, не все комбинации цвета обеспечивают достаточный контраст
            между текстом и фоном. Отдавайте предпочтения контрастным Main-цветам. Всегда думайте как различные цветовые
            сочетания будут выглядеть в темной теме, назначайте статичные цвета, где это необходимо.
          </Desc>
          <Desc>
            В данном примере заданы варианты статусов с определенными цветами фона и текста (StatusPill). В даьнейшем
            они использованы для создания Pill с дропдауном и Nested Pills.
          </Desc>
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
        </WrapperVertical>
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
            status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

const TemplatePillMenu: ComponentStory<typeof Pill> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
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

function firstNestedPillBorderRadius(shape: Shape): string {
  const radius = smallGroupBorderRadius(shape);
  return `${radius} 0 0 ${radius}`;
}

function lastNestedPillBorderRadius(shape: Shape): string {
  const radius = smallGroupBorderRadius(shape);
  return `0 ${radius} ${radius} 0`;
}

const NestedPill = styled.div`
  display: flex;

  > ${StatusPill}:first-of-type {
    border-radius: ${(p) => firstNestedPillBorderRadius(p.theme.shape)};
  }
  > ${StatusPill}:last-of-type {
    border-radius: ${(p) => lastNestedPillBorderRadius(p.theme.shape)};
  }
`;

const leftPillClicked = () => console.log('Left nested pill clicked');
const rightPillClicked = () => console.log('Right nested pill clicked');
const itemsLeft: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Special',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Warning',
  },
  {
    id: '5',
    label: 'Option five',
  },
];
const itemsRight: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Warning',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
  },
  {
    id: '5',
    label: 'Option five',
  },
];

const TemplateNestedPills: ComponentStory<typeof Pill> = (args) => {
  return (
    <WrapperVertical>
      <Desc>
        Компонент позволяет объединять два элемента в один, у каждого из которых есть все функции одиночного компонента.
        Используя иконки, следите, что бы иконки были во всех компонентах группы. Фукцию выпадающего меню, напротив,
        можно назначать избирательно.
      </Desc>
      <Desc>
        Для объединения двух StatusPill используется NestedPill, который стилизует правый и левый края StatusPill так,
        чтобы они "слились" в единую форму.
      </Desc>
      <Pills>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            LeftNested
          </StatusPill>
          <StatusPill status="Warning" onClick={rightPillClicked}>
            RightNested
          </StatusPill>
        </NestedPill>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            <StyledPillIcon status="Special">
              <HeartOutline />
            </StyledPillIcon>
            LeftNested
          </StatusPill>
          <StatusPill status="Warning" onClick={rightPillClicked}>
            <StyledPillIcon status="Warning">
              <BurnSolid />
            </StyledPillIcon>
            RightNested
          </StatusPill>
        </NestedPill>
        <NestedPill>
          <PillMenu options={itemsLeft} />
          <PillMenu options={itemsRight} />
        </NestedPill>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            LeftNested
          </StatusPill>
          <PillMenu options={itemsRight} />
        </NestedPill>
      </Pills>
    </WrapperVertical>
  );
};

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledPill = styled(Pill)`
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
`;

const StyledPillWithTooltipHoc = TooltipHoc(StyledPill);

const LabelWrapper = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const TemplatePillWithTooltip: ComponentStory<typeof Pill> = (args) => {
  const pillLabel = 'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны';

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);

  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  React.useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      wrapper.addEventListener('focus', show);
      wrapper.addEventListener('blur', hide);
      return () => {
        wrapper.removeEventListener('mouseenter', show);
        wrapper.removeEventListener('mouseleave', hide);
        wrapper.removeEventListener('focus', show);
        wrapper.removeEventListener('blur', hide);
      };
    }
  }, [setTooltipVisible]);

  return (
    <WrapperVertical>
      <Desc>
        В случаях ограниченного пространства задавайте максимальную ширину компонента, подсвечивая полный текст при
        наведении.
      </Desc>
      <Desc>Вариант Pill ограниченной ширины с использованием Tooltip при переполнении:</Desc>
      <StyledPill ref={wrapperRef} style={{ width: '253px' }}>
        <LabelWrapper ref={textRef}>{pillLabel}</LabelWrapper>
      </StyledPill>
      {tooltipVisible && overflow && <Tooltip targetRef={wrapperRef} renderContent={() => pillLabel} />}
      <Desc>Вариант Pill с ограничением по количеству символов и с использованием TooltipHoc:</Desc>
      <StyledPillWithTooltipHoc renderContent={() => pillLabel}>
        {pillLabel.slice(0, 40) + '...'}
      </StyledPillWithTooltipHoc>
    </WrapperVertical>
  );
};

export const SimplePills = TemplateSimplePills.bind({});
SimplePills.args = {};
SimplePills.storyName = 'Pills. Базовый пример.';

export const PillsMenu = TemplatePillMenu.bind({});
PillsMenu.args = {};
PillsMenu.storyName = 'PillMenu. Pill с выпадающим списком.';

export const NestedPills = TemplateNestedPills.bind({});
NestedPills.args = {};
NestedPills.storyName = 'NestedPills.';

export const PillWithTooltip = TemplatePillWithTooltip.bind({});
PillWithTooltip.args = {};
PillWithTooltip.storyName = 'Pill с Tooltip.';
