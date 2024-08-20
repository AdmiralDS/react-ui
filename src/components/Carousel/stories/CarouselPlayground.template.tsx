import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { CarouselSliderAppearance, CarouselProps, MenuButtonProps } from '@admiral-ds/react-ui';
import {
  Carousel,
  CarouselSlider,
  CarouselSliderItem,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  Toggle,
  typography,
} from '@admiral-ds/react-ui';
import { CarouselButton } from '#src/components/Carousel/CarouselButton';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const AppearanceBlock = styled.div`
  display: flex;
  gap: 10px;
  ${typography['Body/Body 2 Short']};
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;
const TestButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 80px;
  background-color: var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']});
`;

export const CarouselPlaygroundTemplate = (props: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (newValue: number) => {
    setCurrent(newValue);
  };

  const [appearance, setAppearance] = useState<CarouselSliderAppearance>('default');
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) setAppearance('primary');
    else setAppearance('default');
  }, [checked]);

  return (
    <Wrapper>
      <AppearanceBlock>
        Default
        <Toggle dimension="s" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
        Primary
      </AppearanceBlock>
      <TestButtonWrapper>
        <CarouselButton appearance="default" direction="left" />
        <CarouselButton appearance="default" direction="right" />
        <CarouselButton appearance="primary" direction="left" />
        <CarouselButton appearance="primary" direction="right" />
      </TestButtonWrapper>
      <Carousel {...props}>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Carousel</NotificationItemTitle>
        <NotificationItemContent>
          Carousel – компонент для последовательного отображения связанных по смыслу элементов, как правило, это
          изображения или карточки с контентом.
          <Separator height={8} />
          Компонент Carousel может использоваться как «листалка» изображений или для просмотра условных карточек с
          контентом.
          <Separator height={8} />
          Компонент Carousel имеет два вида — со слайдером внутри изображения или снаружи.
          <Separator height={8} />
          Размер и пропорции контентной зоны задаются пользователем.
          <Separator height={8} />
          Помимо кликов на слайдер, контент можно переключать кнопками стрелок влево и вправо. Прокрутка изображений
          идет «по кругу».
          <Separator height={8} />
          Активная зона работы кнопок равна 56 px по горизонтали и вся высота изображения по вертикали. При наведении на
          эту зону у кнопок появляется Hover.
          <Separator height={8} />
          Опционально кнопки навигации можно отключать
          <Separator height={8} />
          При использовании для отображения условных карточек со светлым фоном, рекомендуется использовать слайдер
          снаружи компонента и переключить кнопки навигации в режим «On BG», у кнопок есть соответствующая настройка.
          <Separator height={8} />
          Адаптив (Mobile) Компонент адаптируется к ширине экрана по горизонтали, пропорционально уменьшая высоту.
          Возможно «листание» свайпами по области изображения.
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};
