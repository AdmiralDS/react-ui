import { useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ImageViewer, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { ImageProps, ImageViewerProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { ReactComponent as Service } from './Service.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
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
  width: 100%;
  flex-grow: 5;
`;

const handleError = (e: any) => {
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>ImageViewer</NotificationItemTitle>
          <NotificationItemContent>
            Компонент для просмотра изображений. Помимо основного, есть компонент Image Miniature для отображения
            миниатюр изображений.
            <Separator height={8} />
            Основные функции:
          </NotificationItemContent>
        </NotificationItem>
        <MobileWrapper>
          <Service />
          <PageContent ref={containerRef}>
            <ImageViewer {...props} container={containerRef.current} items={items} />
          </PageContent>
          <HomeIndicator />
        </MobileWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
