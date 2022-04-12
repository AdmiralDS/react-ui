import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { ButtonGroup } from '../ButtonGroup';
import { ButtonGroupItem } from '#/components/ButtonGroup/ButtonGroupItem';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { T } from '#/components/T';
import { withDesign } from 'storybook-addon-designs';
import { Badge } from '#/components/Badge';

const Divider = styled.div`
  width: 10px;
`;

const Separator = styled.div`
  height: 20px;
`;

export default {
  title: 'Example/ButtonGroup',
  decorators: [withDesign],
  component: ButtonGroup,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70132',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70273',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70180',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70203',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70226',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=7582%3A70249',
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
} as ComponentMeta<typeof ButtonGroup>;

const ButtonGroupDemo: ComponentStory<typeof ButtonGroup> = () => {
  const list = [
    { title: 'Active button', content: '1' },
    { title: 'Default button', content: '2' },
    { title: 'Disabled button', content: '3', disabled: true },
  ];
  return (
    <>
      <T font="Additional/L" as="div">
        Dimension - l
      </T>
      <Separator />
      <ButtonGroup dimension={'l'}>
        {list.map((item, index) => {
          return (
            <ButtonGroupItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
      <Separator />
      <ButtonGroup dimension={'l'} appearance="primary">
        {list.map((item, index) => {
          return (
            <ButtonGroupItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
      <Separator />
      <T font="Additional/L" as="div">
        Dimension - m
      </T>
      <Separator />
      <ButtonGroup dimension={'m'}>
        {list.map((item, index) => {
          return (
            <ButtonGroupItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
      <Separator />
      <T font="Additional/L" as="div">
        Dimension - s
      </T>
      <Separator />
      <ButtonGroup dimension={'s'}>
        {list.map((item, index) => {
          return (
            <ButtonGroupItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ButtonGroupItem>
          );
        })}
      </ButtonGroup>
    </>
  );
};

const ButtonGroupWithIconDemo = () => (
  <ButtonGroup dimension={'l'}>
    <ButtonGroupItem active>
      <StarSolid width={20} />
      <Divider />
      Active button
    </ButtonGroupItem>
    <ButtonGroupItem>Default button</ButtonGroupItem>
    <ButtonGroupItem disabled>
      Disabled button
      <Divider />
      <StarSolid width={17} />
    </ButtonGroupItem>
  </ButtonGroup>
);

const Template: ComponentStory<typeof ButtonGroup> = ({ dimension, className, ...props }) => {
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
          Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
    },
    { title: 'Disabled button', disabled: true },
  ];

  return (
    <ButtonGroup dimension={dimension} className={className} {...props}>
      {list.map((item, index) => (
        <ButtonGroupItem
          key={index}
          active={index === active}
          onClick={() => setActive(index)}
          disabled={item.disabled}
        >
          {item.title}
        </ButtonGroupItem>
      ))}
    </ButtonGroup>
  );
};

export const Example = ButtonGroupDemo.bind({});

export const ButtonGroupWithIcon = ButtonGroupWithIconDemo.bind({});
export const Playground = Template.bind({});
Playground.args = {};
