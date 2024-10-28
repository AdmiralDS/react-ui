import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ImageViewer, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { ImageProps, ImageViewerProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { ReactComponent as Service } from './Service.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const MobileWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 340px;
  height: 714px;

  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-radius: 32px;
  border: solid 10px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;
const HomeIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 112px;
  height: 4px;
  margin: 0 104px 8px 104px;

  background-color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  border-radius: 4px;
`;
const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  flex-grow: 5;

  transform: translateX(0);
  overflow: hidden;
`;

const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
  // eslint-disable-next-line no-console
  console.log('error', e);
};

const items: ImageProps[] = [
  {
    src: 'https://avatars.mds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13',
    alt: 'Cute corgie',
    onError: handleError,
  },
  {
    src: 'https://sun9-35.userapi.com/impf/c841529/v841529284/5ff85/i4ycpPSO7Uc.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x160,320x214&sign=a36d32df90680b502bc60bbc3360adc7&from=bu&u=lLklGz-4D5hVHBtzhyzRRNYz7486j6Jj_Ht0c8CXRmo&cs=320x214',
    alt: 'Small picture',
    onError: handleError,
  },
  {
    src: 'https://otvet.imgsmail.ru/download/97444257_e4a38eccad081ceb92cb3f8a1594218e_800.jpg',
    alt: 'Cute norwitch',
    onError: handleError,
  },
  {
    src: 'ds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13',
    alt: 'Cute corgie',
    onError: handleError,
  },
];

export const ImageViewerMobileTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ImageViewerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [containerNode, setContainerNode] = useState<HTMLDivElement | null>(null);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>ImageViewer. Адаптив (Mobile)</NotificationItemTitle>
          <NotificationItemContent>
            Отличия от десктопной версии. При использовании на мобильных устройствах изображение по дефолту занимет 100%
            ширины экрана, но не более 70% высоты. Если используется несколько изображений, то кнопки масштабирования
            отключаются, листание изображений происходит свайпами по экрану при дефолтном масштабе картинки. «Щипком»
            можно масштабировать картинку.
          </NotificationItemContent>
        </NotificationItem>
        <MobileWrapper>
          <Service />
          <PageContent ref={(node) => setContainerNode(node)}>
            <ImageViewer {...props} container={containerNode} items={items} mobile />
          </PageContent>
          <HomeIndicator />
        </MobileWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
