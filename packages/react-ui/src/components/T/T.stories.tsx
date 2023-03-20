import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { FONTS, NEW_FONTS } from './storyDescriptions';
import { TYPOGRAPHY, typography } from '#src/components/Typography';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { DefaultFontColorName, LIGHT_THEME, MainPrimaryColorName } from '#src/components/themes';
import { T } from './index';

const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Text — компонент для работы с Typography. Компонент отображает текст в соответствии с заданными HTML-тегом и стилем
    шрифта.
  </Desc>
);

export default {
  title: 'Admiral-2.1/T',
  decorators: [withDesign],
  component: T,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=9%3A24',
    },
  },
  argTypes: {
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof T>;

const BlueText = styled(T)`
  color: ${(p) => p.theme.color[MainPrimaryColorName]};
`;

const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color['Neutral/Neutral 70']};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
`;

const Wrapper = styled.div`
  overflow: scroll;
`;

const Table = styled.table`
  ${typography['Body/Body 2 Long']}
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};

  th,
  td[data-label] {
    text-align: left;
    padding: 8px 60px 8px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 70']};
  }
  th {
    ${typography['Header/H3']}
    color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  td[data-label]:last-child {
    padding: 8px;
  }

  td[data-label='Manual'] {
    min-width: 300px;
    width: 300px;
  }
`;

const FontDesc = styled.table`
  td {
    padding: 0;
    border-top: none;
    white-space: nowrap;
  }
  td:first-child {
    color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    padding-right: 16px;
  }
`;

const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const CopyIcon = React.forwardRef<HTMLDivElement, { text: string }>(({ text }, ref) => {
  const theme = useContext(ThemeContext) || LIGHT_THEME;
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  return (
    <CopyOutlineWrapper ref={ref}>
      <CopyOutline width={16} height={16} onClick={copyToClipboard} fill={theme.color['Neutral/Neutral 90']} />
    </CopyOutlineWrapper>
  );
});
const CopyButton = TooltipHoc(CopyIcon);

const Template1: ComponentStory<typeof T> = (args) => {
  return (
    <>
      <BlueText font={'Body/Body 1 Short'} as={'a'} href={'https://'}>
        Это ссылка со стилем Body/Body 1 Short, цветом шрифта Primary.
      </BlueText>
      <br />
      <T font="Body/Body 1 Long" as="h3" cssMixin={OrangeColor}>
        Это заголовок третьего уровня и стилем Body/Body 1 Long.
      </T>
      <T font="Body/Body 2 Long" as="h3" color="Purple/Purple 60 Main">
        Это заголовок третьего уровня и стилем Body/Body 2 Long цвета Purple/Purple 60 Main.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={args.skeleton}>
        Это заголовок второго уровня. Для активации состояния skeleton необходимо сменить состяние.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={args.skeleton}>
        Для отображения в состоянии skeleton должен быть указан текст.
      </T>
      <CustomParagraph font="Header/H5" as="p">
        Это параграф со стилем Header/H5 и цветом шрифта Tertiary.
      </CustomParagraph>
    </>
  );
};

export const TextStatus = Template1.bind({});
TextStatus.args = {};
TextStatus.storyName = 'Text';

const Template: ComponentStory<typeof T> = () => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th data-label="Style">Стиль</th>
            <th data-label="Props">Характеристики</th>
            <th data-label="Manual">Применение</th>
          </tr>
        </thead>
        <tbody>
          {NEW_FONTS.map((item: any, index: number) => {
            const text = `
            import { T, typography } from '@vtb/ui-kit3';
            import styled from 'styled-components';

            const Paragraph = styled.p\`
              \${typography['${item.name}']}
              color: #2B313B;
            \`

            const Example = () => {
              return(
                <>
                  <T font='${item.name}'>Использование StyledComponent</T>
                  <Paragraph>Использование ThemedCssFunction</Paragraph>
                </>
              );
             }
            `;
            return (
              <tr key={index}>
                <td data-label="Style">
                  <T font={item.name} as="div">
                    {item.name}
                  </T>
                  <CopyButton text={text} renderContent={() => 'Копировать пример использования'} />
                </td>
                <td data-label="Props">
                  <FontDesc>
                    <tbody>
                      <tr>
                        <td>Шрифт:</td>
                        <td>{TYPOGRAPHY.fontFamily}</td>
                      </tr>
                      {item.style.map((st: any, index: number) => (
                        <tr key={index}>
                          <td>{st.name}</td>
                          <td>{st.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </FontDesc>
                </td>
                <td data-label="Manual">{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Separator />
      <T font="Header/H1" as="p">
        Old version
      </T>
      <Table>
        <thead>
          <tr>
            <th data-label="Style">Стиль</th>
            <th data-label="Props">Характеристики</th>
            <th data-label="Manual">Применение</th>
          </tr>
        </thead>
        <tbody>
          {FONTS.map((item: any, index: number) => {
            const text = `
            import { T, typography } from '@vtb/ui-kit3';
            import styled from 'styled-components';

            const Paragraph = styled.p\`
              \${typography['${item.name}']}
              color: #2B313B;
            \`

            const Example = () => {
              return(
                <>
                  <T font='${item.name}'>Использование StyledComponent</T>
                  <Paragraph>Использование ThemedCssFunction</Paragraph>
                </>
              );
             }
            `;
            return (
              <tr key={index}>
                <td data-label="Style">
                  <T font={item.name} as="div">
                    {item.name}
                  </T>
                  <CopyButton text={text} renderContent={() => 'Копировать пример использования'} />
                </td>
                <td data-label="Props">
                  <FontDesc>
                    <tbody>
                      <tr>
                        <td>Шрифт:</td>
                        <td>{TYPOGRAPHY.fontFamily}</td>
                      </tr>
                      {item.style.map((st: any, index: number) => (
                        <tr key={index}>
                          <td>{st.name}</td>
                          <td>{st.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </FontDesc>
                </td>
                <td data-label="Manual">{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};
export const Fonts = Template.bind({});
Fonts.args = {};
Fonts.storyName = 'Список стилей';
Fonts.parameters = {
  docs: {
    description: {
      story: `Ниже представлены таблицы стилей типографики, старая и обновленная версия, на которую постепенно будет произведен перевод библиотеки.
      Каждый из этих стилей можно передавать в компонент T в виде параметра font и в качестве результата получать StyledComponent с
      необходимыми стилями. \n\nТакже возможен случай, когда пользователю нужен css миксин (ThemedCssFunction) с определенными
      стилями типографики для последующего использования этого миксина в своих styled-компонентах.
      В таком случае можно воспользоваться объектом typography, экспортируемым из нашей библиотеки. Ключами
      этого объекта служат названия стилей типографики, а значениями css миксины.\n\nРядом с названием стиля типографики
      находится иконка копирования, по нажатию на которую можно будет скопировать
      пример кода для каждого стиля в отдельности.`,
    },
  },
};
