import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ImageViewer } from '@admiral-ds/react-ui';
import type {
  ImageProps,
  ImageViewerProps,
  BorderRadiusType,
  TransformAction,
  TransformType,
} from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

const handleTransform = (info: { transform: TransformType; action: TransformAction }) => {
  // eslint-disable-next-line no-console
  console.log(info);
};

export const ImageViewerControlledStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ImageViewerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [activeImg, setActiveImg] = useState(0);

  const handleActiveChange = (index: number) => {
    setActiveImg(index);
    // eslint-disable-next-line no-console
    console.log('active image', index);
  };
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('set active image', activeImg);
  }, [activeImg]);
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <ImageViewer
          {...props}
          activeImg={activeImg}
          onActiveChange={handleActiveChange}
          items={items}
          onTransform={handleTransform}
          appearance="multiple"
        ></ImageViewer>
      </Wrapper>
    </ThemeProvider>
  );
};
