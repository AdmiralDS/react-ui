import styled, { ThemeProvider } from 'styled-components';

import { ImageViewer, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { ImageProps, ImageViewerProps, BorderRadiusType } from '@admiral-ds/react-ui';

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
    src: 'ds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13',
    alt: 'Cute corgie',
    onError: handleError,
  },
];

export const ImageViewerPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ImageViewerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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
        <ImageViewer {...props} items={items}></ImageViewer>
      </Wrapper>
    </ThemeProvider>
  );
};
