import { typography } from '#src/components/Typography';
import * as React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Badge, BadgeProps } from '../Badge';
import { Button } from '../Button';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Layout = styled.div<{
  inverse?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`;

const String = styled.div<{ appearance?: BadgeProps['appearance'] }>`
  display: flex;
  align-items: center;
  ${({ appearance, theme }) =>
    appearance && appearance.indexOf('white') > -1 && `background: ${theme.color.background.secondary};`}
  & > * {
    margin-right: 16px;
  }

  & > *:last-child {
    margin-right: 40px;
  }
  ${typography['Body/Body 2 Long']}
`;

const Description = () => (
  <Desc>
    Badge — компонент, который обычно дополняет другие компоненты и показывает количественные значения. Например, в
    компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели
    нотификации.
    <Separator />
    Компонент существует в двух размерах — S 16 и M 20 px по высоте.
  </Desc>
);

export default {
  title: 'Example/Badge',
  decorators: [withDesign],
  component: Badge,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18581',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18684',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      control: {
        type: 'select',
        options: [
          'light',
          'info',
          'warning',
          'success',
          'error',
          'grey',
          'dark',
          'lightInactive',
          'lightDisable',
          'white',
          'whiteInactive',
          'whiteDisable',
        ],
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template1: ComponentStory<typeof Badge> = (args) => {
  return (
    <Layout>
      <String appearance={args.appearance}>
        <Badge {...args}>4</Badge>
        Appearance: {args.appearance || 'light'}
        <br />
        Dimension: {args.dimension || 'm'}
      </String>
    </Layout>
  );
};

const Template2: ComponentStory<typeof Badge> = (args) => {
  return (
    <Layout>
      <String>
        <Badge>5</Badge>
        <Badge dimension="s">5</Badge>
        Light
      </String>
      <String>
        <Badge appearance="info">5</Badge>
        <Badge appearance="info" dimension="s">
          5
        </Badge>
        Info
      </String>
      <String>
        <Badge appearance="warning">5</Badge>
        <Badge appearance="warning" dimension="s">
          5
        </Badge>
        Warning
      </String>
      <String>
        <Badge appearance="success">5</Badge>
        <Badge appearance="success" dimension="s">
          5
        </Badge>
        Success
      </String>
      <String>
        <Badge appearance="error">5</Badge>
        <Badge appearance="error" dimension="s">
          5
        </Badge>
        Error
      </String>
      <String>
        <Badge appearance="grey">5</Badge>
        <Badge appearance="grey" dimension="s">
          5
        </Badge>
        Grey
      </String>
      <String>
        <Badge appearance="dark">5</Badge>
        <Badge appearance="dark" dimension="s">
          5
        </Badge>
        Dark
      </String>
      <String>
        <Badge appearance="lightInactive">5</Badge>
        <Badge appearance="lightInactive" dimension="s">
          5
        </Badge>
        Light Inactive
      </String>
      <String>
        <Badge appearance="lightDisable">5</Badge>
        <Badge appearance="lightDisable" dimension="s">
          5
        </Badge>
        Light Disable
      </String>
      <String appearance="white">
        <Badge appearance="white">5</Badge>
        <Badge appearance="white" dimension="s">
          5
        </Badge>
        White
      </String>
      <String appearance="whiteInactive">
        <Badge appearance="whiteInactive">5</Badge>
        <Badge appearance="whiteInactive" dimension="s">
          5
        </Badge>
        White Inactive
      </String>
      <String appearance="whiteDisable">
        <Badge appearance="whiteDisable">5</Badge>
        <Badge appearance="whiteDisable" dimension="s">
          5
        </Badge>
        White Disable
      </String>
    </Layout>
  );
};

const Template3: ComponentStory<typeof Badge> = (args) => {
  return (
    <String>
      <Button>
        Пример
        <Separator />
        <Badge appearance="whiteInactive">4</Badge>
      </Button>
      <Button>
        Example
        <Separator />
        <Badge appearance="whiteInactive" aria-label="Amount 4">
          4
        </Badge>
      </Button>
    </String>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};
Playground.storyName = 'Playground';

export const BadgeVariants = Template2.bind({});
BadgeVariants.args = {};
BadgeVariants.storyName = 'Badge. Варианты использования.';

export const BadgeAccessability = Template3.bind({});
BadgeAccessability.args = {};
BadgeAccessability.storyName = 'Badge. Accessability.';
BadgeAccessability.parameters = {
  docs: {
    description: {
      story: `При фокусе на компоненте, включающем в себя компонент Badge, осуществляется следующая озвучка: 
        "Количество <число, указанное в Badge>". При желании текст озвучки можно поменять с помощью атрибута 
        aria-label, как это сделано во второй кнопке.`,
    },
  },
};
