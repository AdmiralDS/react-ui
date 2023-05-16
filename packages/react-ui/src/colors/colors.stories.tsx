import { TooltipHoc } from '#src/components/TooltipHOC';
import { typography } from '#src/components/Typography';
import { withDesign } from 'storybook-addon-designs';
import * as React from 'react';
import type { Meta, Story } from '@storybook/react';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import { COLOR } from '#src/components/themes/light/color';
import type { Color } from '../components/themes/common';
import { LIGHT_THEME, DARK_THEME } from '#src/components/themes';
import { COLORS, VERSIONS_ROWS, VERSION_COLUMNS } from './colorsDescription';
import { useDarkMode } from 'storybook-dark-mode';
import { Table } from '..';

const Title = styled.div`
  ${typography['Header/H4']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin-bottom: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 05']};
  padding: 32px 0;
  border-radius: 8px;
  & svg {
    flex-shrink: 0;
    *[fill^='#62'],
    *[fill^='#2B'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
  justify-content: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const CopyOutlineWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const ColorRow = styled.div`
  display: flex;
`;

const ColorComponent = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 800px;
  box-sizing: border-box;
  padding: 40px 32px;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${typography['Body/Body 2 Long']}
  background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
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

const ColorCircle = styled.div<{ $color: keyof Color; border?: boolean }>`
  display: flex;
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme, $color }) => theme.color[$color]};
  ${({ border, theme }) => border && `border: 1px solid ${theme.color['Neutral/Neutral 20']};`}
  margin-right: 48px;
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

const ColorProperties = () => (
  <ColorProps>
    Token:
    <br />
    Name:
    <br />
    Hex:
    <br />
    Contrast:
  </ColorProps>
);

const Category = ({ categoryName }: { categoryName: string }) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const colors = getColors(categoryName);
  return (
    <CategoryWrapper>
      <Title>{categoryName}</Title>
      {colors.map((colorName: keyof Color) => {
        return (
          <ColorRow>
            <ColorComponent>
              <ColorCircle
                $color={colorName}
                border={theme.color[colorName] === '#FFFFFF' || theme.color[colorName] === '#121316'}
              />
              <ColorDescription>{COLORS[categoryName][colorName].description}</ColorDescription>
              <ColorProps>
                Token:
                <br />
                Name:
                <br />
                Hex:
                <br />
                Contrast:
              </ColorProps>
              <ColorProps>
                {colorName}
                <br />
                {COLORS[categoryName][colorName].name}
                <br />
                {theme.color[colorName]}
                <br />
                {COLORS[categoryName][colorName].contrast}
              </ColorProps>
            </ColorComponent>
          </ColorRow>
        );
      })}
    </CategoryWrapper>
  );
};

const getColorCategories = () => {
  const result = Object.keys(COLOR).map(function (item) {
    const slashIndex = item.indexOf('/');
    const categoryName = item.slice(0, slashIndex);
    return categoryName;
  });
  return [...new Set(result)];
};

const getColors = (match: string): any => {
  return Object.keys(COLOR).filter(function (item) {
    return item.indexOf(match) === 0;
  });
};

const CATEGORIES = getColorCategories();

export default {
  title: 'Colors/Colors',
  decorators: [withDesign],
  component: CopyOutline,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=161321-128406&t=JL9szsmkpF2D3Qo4-4',
      },
    ],
  },
} as Meta;

const Template: Story = () => (
  <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
    <IconsWrapper>В описании цвета указаны наиболее частые сценарии его использования</IconsWrapper>
    {CATEGORIES.map((item) => {
      return <Category key={item} categoryName={item} />;
    })}
  </ThemeProvider>
);

const Template2: Story = () => (
  <>
    <Table rowList={VERSIONS_ROWS} columnList={VERSION_COLUMNS} greyHeader />
  </>
);

export const ColorsThemes = Template.bind({});
ColorsThemes.args = {};
ColorsThemes.storyName = 'Список цветов';

export const ColorsThemes2 = Template2.bind({});
ColorsThemes2.args = {};
ColorsThemes2.storyName = 'Сопоставление стилей цветов 2.0 и 2.1';
