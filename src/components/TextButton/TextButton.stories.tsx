import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { TextButton } from './index';
import { T } from '#src/components/T';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

export default {
  title: 'Example/Text Button',
  decorators: [withDesign],
  component: TextButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=108393%3A69880',
    },
  },
} as ComponentMeta<typeof TextButton>;

const TextButtonStory: ComponentStory<typeof TextButton> = () => {
  return (
    <>
      <StyledText font="Body/Body 1 Long" as="div">
        Dimension - M
      </StyledText>
      <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} />
      <Separator />
      <TextButton dimension="m" text="Text Button" icon={<AttachFileOutline />} displayRight />
      <Separator />
      <TextButton dimension="m" text="Text Button" />
      <Separator />
      <TextButton dimension="m" text="Text Button Secondary" icon={<AttachFileOutline />} appearance="secondary" />
      <Separator />
      <StyledText font="Body/Body 1 Long" as="div">
        Dimension - S
      </StyledText>
      <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} />
      <Separator />
      <TextButton dimension="s" text="Text Button" icon={<AttachFileOutline />} displayRight />
      <Separator />
      <TextButton dimension="s" text="Text Button" />
      <Separator />
      <TextButton dimension="s" text="Text Button Secondary" icon={<AttachFileOutline />} appearance="secondary" />
    </>
  );
};

export const TextButtonStoryDemo = TextButtonStory.bind({});
TextButtonStoryDemo.args = {};
TextButtonStoryDemo.storyName = 'Text Button';

const TextButtonStatusStory: ComponentStory<typeof TextButton> = () => {
  return (
    <>
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
    </>
  );
};

export const TextButtonStatusDemo = TextButtonStatusStory.bind({});
TextButtonStatusDemo.args = {};
TextButtonStatusDemo.storyName = 'Text Button. Скелетон, загрузка';
