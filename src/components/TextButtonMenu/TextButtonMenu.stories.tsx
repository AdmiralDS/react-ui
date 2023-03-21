import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextButtonMenu } from '#src/components/TextButtonMenu/index';
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { T } from '#src/components/T';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    text: {
      type: 'string',
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextButtonMenu>;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};
const logSelectedId = (id: string) => {
  console.log(`selected: ${id}`);
};

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
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
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

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper>
        <TextButtonMenu
          {...args}
          text={args.text}
          selected={selected}
          dimension={args.dimension}
          loading={args.loading}
          disabled={args.disabled}
          appearance={args.appearance}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </Wrapper>
    </ThemeProvider>
  );
};

const TextButtonMenuSizes: ComponentStory<typeof TextButtonMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
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

  const handleSelectItem = (id: string) => {
    logSelectedId(id);
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
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onSelectItem={handleSelectItem}
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
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
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
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
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
          onSelectItem={handleSelectItem}
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
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          disabled
        />
      </div>
    </WrapperButton>
  );
};

export const TextButtonMenuStoryDemo = TextButtonMenuStory.bind({});
TextButtonMenuStoryDemo.args = { text: 'Text Button' };
TextButtonMenuStoryDemo.storyName = 'TextButtonMenu';

export const TextButtonMenuVariants = TextButtonMenuSizes.bind({});
TextButtonMenuVariants.args = {};
TextButtonMenuVariants.storyName = 'TextButtonMenu. Размеры и стили.';
