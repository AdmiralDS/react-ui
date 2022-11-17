import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { T } from '#src/components/T';
import { IconPlacement } from '#src/components/IconPlacement/index';
import { Theme } from '#src/components/themes';

export default {
  title: 'Admiral-2.1/IconPlacement',
  decorators: [withDesign],
  component: IconPlacement,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104360',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104658',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104398',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104512',
      },
    ],
  },
  argTypes: {
    dimension: {
      control: false,
    },
    disabled: {
      control: false,
    },
    themeBorderKind: {
      options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof IconPlacement>;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const StyledWrapperVertical = styled(WrapperVertical)`
  justify-content: space-between;
  width: 150px;
`;

const handleClick = () => console.log('IconPlacement clicked');
const IconPlacementDemoTemplate: ComponentStory<typeof IconPlacement> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperVertical>
        <T font="Body/Body 1 Short" as="div">
          Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов.
          По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable.
        </T>
        <T font="Body/Body 1 Short" as="div">
          Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement
          применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство
          внутри компонентов.
        </T>
        <T font="Body/Body 1 Short" as="div">
          У компонента есть три размера иконки: M 24, S 20 и XS 16. Причем, у размеров M и S два размера Hover-круга для
          различных ситуаций, что бы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в
          названии вариантов компонента как Big. Размер Hover-круга не учитывается в размере компонента и выходит за его
          границы.
        </T>
        <Wrapper>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Small
            </T>
            <IconPlacement dimension="lSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Big
            </T>
            <IconPlacement dimension="lBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Small
            </T>
            <IconPlacement dimension="mSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Big
            </T>
            <IconPlacement dimension="mBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - S
            </T>
            <IconPlacement dimension="s" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="s" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
        </Wrapper>
      </WrapperVertical>
    </ThemeProvider>
  );
};

const ScrollWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  overflow: auto;
  flex-direction: column;
  align-items: stretch;
  border: rebeccapurple 1px solid;
  height: 150px;
  width: 60px;
  scroll-behavior: smooth;
`;

const IconExamplePseudoClasses = () => {
  return (
    <IconPlacement dimension="lBig" onClick={handleClick}>
      <CloseOutline />
    </IconPlacement>
  );
};

const IconPlacementInScrollTemplate: ComponentStory<typeof IconPlacement> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ alignItems: 'stretch' }}>
        <StyledWrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            IconPlacement with hover/active/focus
          </T>
          <ScrollWrapper>
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
            <IconExamplePseudoClasses />
          </ScrollWrapper>
        </StyledWrapperVertical>
      </Wrapper>
    </ThemeProvider>
  );
};

export const IconPlacementDemo = IconPlacementDemoTemplate.bind({});
IconPlacementDemo.storyName = 'IconPlacement. Размеры';

export const IconPlacementInScroll = IconPlacementInScrollTemplate.bind({});
IconPlacementInScroll.storyName = 'IconPlacement. В скролле';
