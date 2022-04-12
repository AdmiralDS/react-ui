import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { FONTS, NEW_FONTS } from './storyDescriptions';
import { TYPOGRAPHY, typography } from '#/components/Typography';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import { Tooltip } from '#/components/Tooltip';
import { LIGHT_THEME } from '#/components/themes';
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
  title: 'Example/T',
  decorators: [withDesign],
  component: Text,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=10%3A6409',
    },
  },
} as unknown as ComponentMeta<typeof T>;

const BlueText = styled(T)`
  color: ${(p) => p.theme.color.basic.primary};
`;

const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color.basic.tertiary};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color.status.warn};
`;

const Wrapper = styled.div`
  overflow: scroll;
`;

const Table = styled.table`
  ${typography['Additional/S']}
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  color: ${({ theme }) => theme.color.text.primary};

  th,
  td[data-label] {
    text-align: left;
    padding: 8px 60px 8px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.color.basic.tertiary};
  }
  th {
    ${typography['Main/M']}
    color: ${({ theme }) => theme.color.text.secondary};
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
    color: ${({ theme }) => theme.color.text.secondary};
    padding-right: 16px;
  }
`;

const CopyButton = ({ text }: { text: string }) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
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
    <Tooltip renderContent={() => 'Копировать пример использования'} style={{ display: 'flex' }}>
      <CopyOutline width={16} height={16} onClick={copyToClipboard} fill={theme.color.text.primary} />
    </Tooltip>
  );
};

const Template1: ComponentStory<typeof T> = () => {
  return (
    <>
      <BlueText font={'Additional/M'} as={'a'} href={'https://'}>
        Это ссылка со стилем Additional/M, цветом шрифта Primary.
      </BlueText>
      <br />
      <T font="Additional/L" as="h3" cssMixin={OrangeColor}>
        Это заголовок третьего уровня и стилем Additional/L.
      </T>
      <CustomParagraph font="Main/S" as="p">
        Это параграф со стилем Main/S и цветом шрифта Tertiary.
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
            import { T, typography } from '@admiral-ds/react-ui';
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
                  <CopyButton text={text} />
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
            import { T, typography } from '@admiral-ds/react-ui';
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
                  <CopyButton text={text} />
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
