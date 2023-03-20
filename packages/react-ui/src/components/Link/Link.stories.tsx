import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Link } from '#src/components/Link';
import { T } from '#src/components/T';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import { LinkComponentCssMixin } from '#src/components/Link';
import type { LinkComponent } from '#src/components/Link';

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

const Devider = styled.div`
  width: 10px;
  height: 12px;
`;

const LinkPrimary: ComponentStory<typeof Link> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 1 Long" as="div">
        Dimension - M
      </T>
      <Link appearance={'primary'} href="" onClick={(e: any) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - S
      </T>
      <Link appearance={'primary'} dimension="s" href="" onClick={(e: any) => e.preventDefault()}>
        Link
      </Link>
    </ThemeProvider>
  );
};

const LinkSecondary: ComponentStory<typeof Link> = () => (
  <>
    <T font="Body/Body 1 Long" as="div">
      Dimension - M
    </T>
    <Link appearance={'secondary'} href="" onClick={(e: any) => e.preventDefault()}>
      Link
    </Link>
    <Separator />
    <T font="Body/Body 1 Long" as="div">
      Dimension - S
    </T>
    <Link appearance={'secondary'} dimension="s" href="" onClick={(e: any) => e.preventDefault()}>
      Link
    </Link>
  </>
);

const LinkWithIcon: ComponentStory<typeof Link> = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - m
      </T>
      <Separator />
      <Link appearance={'primary'} href="" onClick={(e: any) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Devider />
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - s
      </T>
      <Separator />
      <Link appearance={'secondary'} dimension="s" href="" onClick={(e: any) => e.preventDefault()}>
        Link
        <Devider />
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
    <Devider />
    <StyledRouterLink to="" dimension="s">
      Styled RouterLink - dimension s
    </StyledRouterLink>
    <Devider />
    <StyledRouterLink to="" appearance="secondary">
      Styled RouterLink - appearance secondary
    </StyledRouterLink>
  </Router>
);

const LinkPolymorphic: ComponentStory<typeof Link> = () => (
  <>
    <Link as="button">Render button instead of anchor</Link>
    <Devider />
    <Link as="div" dimension="s">
      Render div instead of anchor
    </Link>
    <Devider />
    <Router>
      <Link as={RouterLink} to="">
        Render RouterLink instead of anchor
      </Link>
    </Router>
  </>
);

const LinkDefault: ComponentStory<typeof Link> = ({ children, ...args }) => <Link {...args}>{children}</Link>;
export const Primary = LinkPrimary.bind({});
export const Secondary = LinkSecondary.bind({});
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
export const Playground = LinkDefault.bind({});

Playground.args = {
  children: 'Link',
  href: 'http://localhost:6006/?path=/story/example-link--playground',
};
