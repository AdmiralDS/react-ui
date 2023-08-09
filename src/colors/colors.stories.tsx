import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled, { useTheme, ThemeProvider } from 'styled-components';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import { TooltipHoc, typography, LIGHT_THEME, DARK_THEME, Table } from '@admiral-ds/react-ui';
import type { Color } from '@admiral-ds/react-ui';
import { COLORS, COLORS_DESC, VERSIONS_ROWS, VERSION_COLUMNS, ColorCircle } from './colorsDescription';

const Wrapper = styled.div`
  min-width: fit-content;
`;
const Title = styled.div`
  ${typography['Header/H4']}
  margin-bottom: 8px;
`;
const SubTitle = styled.div`
  margin-bottom: 20px;
  max-width: 800px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${typography['Body/Body 2 Long']}
`;
const ColorRow = styled.div`
  display: flex;
  & > * {
    background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
    color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  }
`;
const ColorComponent = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 40px 32px;
`;
const ColorDescription = styled.div`
  display: flex;
  flex: 0 0 auto;
  box-sizing: border-box;
  width: 280px;
  margin-right: 104px;
`;
const ColorProps = styled.div`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  margin-right: 16px;
  white-space: nowrap;
`;
const ColorProp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const CopyIcon = React.forwardRef<HTMLDivElement, { text: string }>(({ text }, ref) => {
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
      <CopyOutline width={16} height={16} onClick={copyToClipboard} />
    </CopyOutlineWrapper>
  );
});
const CopyButton = TooltipHoc(CopyIcon);

const Category = ({ categoryName }: { categoryName: string }) => {
  const theme = useTheme() || LIGHT_THEME;
  const colors = [...Object.keys(COLORS[categoryName])] as Array<keyof Color>;
  const contrastMode = theme.name;
  return (
    <CategoryWrapper>
      <Title>{categoryName == 'Opacity' ? 'Overlay opacity' : categoryName}</Title>
      <SubTitle>{COLORS_DESC[categoryName]}</SubTitle>
      {colors.map((colorName: keyof Color) => {
        return (
          <ThemeProvider
            theme={
              colorName === 'Opacity/Dark Static Hover' ||
              colorName === 'Opacity/Dark Static Focus' ||
              colorName === 'Opacity/Dark Static Press'
                ? DARK_THEME
                : theme
            }
            key={colorName}
          >
            <ColorRow>
              <ColorComponent>
                <ColorCircle
                  $size={56}
                  $color={colorName}
                  border={theme.color[colorName] === '#FFFFFF' || theme.color[colorName] === '#121316'}
                  style={{ marginRight: '48px' }}
                />
                <ColorDescription>{COLORS[categoryName][colorName].description}</ColorDescription>
                <ColorProps>
                  <ColorProp>Token:</ColorProp>
                  <ColorProp>Name:</ColorProp>
                  <ColorProp>Hex:</ColorProp>
                  <ColorProp>Contrast:</ColorProp>
                </ColorProps>
                <ColorProps style={{ minWidth: '200px' }}>
                  <ColorProp>
                    {colorName}
                    <CopyButton renderContent={() => 'Копировать цветовой токен'} text={colorName} />
                  </ColorProp>
                  <ColorProp>{COLORS[categoryName][colorName].name}</ColorProp>
                  <ColorProp>{theme.color[colorName]}</ColorProp>
                  <ColorProp>{COLORS[categoryName][colorName].contrast[contrastMode]}</ColorProp>
                </ColorProps>
              </ColorComponent>
            </ColorRow>
          </ThemeProvider>
        );
      })}
    </CategoryWrapper>
  );
};

const Desc = styled.div`
  ${typography['Body/Body 1 Long']}
`;
const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    В данной таблице представлена вся цветовая палитра дизайн-системы Адмирал 2.1. Все цвета делятся на следующие
    группы: Базовые (Neutral и Primary), Специальные (статичные цвета), Status (статустные цвета), Opacity (прозрачности
    оверлеев) и Additional Colors (цвета для чартов и графики). В таблице обозначены наиболее частые сценарии
    использования оттенков. Цвета с редким использованием могут не использоваться в компонентах, но присутствуют в
    палитре для возможного использования в кастомных решениях, будущих компонентах или графики.
    <Separator />
    Цветовая палитра дизайн-системы Адмирал состоит из двух тем – Light и Dark. Для переключения тем используйте иконку
    месяца в хедере страницы.
  </Desc>
);

export default {
  title: 'Colors/Colors',
  decorators: undefined,
  component: CopyOutline,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=161321-128406&t=JL9szsmkpF2D3Qo4-4',
      },
    ],
  },
} as Meta;

const Template: StoryFn = () => (
  <Wrapper>
    {[...Object.keys(COLORS)].map((item) => {
      return <Category key={item} categoryName={item} />;
    })}
  </Wrapper>
);

const Template2: StoryFn = () => <Table rowList={VERSIONS_ROWS} columnList={VERSION_COLUMNS} greyHeader />;

export const Colors = {
  render: Template,
  args: {},
  name: 'Группы цветов и их назначение',
};

export const Themes = {
  render: Template2,
  args: {},
  name: 'Сопоставление стилей цветов 2.0 и 2.1',
};
