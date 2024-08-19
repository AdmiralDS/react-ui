import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { CarouselSliderAppearance, CarouselSliderProps } from '@admiral-ds/react-ui';
import {
  CarouselSlider,
  CarouselSliderItem,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  Toggle,
  typography,
} from '@admiral-ds/react-ui';

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

export const CarouselSliderAutoChangeTemplate = (props: CarouselSliderProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, [setCurrent]);

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
      <CarouselSlider {...props}>
        {[...Array(5).keys()].map((item) => {
          return (
            <CarouselSliderItem
              aria-label={`Item ${item}`}
              key={item}
              appearance={appearance}
              isCurrent={item === current}
            />
          );
        })}
      </CarouselSlider>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Автоматическое переключение</NotificationItemTitle>
        <NotificationItemContent>
          Переключение сегментов может быть автоматическим через заданный пользователем интервал. Рекомендуемое значение
          интервала равно 3 секундам.
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};
