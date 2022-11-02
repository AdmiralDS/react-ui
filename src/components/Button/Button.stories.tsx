import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { Button } from './index';
import { PseudoText } from '#src/components/skeleton/PseudoText';
import { PseudoIcon } from '#src/components/skeleton/PseudoIcon';
import { T } from '#src/components/T';
import { withDesign } from 'storybook-addon-designs';
import { filterKeysWithUndefinedValues } from '#src/components/common/utils/filterKeysWithUndefinedValues';
import { Theme } from '#src/components/themes';

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px;
    flex-basis: 170px;
  }

  justify-content: space-between;
  align-items: center;
`;
const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Separator = styled.div`
  height: 20px;
  width: 20px;
`;
const DarkDiv = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Dark Static Neutral 00']};
  padding: 2px;
`;

export default {
  title: 'Admiral-2.1/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A16209',
      },
    ],
  },
  argTypes: {
    dimension: {
      control: {
        type: 'radio',
        options: ['xl', 'l', 'm', 's'],
      },
    },
    skeleton: {
      control: 'boolean',
    },
    appearance: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'white'],
      },
    },
    onClick: { action: 'clicked' },

    type: {
      control: {
        type: 'radio',
        options: ['button', 'submit', 'reset'],
      },
    },

    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },

    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonContainer = styled.div`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }
`;

const ButtonWithIconDemo: ComponentStory<typeof Button> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    console.log(`Current border ${theme.shape.borderRadiusKind}`);
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <Button dimension="xl" appearance="primary">
            Button 56
            <StarSolid />
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <Button dimension="l" appearance="secondary">
            <StarSolid />
            Button 48
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <Button dimension="m" appearance="danger">
            Button 40
            <StarSolid />
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Ghost - xl
          </T>
          <Button dimension="xl" appearance="ghost">
            Button 56
            <StarSolid />
          </Button>
        </div>
        <>
          <DarkDiv>
            <T font="Body/Body 1 Long" as="div">
              White - l
            </T>
            <Button dimension="l" appearance="white">
              Button 48
              <StarSolid />
            </Button>
          </DarkDiv>
        </>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <Button dimension="s" appearance="success">
            <StarSolid />
            Button 32
          </Button>
        </div>
      </WrapperButton>
      <Separator />
      <div>
        <T font="Body/Body 1 Long" as="div">
          Button with icon stretch
        </T>
        <Button dimension="l" appearance="primary" style={{ width: '100%' }}>
          <StarSolid />
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
};

const handleClick = () => {
  console.log('clicked');
};

const ButtonLoaderDemo: ComponentStory<typeof Button> = () => (
  <>
    <Wrapper>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Size XL
        </T>
        <Button dimension="xl" onClick={handleClick}>
          Button 56
        </Button>
        <Button dimension="xl" appearance="primary" loading onClick={handleClick}>
          Button 56
        </Button>
        <Button dimension="xl" appearance="secondary" loading onClick={handleClick}>
          Button 56
        </Button>
        <Button dimension="xl" appearance="ghost" loading>
          Button 56
        </Button>
        <DarkDiv>
          <Button dimension="xl" appearance="white" loading>
            Button 56
          </Button>
        </DarkDiv>
        <Button dimension="xl" appearance="danger" loading>
          Button 56
        </Button>
        <Button dimension="xl" appearance="success" loading>
          Button 56
        </Button>
      </WrapperVertical>
      <Separator />
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Size L
        </T>
        <Button dimension="l">Button 48</Button>
        <Button dimension="l" appearance="primary" loading>
          Button 48
        </Button>
        <Button dimension="l" appearance="secondary" loading>
          Button 48
        </Button>
        <Button dimension="l" appearance="ghost" loading>
          Button 48
        </Button>
        <DarkDiv>
          <Button dimension="l" appearance="white" loading>
            Button 48
          </Button>
        </DarkDiv>
        <Button dimension="l" appearance="danger" loading>
          Button 48
        </Button>
        <Button dimension="l" appearance="success" loading>
          Button 48
        </Button>
      </WrapperVertical>
      <Separator />
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Size M
        </T>
        <Button dimension="m">Button 40</Button>
        <Button dimension="m" appearance="primary" loading>
          Button 40
        </Button>
        <Button dimension="m" appearance="secondary" loading>
          Button 40
        </Button>
        <Button dimension="m" appearance="ghost" loading>
          Button 40
        </Button>
        <DarkDiv>
          <Button dimension="m" appearance="white" loading>
            Button 40
          </Button>
        </DarkDiv>
        <Button dimension="m" appearance="danger" loading>
          Button 40
        </Button>
        <Button dimension="m" appearance="success" loading>
          Button 40
        </Button>
      </WrapperVertical>
      <Separator />
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Size S
        </T>
        <Button dimension="s">Button 32</Button>
        <Button dimension="s" appearance="primary" loading>
          Button 32
        </Button>
        <Button dimension="s" appearance="secondary" loading>
          Button 32
        </Button>
        <Button dimension="s" appearance="ghost" loading>
          Button 32
        </Button>
        <DarkDiv>
          <Button dimension="s" appearance="white" loading>
            Button 32
          </Button>
        </DarkDiv>
        <Button dimension="s" appearance="danger" loading>
          Button 32
        </Button>
        <Button dimension="s" appearance="success" loading>
          Button 32
        </Button>
      </WrapperVertical>
    </Wrapper>
    <Separator />
    <div>
      <T font="Body/Body 1 Long" as="div">
        Button with loader stretch
      </T>
      <Separator />
      <Button disabled loading style={{ width: '100%' }}></Button>
    </div>
  </>
);

const ButtonSkeleton: ComponentStory<typeof Button> = ({ appearance = 'primary', dimension = 'xl', ...args }) => (
  <>
    <WrapperButton>
      <Button disabled dimension={dimension} appearance={appearance} {...args}>
        <PseudoText dimension={dimension} appearance={appearance} />
      </Button>
      <Button disabled dimension={dimension} appearance={appearance} {...args}>
        <PseudoIcon dimension={dimension} appearance={appearance} />
        <PseudoText dimension={dimension} appearance={appearance} />
      </Button>
      <Button disabled dimension={dimension} appearance={appearance} {...args}>
        <PseudoText dimension={dimension} appearance={appearance} />
        <PseudoIcon dimension={dimension} appearance={appearance} />
      </Button>
      <div style={{ marginLeft: 10 }}>
        <Button disabled displayAsSquare dimension={dimension} appearance={appearance} {...args}>
          <PseudoIcon dimension={dimension} appearance={appearance} />
        </Button>
      </div>
    </WrapperButton>
  </>
);

const ButtonPlaygroundDemo: ComponentStory<typeof Button> = ({ children, ...args }) => {
  const cleanProps = filterKeysWithUndefinedValues(args);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    console.log(`Current border ${theme.shape.borderRadiusKind}`);
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ButtonContainer>
        <Button {...cleanProps}>Button 56</Button>

        <Button {...cleanProps}>
          <StarSolid />
          Button 56
        </Button>

        <Button {...cleanProps}>Button 56</Button>

        <Button {...cleanProps}>
          Button 56
          <StarSolid />
        </Button>

        <Button {...cleanProps}>
          <StarSolid />
        </Button>

        <Button {...cleanProps} displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl">Button 56</Button>

        <Button dimension="xl">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl">Button 56</Button>

        <Button dimension="xl">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl">
          <StarSolid />
        </Button>

        <Button dimension="xl" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="secondary">
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          Button 56
        </Button>

        <Button dimension="xl" appearance="secondary">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="secondary">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="secondary" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="ghost">
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          Button 56
        </Button>

        <Button dimension="xl" appearance="ghost">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="ghost">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="ghost" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="danger">
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          Button 56
        </Button>

        <Button dimension="xl" appearance="danger">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="danger">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="danger" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension="xl" appearance="success">
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          Button 56
        </Button>

        <Button dimension="xl" appearance="success">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="success">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="success" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
      <ButtonContainer style={{ backgroundColor: '#2B313B' }}>
        <Button dimension="xl" appearance="white">
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          <StarSolid />
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          Button 56
        </Button>

        <Button dimension="xl" appearance="white">
          Button 56
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="white">
          <StarSolid />
        </Button>

        <Button dimension="xl" appearance="white" displayAsSquare>
          <StarSolid />
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
};

export const Playground = ButtonPlaygroundDemo.bind({});
Playground.args = {
  children: 'Нажми меня',
};
export const ButtonWithIcon = ButtonWithIconDemo.bind({});
export const ButtonLoader = ButtonLoaderDemo.bind({});
// export const Skeleton = ButtonSkeleton.bind({});
