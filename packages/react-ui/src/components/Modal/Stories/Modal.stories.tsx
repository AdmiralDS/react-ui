import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Modal, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  ModalTwoButtonsTemplate,
  ModalOneButtonTemplate,
  ModalWithoutButtonsTemplate,
  ModalScrollTemplate,
  ModalCustomContentTemplate,
  ModalCustomOverlayTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ModalTwoButtonsRaw from '!!raw-loader!./Templates/ModalTwoButtons';
import ModalOneButtonRaw from '!!raw-loader!./Templates/ModalOneButton';
import ModalWithoutButtonsRaw from '!!raw-loader!./Templates/ModalWithoutButtons';
import ModalScrollRaw from '!!raw-loader!./Templates/ModalScroll';
import ModalCustomContentRaw from '!!raw-loader!./Templates/ModalCustomContent';
import ModalCustomOverlayRaw from '!!raw-loader!./Templates/ModalCustomOverlay';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении
    какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под
    модальным окном.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Modal',
  decorators: [withDesign],
  component: Modal,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49046',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49265',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    closeOnEscapeKeyDown: {
      control: { type: 'boolean' },
    },
    closeOnOutsideClick: {
      control: { type: 'boolean' },
    },
    displayCloseIcon: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Modal>;

//<editor-fold desc="Пример c двумя кнопками">
const ModalTwoButtonsStory: ComponentStory<typeof Modal> = (props) => (
  <ModalTwoButtonsTemplate {...cleanUpProps(props)} />
);
export const ModalTwoButtonsExample = ModalTwoButtonsStory.bind({});
ModalTwoButtonsExample.parameters = {
  docs: {
    source: {
      code: ModalTwoButtonsRaw,
    },
  },
};
ModalTwoButtonsExample.storyName = 'Modal. Пример c двумя кнопками.';
//</editor-fold>

//<editor-fold desc="Пример c одной кнопкой">
const ModalOneButtonStory: ComponentStory<typeof Modal> = (props) => (
  <ModalOneButtonTemplate {...cleanUpProps(props)} />
);
export const ModalOneButtonExample = ModalOneButtonStory.bind({});
ModalOneButtonExample.parameters = {
  docs: {
    source: {
      code: ModalOneButtonRaw,
    },
  },
};
ModalOneButtonExample.storyName = 'Modal. Пример c одной кнопкой.';
//</editor-fold>

//<editor-fold desc="Пример без кнопок">
const ModalWithoutButtonsStory: ComponentStory<typeof Modal> = (props) => (
  <ModalWithoutButtonsTemplate {...cleanUpProps(props)} />
);
export const ModalWithoutButtonsExample = ModalWithoutButtonsStory.bind({});
ModalWithoutButtonsExample.parameters = {
  docs: {
    source: {
      code: ModalWithoutButtonsRaw,
    },
  },
};
ModalWithoutButtonsExample.storyName = 'Modal. Пример без кнопок.';
//</editor-fold>

//<editor-fold desc="Пример со скроллом">
const ModalScrollStory: ComponentStory<typeof Modal> = (props) => <ModalScrollTemplate {...cleanUpProps(props)} />;
export const ModalScrollExample = ModalScrollStory.bind({});
ModalScrollExample.parameters = {
  docs: {
    source: {
      code: ModalScrollRaw,
    },
  },
};
ModalScrollExample.storyName = 'Modal. Пример со скроллом.';
//</editor-fold>

//<editor-fold desc="Свободное (кастомизированное) наполнение">
const ModalCustomContentStory: ComponentStory<typeof Modal> = (props) => (
  <ModalCustomContentTemplate {...cleanUpProps(props)} />
);
export const ModalCustomContentExample = ModalCustomContentStory.bind({});
ModalCustomContentExample.parameters = {
  docs: {
    source: {
      code: ModalCustomContentRaw,
    },
  },
};
ModalCustomContentExample.storyName = 'Modal. Свободное (кастомизированное) наполнение.';
//</editor-fold>

//<editor-fold desc="Кастомизация подложки модального окна">
const ModalCustomOverlayStory: ComponentStory<typeof Modal> = (props) => (
  <ModalCustomOverlayTemplate {...cleanUpProps(props)} />
);
export const ModalCustomOverlayExample = ModalCustomOverlayStory.bind({});
ModalCustomOverlayExample.parameters = {
  docs: {
    source: {
      code: ModalCustomOverlayRaw,
    },
    description: {
      story: `У пользователя есть возможность кастомизировать внешний вид подложки модального окна.
      Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки.
      Либо можно воспользоваться параметрами overlayClassName, overlayStyle.`,
    },
  },
};
ModalCustomOverlayExample.storyName = 'Modal. Кастомизация подложки модального окна.';
//</editor-fold>
