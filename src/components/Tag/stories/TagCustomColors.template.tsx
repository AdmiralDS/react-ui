import * as React from 'react';
import { Tag, Tags, LIGHT_THEME, T } from '@admiral-ds/react-ui';
import styled, { useTheme } from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Тэг может иметь цветную статусную метку. Помимо предложенных вариантов метка может быть окрашена в любой цвет на
        усмотрение пользователя. Для этого в качестве значения параметра kind нужно указать объект со свойством
        background, содержащим значение кастомного цвета метки.
        <Separator /> Либо тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой
        акцент. В этом случае, помимо предложенных вариантов, фон и обводку тега можно окрасить в любые цвета.
        Рекомендуются цветовые пары (фон, обводка) из представленных в палитре цветов по следующей схеме: фон - color
        10, обводка - основной цвет минус 1 шаг вниз. Чтобы задать кастомные цвета фона и обводки тега нужно в качестве
        значения параметра kind указать объект со свойствами background и border, содержащими соответственно кастомные
        значения цветов фона и обводки тега.
        <Separator />
        Также помимо свойств background и border пользователь может задать свойство backgroundHover. Данное свойство
        отвечает за цвет фона тега при ховере, в случае если тег является активным. Рекомендуется в качестве значения
        backgroundHover выбирать из палитры цветов цвет, который на 1 шаг темнее цвета фона.
      </T>
      <Separator $height={24} />
      <Tags>
        <Tag
          onClick={clickHandler}
          kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}
        >
          Purple
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
            border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
            backgroundHover: `var(--admiral-color-Teal_Teal20, ${theme.color['Teal/Teal 20']})`,
          }}
        >
          Teal
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
            border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
            backgroundHover: `var(--admiral-color-Magenta_Magenta20, ${theme.color['Magenta/Magenta 20']})`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})` }}>
          Purple
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Teal_Teal10, ${theme.color['Teal/Teal 10']})`,
            border: `var(--admiral-color-Teal_Teal50, ${theme.color['Teal/Teal 50']})`,
          }}
        >
          Teal
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: `var(--admiral-color-Magenta_Magenta10, ${theme.color['Magenta/Magenta 10']})`,
            border: `var(--admiral-color-Magenta_Magenta50, ${theme.color['Magenta/Magenta 50']})`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
