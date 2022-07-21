import { Button } from '#src/components/Button';
import { Hint, HintProps } from '#src/components/Hint';
import React, { useRef } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Theme } from '#src/components/themes';
import { TextButton } from '#src/components/TextButton';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;
const StyledButton = styled(Button)`
  padding: 4px;
`;
const Description = () => (
  <Desc>
    Всплывающая подсказка используется для ситуаций, когда требуется пояснить или раскрыть информацию более детально.
    Вызывается либо по клику на иконку Question, либо по ховеру на любом элементе, когда недостаточно Tooltip-а.
    <Separator />В случае, когда Hint вызывается по клику, у нас есть возможность его закрыть кликом вне Hint-а, либо
    нажатием на крестик.
    <Separator />В сценарии, когда Hint вызывается по ховеру, иконки закрытия на компоненте нет и он скрывается, когда
    мы уводим курсор с объекта к которому он привязан.
    <Separator />
    Hint имеет три фиксированных по ширине размера: 280px, 384px и 488px. Которые используются в зависимости от
    предполагаемого объема текста. Высота компонента настраивается автоматически при редактировании.
    <Separator />
    По умолчанию Hint-у присваивается самый большой размер, Hint появляется по ховеру.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Hint',
  decorators: [withDesign],
  component: Hint,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31273',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31388',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31455',
      },
    ],
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    visibilityTrigger: {
      options: ['hover', 'click'],
      control: { type: 'radio' },
    },
    isMobile: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Hint>;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Template1: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [opened, setOpened] = React.useState(false);
  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);

  return (
    <ThemeProvider theme={swapBorder}>
      <Hint {...args} anchorId={anchorId} opened={opened} onOpen={handleOpen} onClose={handleClose}>
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline aria-hidden />
        </StyledButton>
      </Hint>
    </ThemeProvider>
  );
};

const Template2: Story<HintProps & { anchorId1: string; anchorId2: string }> = ({ anchorId1, anchorId2, ...args }) => {
  const [opened1, setOpened1] = React.useState(false);
  const [opened2, setOpened2] = React.useState(false);
  const handleOpen1 = () => setOpened1(true);
  const handleClose1 = () => setOpened1(false);
  const handleOpen2 = () => setOpened2(true);
  const handleClose2 = () => setOpened2(false);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...args}
          opened={opened1}
          onOpen={handleOpen1}
          onClose={handleClose1}
          renderContent={() => text}
          anchorId={anchorId1}
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId1}>
            <HelpOutline aria-hidden />
          </StyledButton>
        </Hint>
        <Hint
          {...args}
          opened={opened2}
          onOpen={handleOpen2}
          onClose={handleClose2}
          renderContent={() => text}
          id={anchorId2}
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId2}>
            <HelpOutline aria-hidden />
          </StyledButton>
        </Hint>
      </div>
    </>
  );
};

const Template3: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const anchorCss = css`
    height: 100%;
  `;

  const [opened, setOpened] = React.useState(false);
  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);

  return (
    <>
      <StyledButton dimension="s" ref={btnRef}>
        Press&nbsp;&nbsp;&nbsp;
        <Hint
          {...args}
          opened={opened}
          onOpen={handleOpen}
          onClose={handleClose}
          renderContent={() => text}
          target={btnRef}
          anchorId={anchorId}
          anchorCssMixin={anchorCss}
        >
          <HelpOutline tabIndex={0} height={20} width={20} aria-label="Help Icon" aria-describedby={anchorId} />
        </Hint>
      </StyledButton>
    </>
  );
};

const Template4: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  const [opened, setOpened] = React.useState(false);
  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);
  return (
    <>
      <Hint
        {...args}
        opened={opened}
        onOpen={handleOpen}
        onClose={handleClose}
        visibilityTrigger="click"
        renderContent={() => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {text}
            <Separator height={8} />
            <TextButton appearance="primary" dimension="s" text="Link" />
          </div>
        )}
        anchorId={anchorId}
      >
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline />
        </StyledButton>
      </Hint>
    </>
  );
};

const Template5: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  // import {css} from 'styled-components;
  const anchorCss = css`
    padding: 10px;
    border: 2px dotted red;
  `;

  const [opened, setOpened] = React.useState(false);
  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);
  return (
    <>
      <Hint
        {...args}
        opened={opened}
        onOpen={handleOpen}
        onClose={handleClose}
        renderContent={() => text}
        anchorId={anchorId}
        anchorCssMixin={anchorCss}
      >
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline aria-hidden />
        </StyledButton>
      </Hint>
    </>
  );
};

export const HintBase = Template1.bind({});
HintBase.args = { renderContent: () => text, anchorId: 'hint_base' };
HintBase.storyName = 'Hint. Базовый пример.';

/**  docs.story.description doesn't shown for the first story, only for the other stories on the page */
export const HintPosition = Template2.bind({});
HintPosition.args = { anchorId1: 'hint_pos1', anchorId2: 'hint_pos2' };
HintPosition.storyName = 'Hint. Позиционирование.';
HintPosition.parameters = {
  docs: {
    description: {
      story: `Компонент имеет 4 варианта позиционирования: снизу справа, снизу слева, сверху справа, 
      сверху слева. Позиции перечислены в порядке приоритета. Данный пример демонстрирует все 4 варианта. Если 
      нужно увидеть расположение хинта сверху, следует прокрутить страницу таким образом, чтобы пространтсва 
      под кнопками было недостаточно для отображения хинта.\n\nНа экранах мобильных устройств, меньше 640px, 
      компонент адаптируется по ширине к рабочей области устройства.`,
    },
  },
};

export const HintClick = Template1.bind({});
HintClick.args = {
  visibilityTrigger: 'click',
  renderContent: () => text,
  anchorId: 'hint_click',
};
HintClick.storyName = 'Hint. Появление по клику.';

export const HintLink = Template4.bind({});
HintLink.args = { anchorId: 'hint_link' };
HintLink.storyName = 'Hint. Текст с ссылкой.';
HintLink.parameters = {
  docs: {
    description: {
      story: `В качества контента хинта может выступать любой ReactNode. В случае если 
    хинт содержит в себе ссылку, триггером его появления должен быть click.`,
    },
    source: {
      type: 'code',
    },
  },
};

export const HintTarget = Template3.bind({});
HintTarget.args = { anchorId: 'hint_target' };
HintTarget.storyName = 'Hint. Позиционирование относительно target.';
HintTarget.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const HintWithClassName = Template1.bind({});
HintWithClassName.args = {
  visibilityTrigger: 'click',
  renderContent: () => text,
  anchorId: 'hint-class1',
  className: 'custom-hint-class',
};
HintWithClassName.storyName = `Hint. ClassName .`;
HintWithClassName.parameters = {
  docs: {
    description: {
      story: `На Hint, созданный через портал, добавляется класс через пропс className`,
    },
  },
};

export const HintAnchorCss = Template5.bind({});
HintAnchorCss.args = { anchorId: 'hint_css' };
HintAnchorCss.storyName = 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin.';
HintAnchorCss.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
