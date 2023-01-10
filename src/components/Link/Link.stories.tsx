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
      <Link appearance={'primary'} href="" onClick={(e) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - S
      </T>
      <Link appearance={'primary'} dimension="s" href="" onClick={(e) => e.preventDefault()}>
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
    <Link appearance={'secondary'} href="" onClick={(e) => e.preventDefault()}>
      Link
    </Link>
    <Separator />
    <T font="Body/Body 1 Long" as="div">
      Dimension - S
    </T>
    <Link appearance={'secondary'} dimension="s" href="" onClick={(e) => e.preventDefault()}>
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
      <Link appearance={'primary'} href="" onClick={(e) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Devider />
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - s
      </T>
      <Separator />
      <Link appearance={'secondary'} dimension="s" href="" onClick={(e) => e.preventDefault()}>
        Link
        <Devider />
        <ArrowRightOutline width={20} />
      </Link>
    </>
  );
};

const LinkDefault: ComponentStory<typeof Link> = ({ children, ...args }) => <Link {...args}>{children}</Link>;
export const Primary = LinkPrimary.bind({});
export const Secondary = LinkSecondary.bind({});
export const IconLink = LinkWithIcon.bind({});
export const Playground = LinkDefault.bind({});

Playground.args = {
  children: 'Link',
  href: 'http://localhost:6006/?path=/story/example-link--playground',
};
