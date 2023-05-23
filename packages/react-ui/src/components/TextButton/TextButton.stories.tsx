import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { TextButton, T, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
`;

export default {
  title: 'Admiral-2.1/Text Button',
  decorators: [withDesign],
  component: TextButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
    displayRight: {
      control: false,
    },
    iconStart: {
      control: false,
    },
    iconEnd: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextButton>;

const SimpleStory: ComponentStory<typeof TextButton> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TextButton text="Text Button" iconStart={<AttachFileOutline />} {...cleanUpProps(args)} />
      <Separator />
      <TextButton text="Text Button" iconEnd={<AttachFileOutline />} {...cleanUpProps(args)} />
    </ThemeProvider>
  );
};

export const SimpleDemo = SimpleStory.bind({});
SimpleDemo.args = {};
SimpleDemo.storyName = 'Простой пример с изменяемыми свойствами';

const TextButtonStory: ComponentStory<typeof TextButton> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperButton>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton
            {...args}
            dimension="m"
            text="Text Button"
            iconStart={<AttachFileOutline />}
            appearance="primary"
          />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconEnd={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} disabled={true} />
          <Separator />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" />
        </div>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconEnd={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton
            dimension="m"
            text="Text Button"
            iconStart={<AttachFileOutline />}
            appearance="secondary"
            disabled
          />
          <Separator />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton dimension="s" text="Text Button" appearance="secondary" />
        </div>
      </WrapperButton>
    </ThemeProvider>
  );
};

export const TextButtonStoryDemo = TextButtonStory.bind({});
TextButtonStoryDemo.args = {};
TextButtonStoryDemo.storyName = 'Text Button (Демо)';

const TextButtonStatusStory: ComponentStory<typeof TextButton> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperButton>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} loading />
          <Separator />
          <TextButton dimension="m" text="Text Button" iconStart={<AttachFileOutline />} skeleton />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconStart={<AttachFileOutline />} loading />
          <Separator />
          <TextButton dimension="s" text="Text Button" iconEnd={<AttachFileOutline />} skeleton />
          <Separator />
        </div>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" />
          <Separator />
          <TextButton dimension="m" text="Text Button" loading />
          <Separator />
          <TextButton dimension="m" text="Text Button" skeleton />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" />
          <Separator />
          <TextButton dimension="s" text="Text Button" loading />
          <Separator />
          <TextButton dimension="s" text="Text Button" skeleton />
        </div>
      </WrapperButton>
    </ThemeProvider>
  );
};

export const TextButtonStatusDemo = TextButtonStatusStory.bind({});
TextButtonStatusDemo.args = {};
TextButtonStatusDemo.storyName = 'Text Button. Скелетон, загрузка (Демо)';
