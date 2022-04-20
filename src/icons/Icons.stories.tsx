import { Tooltip } from '#src/components/Tooltip';
import { typography } from '#src/components/Typography';
import { withDesign } from 'storybook-addon-designs';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import metadata from '@admiral-ds/icons/metadata.json';
import { ReactComponent as CopyOutline } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import * as CardsIcons from './IconComponents-cards';
import * as CategoryIcons from './IconComponents-category';
import * as CommunicationIcons from './IconComponents-communication';
import * as DocumentsIcons from './IconComponents-documents';
import * as FinanceIcons from './IconComponents-finance';
import * as FlagsIcons from './IconComponents-flags';
import * as LocationIcons from './IconComponents-location';
import * as PaymentIcons from './IconComponents-payment';
import * as RedactIcons from './IconComponents-redact';
import * as SecurityIcons from './IconComponents-security';
import * as ServiceIcons from './IconComponents-service';
import * as SystemIcons from './IconComponents-system';

const Title = styled.div`
  ${typography['Main/XS-bold']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin-bottom: 20px;
`;

const Text = styled.div`
  ${typography['Additional/M']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const Code = styled.code`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const Panel = styled.pre`
  border: 1px dashed gray;
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 05']};
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

const IconCard = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const IconName = styled.div`
  margin-top: 16px;
  ${typography['Caption/XS']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  display: flex;
  gap: 8px;
`;

const CopyButton = ({ text }: { text: string }) => {
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
    <Tooltip renderContent={() => 'Копировать импорт'}>
      <CopyOutline width={16} height={16} onClick={copyToClipboard} />
    </Tooltip>
  );
};

const Category = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <CategoryWrapper>
      <Title>{label}</Title>
      <IconsWrapper>{children}</IconsWrapper>
    </CategoryWrapper>
  );
};

const getIcons = (category: string, pack: any) => {
  return (metadata as Record<string, any>)[category].map((iconMetaInfo: any) => ({
    ...iconMetaInfo,
    Component: pack[iconMetaInfo.name],
  }));
};

const CATEGORIES = [
  { label: 'Cards', value: 'cards', icons: getIcons('cards', CardsIcons) },
  { label: 'Category', value: 'category', icons: getIcons('category', CategoryIcons) },
  { label: 'Communication', value: 'communication', icons: getIcons('communication', CommunicationIcons) },
  { label: 'Documents', value: 'documents', icons: getIcons('documents', DocumentsIcons) },
  { label: 'Finance', value: 'finance', icons: getIcons('finance', FinanceIcons) },
  { label: 'Flags', value: 'flags', icons: getIcons('flags', FlagsIcons) },
  { label: 'Payment', value: 'payment', icons: getIcons('payment', PaymentIcons) },
  { label: 'Redact', value: 'redact', icons: getIcons('redact', RedactIcons) },
  { label: 'Location', value: 'location', icons: getIcons('location', LocationIcons) },
  { label: 'Security', value: 'security', icons: getIcons('security', SecurityIcons) },
  { label: 'Service', value: 'service', icons: getIcons('service', ServiceIcons) },
  { label: 'System', value: 'system', icons: getIcons('system', SystemIcons) },
];

export default {
  title: 'Icons/Icons',
  decorators: [withDesign],
  component: CopyOutline,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585',
    },
  },
} as Meta;

const Template: Story = () => (
  <>
    <Title style={{ fontWeight: 400 }}>
      Иконки — гафические символы используемые для представления действий, идей или объектов. Позволяют быстро
      передавать смысл отображаемой информации или привлекать к ней дополнительное внимание.
    </Title>
    {CATEGORIES.map(({ label, icons }) => (
      <Category key={label} label={label}>
        {icons.map(
          ({ Component, name, path }: { Component: React.ElementType; name: string; path: string }, index: number) => (
            <IconCard key={name + index}>
              <Component width={24} height={24} />
              <IconName>
                {name} <CopyButton text={`import { ReactComponent as ${name} } from '@admiral-ds/icons/${path}';`} />
              </IconName>
            </IconCard>
          ),
        )}
      </Category>
    ))}
  </>
);

const Template2: Story = () => {
  const exm = `
  config.module.rules.unshift({
    test: /\\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { dimensions: false, svgProps: { focusable: '{false}' } } }],
  });
  `;
  const svgModule = `
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  `;
  const user1Exm = `
  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  `;
  const user2Exm = `
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
  
    export { ReactComponent };
    export default content;
  }
  `;
  const user3Exm = `
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    export default ReactComponent;
  }
  `;
  return (
    <Text style={{ fontWeight: 400 }}>
      В наших компонентах используется пакет иконок Admiral 2.0.
      <ul>
        <li>
          <a href="https://www.figma.com/file/8sqIh7WvDuF1nc6Qo2BeCA/04-%F0%9F%9A%A7-%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-Web-2.0?node-id=6681%3A281585">
            Макеты в Figma
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@admiral-ds/icons">Пакет в npm</a>
        </li>
      </ul>
      1) В проекте может понадобиться настройка загрузчиков svg-иконок. Например, в create-react-app уже изначально для
      webpack настроены загрузчики svg иконок. В нашем storybook настройки webpack для работы с иконками выглядят так:
      <Panel>
        <Code>{exm}</Code>
      </Panel>
      Вот несколько полезных ссылок, касающихся настройки проектов для работы с иконками:
      <ul>
        <li>
          <a href="https://react-svgr.com/docs/getting-started/">Svgr - getting started</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@svgr/webpack">Svgr - npm</a>
        </li>
      </ul>
      2) Также в проектах, использующих TypeScript, при работе с иконками может понадобиться настройка тайпинга
      (создание файла деклараций custom.d.ts и включение его в tsconfig.json). В нашем проекте для этого используется
      следующий файл svg.d.ts:
      <Panel>
        <Code>{svgModule}</Code>
      </Panel>
      Вот еще несколько способов написания подобного файла (примеры от пользователей библиотеки):
      <Panel>
        <Code>{user1Exm}</Code>
      </Panel>
      <Panel>
        <Code>{user2Exm}</Code>
      </Panel>
      <Panel>
        <Code>{user3Exm}</Code>
      </Panel>
      Ряд полезных ссылок по данной теме:
      <ul>
        <li>
          <a href="https://webpack.js.org/guides/typescript/#importing-other-assets">
            Webpack - Importing Other Assets
          </a>
        </li>
        <li>
          <a href="https://duncanleung.com/typescript-module-declearation-svg-img-assets/">
            TypeScript Module Declaration for SVG Assets
          </a>
        </li>
      </ul>
    </Text>
  );
};

export const Icons = Template.bind({});
Icons.args = {};
Icons.storyName = 'Список иконок';

export const Loaders = Template2.bind({});
Loaders.args = {};
Loaders.storyName = 'Использование иконок';
