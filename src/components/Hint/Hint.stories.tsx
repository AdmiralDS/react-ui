import { Button } from '#src/components/Button';
import { Hint, HintProps } from '#src/components/Hint';
import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

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
  },
} as ComponentMeta<typeof Hint>;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Template1: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  return (
    <>
      <Hint {...args} anchorId={anchorId}>
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline height={24} width={24} aria-hidden />
        </StyledButton>
      </Hint>
    </>
  );
};

const Template2: Story<HintProps & { anchorId1: string; anchorId2: string }> = ({ anchorId1, anchorId2, ...args }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint {...args} renderContent={() => text} anchorId={anchorId1}>
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId1}>
            <HelpOutline height={24} width={24} aria-hidden />
          </StyledButton>
        </Hint>
        <Hint {...args} renderContent={() => text} id={anchorId2}>
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId2}>
            <HelpOutline height={24} width={24} aria-hidden />
          </StyledButton>
        </Hint>
      </div>
    </>
  );
};

const Template3: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <StyledButton dimension="s" ref={btnRef}>
        Press&nbsp;&nbsp;&nbsp;
        <Hint {...args} renderContent={() => text} target={btnRef} anchorId={anchorId}>
          <HelpOutline tabIndex={0} height={24} width={24} aria-label="Help Icon" aria-describedby={anchorId} />
        </Hint>
      </StyledButton>
    </>
  );
};

const Template4: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  return (
    <>
      <Hint
        {...args}
        visibilityTrigger="click"
        renderContent={() => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {text}
            <Separator height={8} />
            <a href="#">Link</a>
          </div>
        )}
        anchorId={anchorId}
      >
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline height={24} width={24} />
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
  return (
    <>
      <Hint {...args} renderContent={() => text} anchorId={anchorId} anchorCssMixin={anchorCss}>
        <StyledButton dimension="s" aria-label="Additional information" aria-describedby={anchorId}>
          <HelpOutline height={24} width={24} aria-hidden />
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
