import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextButtonMenu } from '#src/components/TextButtonMenu/index';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { T } from '#src/components/T';
import { MenuItem, RenderOptionProps } from '../MenuItem';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
`;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

export default {
  title: 'Admiral-2.1/TextButtonMenu',
  decorators: [withDesign],
  component: TextButtonMenu,
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
} as ComponentMeta<typeof TextButtonMenu>;

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const TextButtonMenuStory: ComponentStory<typeof TextButtonMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  return (
    <Wrapper>
      <TextButtonMenu
        text="Text Button"
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        items={model}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      />
    </Wrapper>
  );
};

const TextButtonMenuSizes: ComponentStory<typeof TextButtonMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  const handleChange = (id: string) => {
    console.log(`selected: ${id}`);
    setSelected(id);
  };
  return (
    <WrapperButton>
      <div>
        <StyledText font="Body/Body 1 Long" as="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="primary"
          onChange={handleChange}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onChange={handleChange}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onChange={handleChange}
        />
        <Separator />
        <StyledText font="Body/Body 1 Long" as="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu items={model} selected={selected} dimension="s" text="Text Button" onChange={handleChange} />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onChange={handleChange}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <StyledText font="Body/Body 1 Long" as="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onChange={handleChange}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onChange={handleChange}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          disabled
          onChange={handleChange}
        />
        <Separator />
        <StyledText font="Body/Body 1 Long" as="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onChange={handleChange}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onChange={handleChange}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onChange={handleChange}
          disabled
        />
      </div>
    </WrapperButton>
  );
};

export const TextButtonMenuStoryDemo = TextButtonMenuStory.bind({});
TextButtonMenuStoryDemo.args = {};
TextButtonMenuStoryDemo.storyName = 'TextButtonMenu';
TextButtonMenuStoryDemo.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const TextButtonMenuVariants = TextButtonMenuSizes.bind({});
TextButtonMenuVariants.args = {};
TextButtonMenuVariants.storyName = 'TextButtonMenu. Размеры и стили.';
TextButtonMenuVariants.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
