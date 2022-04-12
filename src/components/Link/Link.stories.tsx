import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './index';
import { T } from '#/components/T';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Example/Link',
  decorators: [withDesign],
  component: Link,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A8620',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=37%3A8697',
      },
    ],
  },
  argTypes: {
    target: {
      control: {
        type: 'select',
        options: ['_parent', '_self', '_top', '_blank'],
      },
    },
    appearance: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    dimension: {
      control: {
        type: 'radio',
        options: ['m', 's'],
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Link>;

const Separator = styled.div`
  margin-top: 10px;
`;

const Devider = styled.div`
  width: 10px;
`;

const LinkPrimary: ComponentStory<typeof Link> = () => {
  return (
    <>
      <T font="Additional/L" as="div">
        Dimension - M
      </T>
      <Link appearance={'primary'} href="" onClick={(e) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Additional/L" as="div">
        Dimension - S
      </T>
      <Link appearance={'primary'} dimension="s" href="" onClick={(e) => e.preventDefault()}>
        Link
      </Link>
    </>
  );
};

const LinkSecondary: ComponentStory<typeof Link> = () => (
  <>
    <T font="Additional/L" as="div">
      Dimension - M
    </T>
    <Link appearance={'secondary'} href="" onClick={(e) => e.preventDefault()}>
      Link
    </Link>
    <Separator />
    <T font="Additional/L" as="div">
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
      <T font="Additional/L" as="div">
        Link with icon. Dimension - m
      </T>
      <Separator />
      <Link appearance={'primary'} href="" onClick={(e) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Devider />
        Link
      </Link>
      <Separator />
      <T font="Additional/L" as="div">
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
