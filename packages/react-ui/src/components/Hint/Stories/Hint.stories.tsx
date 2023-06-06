import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Hint, Button, TextButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';

import { HintBaseTemplate, HintClassNameTemplate, HintClickTemplate, HintPositionTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import HintBaseRaw from '!!raw-loader!./Templates/HintBase';
import HintClassNameRaw from '!!raw-loader!./Templates/HintClassName';
import HintClickRaw from '!!raw-loader!./Templates/HintClick';
import HintPositionRaw from '!!raw-loader!./Templates/HintPosition';

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
    Вызывается либо по клику, например на иконку Question, либо по ховеру на любом элементе, когда недостаточно
    Tooltip-а.
    <Separator />В случае, когда Hint вызывается по клику, у нас есть возможность его закрыть кликом вне Hint-а, либо
    нажатием на крестик.
    <Separator />В сценарии, когда Hint вызывается по ховеру, иконки закрытия на компоненте нет и он скрывается, когда
    мы уводим курсор с объекта, к которому он привязан.
    <Separator />
    Hint имеет три фиксированных по ширине размера: 280px, 384px и 488px, которые используются в зависимости от
    предполагаемого объема текста. На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к
    рабочей области устройства. Высота компонента настраивается автоматически при задании контента. Максимальная высота
    компонента – 320px, после чего у контента появляется вертикальный скролл.
    <Separator />
    По умолчанию Hint-у присваивается самый большой размер, Hint появляется по ховеру.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Hint',
  decorators: [withDesign],
  component: Hint,
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
    hintPosition: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Hint>;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const Template3: ComponentStory<typeof Hint> = ({ anchorId, ...args }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const anchorCss = css`
    height: 100%;
  `;

  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <>
      <StyledButton dimension="s" ref={btnRef}>
        Hover on icon&nbsp;&nbsp;&nbsp;
        <Hint
          {...args}
          visible={visible}
          onVisibilityChange={handleVisibilityChange}
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
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <>
      <Hint
        {...args}
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
        visibilityTrigger="click"
        renderContent={() => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {text}
            <Separator height={4} />
            <TextButton appearance="primary" dimension="s" text="Text Button" />
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

  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <>
      <Hint
        {...args}
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
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

//<editor-fold desc="Базовый пример">
const HintBaseStory: ComponentStory<typeof Hint> = (props) => (
  <HintBaseTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);
export const HintBaseExample = HintBaseStory.bind({});
HintBaseExample.parameters = {
  docs: {
    source: {
      code: HintBaseRaw,
    },
  },
};
HintBaseExample.storyName = 'Hint. Базовый пример.';
//</editor-fold>

//<editor-fold desc="Позиционирование">
const HintPositionStory: ComponentStory<typeof Hint> = (props) => (
  <HintPositionTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);
export const HintPositionExample = HintPositionStory.bind({});
HintPositionExample.parameters = {
  docs: {
    source: {
      code: HintPositionRaw,
    },
    description: {
      story: `Компонент имеет 8 основных вариантов позиционирования: снизу справа, снизу слева, сверху справа, 
      сверху слева, слева внизу, слева вверху, справа внизу и справа вверху. Позиции перечислены в порядке приоритета.
      По умолчанию компонент сам рассчитывает свою позицию, исходя из приоритета позиций и свободного места на экране.
      Если хинт не помещается ни в один из перечисленных 8 вариантов позиционирования, то происходит проверка того, можно ли разместить хинт
      снизу/сверху/слева/справа относительно центра target-элемента или снизу/сверху по центру страницы.\n\nТакже 
      пользователь может сам с помощью параметра hintPosition задать, с какой стороны от target-элемента должен появляться Hint.
      Параметр hintPosition может принимать следующие значения - bottom|top|left|right. \n\n* При hintPosition='bottom' 
      хинт рендерится снизу от target-элемента с возможным сдвигом по горизонтальной оси, т.е. происходит выбор 
      из 4 вариантов позиционирования: снизу справа, снизу слева, снизу по центру target-элемента и 
      снизу по центру страницы (позиции расположены в порядке приоритета);\n\n* При hintPosition='top' хинт рендерится сверху от target-элемента 
      с возможным сдвигом по горизонтальной оси, т.е. происходит выбор из 4 вариантов позиционирования: сверху справа, сверху слева, сверху 
      по центру target-элемента и сверху по центру страницы (позиции расположены в порядке приоритета);\n\n* При hintPosition='left' 
      хинт рендерится слева от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов позиционирования: 
      слева снизу, слева сверху и слева по центру target-элемента (позиции расположены в порядке приоритета);\n\n* При hintPosition='right' 
      хинт рендерится справа от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов 
      позиционирования: справа снизу, справа сверху и справа по центру target-элемента (позиции расположены в порядке приоритета).\n\nНа 
      экранах мобильных устройств, меньше 640px, 
      компонент адаптируется по ширине к рабочей области устройства, то есть занимает всю ширину экрана 
      и позиционируется только снизу или сверху от target-элемента.\n\nНиже приведен пример с использованием параметра hintPosition.`,
    },
  },
};
HintPositionExample.storyName = 'Hint. Позиционирование.';
//</editor-fold>

//<editor-fold desc="Hint. Появление по клику">
const HintClickStory: ComponentStory<typeof Hint> = (props) => (
  <HintClickTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);
export const HintClickExample = HintClickStory.bind({});
HintClickExample.parameters = {
  docs: {
    source: {
      code: HintClickRaw,
    },
  },
};
HintClickExample.storyName = 'Hint. Появление по клику.';
//</editor-fold>

export const HintLink = Template4.bind({});
HintLink.args = { anchorId: 'hint_link' };
HintLink.storyName = 'Hint. Текст с ссылкой.';
HintLink.parameters = {
  docs: {
    description: {
      story: `В качества контента хинта может выступать любой ReactNode. В случае если 
    хинт содержит в себе ссылку, триггером его появления должен быть click.`,
    },
  },
};

export const HintTarget = Template3.bind({});
HintTarget.args = { anchorId: 'hint_target' };
HintTarget.storyName = 'Hint. Позиционирование относительно target.';

//<editor-fold desc="Hint. ClassName">
const HintClassNameStory: ComponentStory<typeof Hint> = (props) => (
  <HintClassNameTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);
export const HintClassNameExample = HintClassNameStory.bind({});
HintClassNameExample.parameters = {
  docs: {
    source: {
      code: HintClassNameRaw,
    },
    description: {
      story: `На Hint, созданный через портал, добавляется класс через пропс className.`,
    },
  },
};
HintClassNameExample.storyName = 'Hint. ClassName.';
//</editor-fold>

export const HintAnchorCss = Template5.bind({});
HintAnchorCss.args = { anchorId: 'hint_css' };
HintAnchorCss.storyName = 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin.';
