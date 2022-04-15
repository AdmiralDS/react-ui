import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { TextButton } from './index';
import { T } from '#src/components-ver2/T';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

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
} as ComponentMeta<typeof TextButton>;

const TextButtonStory: ComponentStory<typeof TextButton> = () => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <WrapperButton>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} appearance="primary" />
          <Separator />
          <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} displayRight />
          <Separator />
          <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} disabled={true} />
          <Separator />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} />
          <Separator />
          <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} displayRight />
          <Separator />
          <TextButton dimension="s" text="Text Button" />
        </div>
        <div>
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - M
          </StyledText>
          <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton
            dimension="m"
            text="Text Button"
            icon={<AttachFileOutline />}
            appearance="secondary"
            displayRight
          />
          <Separator />
          <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} appearance="secondary" disabled />
          <Separator />
          <StyledText font="Body/Body 1 Long" as="div">
            Dimension - S
          </StyledText>
          <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} appearance="secondary" />
          <Separator />
          <TextButton
            dimension="s"
            text="Text Button"
            icon={<AttachFileOutline />}
            appearance="secondary"
            displayRight
          />
          <Separator />
          <TextButton dimension="s" text="Text Button" appearance="secondary" />
        </div>
      </WrapperButton>
    </ThemeProvider>
  );
};

export const TextButtonStoryDemo = TextButtonStory.bind({});
TextButtonStoryDemo.args = {};
TextButtonStoryDemo.storyName = 'Text Button';

const TextButtonStatusStory: ComponentStory<typeof TextButton> = () => {
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <StyledText font="Body/Body 1 Long" as="div">
        Загрузка
      </StyledText>
      <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} loading />
      <Separator />
      <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} loading />
      <Separator />
      <TextButton dimension="m" text="Text Button" loading />
      <Separator />
      <StyledText font="Body/Body 1 Long" as="div">
        Скелетон
      </StyledText>
      <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} skeleton />
      <Separator />
      <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} displayRight skeleton />
      <Separator />
      <TextButton dimension="m" text="Text Button" skeleton />
    </ThemeProvider>
  );
};

export const TextButtonStatusDemo = TextButtonStatusStory.bind({});
TextButtonStatusDemo.args = {};
TextButtonStatusDemo.storyName = 'Text Button. Скелетон, загрузка';
