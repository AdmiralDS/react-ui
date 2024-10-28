import styled from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const DarkDiv = styled.div`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    ${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
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

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked');
};

export const ButtonLoaderTemplate = () => {
  return (
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
          <Button dimension="xl" appearance="tertiary" loading onClick={handleClick}>
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
          <Button dimension="l" appearance="tertiary" loading>
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
          <Button dimension="m" appearance="tertiary" loading>
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
          <Button dimension="s" appearance="tertiary" loading>
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
};
