import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Link, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  LinkPlaygroundTemplate,
  LinkPrimaryTemplate,
  LinkSecondaryTemplate,
  LinkWithIconTemplate,
  LinkMixinTemplate,
  LinkAsPropTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import LinkPlaygroundRaw from '!!raw-loader!./Templates/LinkPlayground';
import LinkPrimaryRaw from '!!raw-loader!./Templates/LinkPrimary';
import LinkSecondaryRaw from '!!raw-loader!./Templates/LinkSecondary';
import LinkWithIconRaw from '!!raw-loader!./Templates/LinkWithIcon';
import LinkMixinRaw from '!!raw-loader!./Templates/LinkMixin';
import LinkAsPropRaw from '!!raw-loader!./Templates/LinkAsProp';

export default {
  title: 'Admiral-2.1/Link',
  decorators: [withDesign],
  component: Link,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8489',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8620',
      },
    ],
  },
  argTypes: {
    target: {
      options: ['_parent', '_self', '_top', '_blank'],
      control: { type: 'select' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Link>;

//<editor-fold desc="Playground">
const LinkPlaygroundStory: ComponentStory<typeof Link> = (props) => (
  <LinkPlaygroundTemplate children={props.children} {...cleanUpProps(props)} />
);
export const Playground = LinkPlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: LinkPlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Primary">
const LinkPrimaryStory: ComponentStory<typeof Link> = () => <LinkPrimaryTemplate />;
export const Primary = LinkPrimaryStory.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: LinkPrimaryRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Secondary">
const LinkSecondaryStory: ComponentStory<typeof Link> = () => <LinkSecondaryTemplate />;
export const Secondary = LinkSecondaryStory.bind({});
Secondary.parameters = {
  docs: {
    source: {
      code: LinkSecondaryRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="With icon">
const LinkWithIconStory: ComponentStory<typeof Link> = () => <LinkWithIconTemplate />;
export const IconLink = LinkWithIconStory.bind({});
IconLink.parameters = {
  docs: {
    source: {
      code: LinkWithIconRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Mixin">
const LinkMixinStory: ComponentStory<typeof Link> = () => <LinkMixinTemplate />;
export const CssMixin = LinkMixinStory.bind({});
CssMixin.parameters = {
  docs: {
    source: {
      code: LinkMixinRaw,
    },
    description: {
      story: `Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя 
      все стили компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если 
      пользователь хочет использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="As prop">
const LinkAsPropStory: ComponentStory<typeof Link> = () => <LinkAsPropTemplate />;
export const LinkAsProp = LinkAsPropStory.bind({});
LinkAsProp.parameters = {
  docs: {
    source: {
      code: LinkAsPropRaw,
    },
    description: {
      story: `Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor элемент. 
      Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. 
      В качестве значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.`,
    },
  },
};
//</editor-fold>
