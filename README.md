# @admiral-ds/react-ui

Библиотека компонентов React, основанная на дизайн системе Admiral 2.1

## Содержимое

- [Соглашения и внесение изменений](CONTRIBUTING.md)
- [Установка](#Установка)
- [Подключение](#Подключение)

## Установка

@admiral-ds/react-ui требует зависимостей :

1. `styled-components > 5.1.0`
2. `react > 16.0.0`
3. `react-dom > 16.0.0`

   Можно воспользоваться готовым темплейтом с настроенной библиотекой [https://github.com/AdmiralDS/web-app-vite-admiral](https://github.com/AdmiralDS/web-app-vite-admiral)
   или создать проект снуля и установить библиотеку:

```shell
$ npm create vite@latest my-web-app -- --template react-ts
$ cd my-web-app
$ npm install
$ npm i @admiral-ds/react-ui
$ npm run dev
```

## Подключение

Для правильной работы @admiral-ds/react-ui требуется использовать `<ThemeProvider>`, `<FontsVTBGroup />` и `<DropdownProvider>`, их **рекомендуется** подключать в корне проекта:

main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
```

App.tsx

```tsx
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// Импорт иконки как URL ресурс
import reactLogo from './assets/react.svg';
import { T, Link } from '@admiral-ds/react-ui';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* импорт иконки через директорию assets. Доступ к этой директории есть и у index.html */}
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <T font="Subtitle/Subtitle 1" as="p">
          Edit <code>src/App.tsx</code> and save to test HMR
        </T>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Link appearance="primary" href="https://admiralds.github.io/react-ui" target="_blank" rel="noopener noreferrer">
        Admiral Storybook
        <Divider />
      </Link>
    </>
  );
}

export default App;
```

Если ваш проект НЕ использует _create-react-app_ , то для правильной работы _webpack_ вам потребуется настройка file-loader,
и [SVGR](https://github.com/gregberge/svgr/tree/main/packages/webpack).

```shell
$ npm i -D @svgr/webpack
```

webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AppConfig = require('./src/app.config');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.bundle.js',
    publicPath: AppConfig.webPackPublicPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gif|svg|jpg|png|otf|ttf)$/,
        use: 'file-loader',
      },
      {
        test: /\.(js|ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
  },
};
```
