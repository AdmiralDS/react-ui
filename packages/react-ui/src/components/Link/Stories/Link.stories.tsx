import * as React from 'react';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Link, LinkComponentCssMixin, T, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { LinkComponent } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

import { LinkPlaygroundTemplate, LinkPrimaryTemplate, LinkSecondaryTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import LinkPlaygroundRaw from '!!raw-loader!./Templates/LinkPlayground';
import LinkPrimaryRaw from '!!raw-loader!./Templates/LinkPrimary';
import LinkSecondaryRaw from '!!raw-loader!./Templates/LinkSecondary';

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

const Separator = styled.div`
  margin-top: 10px;
`;

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

const LinkWithIcon: ComponentStory<typeof Link> = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - m
      </T>
      <Separator />
      <Link appearance={'primary'} href="" onClick={(e: any) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Divider />
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - s
      </T>
      <Separator />
      <Link appearance={'secondary'} dimension="s" href="" onClick={(e: any) => e.preventDefault()}>
        Link
        <Divider />
        <ArrowRightOutline width={20} />
      </Link>
    </>
  );
};

const StyledRouterLink = styled(RouterLink)<LinkComponent>`
  ${LinkComponentCssMixin}
`;

const LinkMixin: ComponentStory<typeof Link> = () => (
  <Router>
    <StyledRouterLink to="">Styled RouterLink - dimension m</StyledRouterLink>
    <Divider />
    <StyledRouterLink to="" dimension="s">
      Styled RouterLink - dimension s
    </StyledRouterLink>
    <Divider />
    <StyledRouterLink to="" appearance="secondary">
      Styled RouterLink - appearance secondary
    </StyledRouterLink>
  </Router>
);

const LinkPolymorphic: ComponentStory<typeof Link> = () => (
  <>
    <Link as="button">Render button instead of anchor</Link>
    <Divider />
    <Link as="div" dimension="s">
      Render div instead of anchor
    </Link>
    <Divider />
    <Router>
      <Link as={RouterLink} to="">
        Render RouterLink instead of anchor
      </Link>
    </Router>
  </>
);

//<editor-fold desc="Playground">
const LinkPlaygroundStory: ComponentStory<typeof Link> = (props) => (
  <LinkPlaygroundTemplate children={[]} {...cleanUpProps(props)} />
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

export const IconLink = LinkWithIcon.bind({});
export const CssMixin = LinkMixin.bind({});
CssMixin.parameters = {
  docs: {
    description: {
      story: `Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя 
      все стили компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если 
      пользователь хочет использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.`,
    },
  },
};
export const LinkAsProp = LinkPolymorphic.bind({});
LinkAsProp.parameters = {
  docs: {
    description: {
      story: `Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor элемент. 
      Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. 
      В качестве значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.`,
    },
  },
};
