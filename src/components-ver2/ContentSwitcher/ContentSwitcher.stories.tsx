import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ContentSwitcher } from '#src/components-ver2/ContentSwitcher';
import { ContentSwitcherItem } from '#src/components-ver2/ContentSwitcher/ContentSwitcherItem';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { T } from '#src/components-ver2/T';
import { Badge } from '#src/components-ver2/Badge';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

const Divider = styled.div`
  width: 10px;
`;

const Separator = styled.div`
  height: 20px;
`;

export default {
  title: 'Admiral-2.1/ContentSwitcher',
  decorators: [withDesign],
  component: ContentSwitcher,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70132',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70180',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70203',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70226',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70249',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70273',
      },
    ],
  },
  argTypes: {
    dimension: {
      control: {
        type: 'radio',
        options: ['l', 'm', 's'],
      },
    },
  },
} as ComponentMeta<typeof ContentSwitcher>;

const ContentSwitcherDemo: ComponentStory<typeof ContentSwitcher> = () => {
  const list = [
    { title: 'Active button', content: '1' },
    { title: 'Default button', content: '2' },
    { title: 'Disabled button', content: '3', disabled: true },
  ];
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <T font="Body/Body 1 Long" as="div">
        Dimension - l
      </T>
      <Separator />
      <ContentSwitcher dimension={'l'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <Separator />
      <ContentSwitcher dimension={'m'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <Separator />
      <ContentSwitcher dimension={'s'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
    </ThemeProvider>
  );
};

const ContentSwitcherWithIconDemo = () => (
  <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
    <ContentSwitcher dimension={'l'}>
      <ContentSwitcherItem active>
        <StarSolid width={20} />
        <Divider />
        Active button
      </ContentSwitcherItem>
      <ContentSwitcherItem>
        <StarSolid width={20} />
        <Divider />
        Default button
      </ContentSwitcherItem>
      <ContentSwitcherItem disabled>
        Disabled button
        <Divider />
        <StarSolid width={17} />
      </ContentSwitcherItem>
    </ContentSwitcher>
  </ThemeProvider>
);

const ContentSwitcherWithBadgeDemo = () => {
  const [active, setActive] = useState(0);

  const list = [
    {
      title: (
        <>
          Active button <Badge style={{ marginLeft: 8 }}>3</Badge>
        </>
      ),
    },
    {
      title: (
        <>
          Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
    },
    {
      title: (
        <>
          Disabled button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
      disabled: true,
    },
  ];

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </ThemeProvider>
  );
};

const Template: ComponentStory<typeof ContentSwitcher> = ({ dimension, className, ...props }) => {
  const [active, setActive] = useState(0);

  const list = [
    {
      title: (
        <>
          <StarSolid width={17} style={{ marginRight: 8 }} />
          Active button
        </>
      ),
    },
    {
      title: (
        <>
          <StarSolid width={17} style={{ marginRight: 8 }} />
          Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
    },
    { title: 'Disabled button', disabled: true },
  ];

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <ContentSwitcher dimension={dimension} className={className} {...props}>
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </ThemeProvider>
  );
};

export const Example = ContentSwitcherDemo.bind({});

export const ContentSwitcherWithIcon = ContentSwitcherWithIconDemo.bind({});
export const ContentSwitcherWithBadge = ContentSwitcherWithBadgeDemo.bind({});
export const Playground = Template.bind({});
Playground.args = {};
