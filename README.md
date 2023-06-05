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

Создать новый проект и установить библиотеку:

```shell
$ npm create react-app@latest -- my-web-app --template typescript
$ cd my-web-app
$ npm i @admiral-ds/react-ui
$ npm i -D @types/styled-components
```

## Подключение

Для правильной работы @admiral-ds/react-ui требуется использовать `<ThemeProvider>`, `<FontsVTBGroup />` и `<DropdownProvider>`, их **рекомендуется** подключать в корне проекта:

index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { DARK_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DARK_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
App.tsx
```tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { T, Link } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg'

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <T font='Subtitle/Subtitle 1' as='p'>
          Edit <code>src/App.tsx</code> and save to reload.
        </T>
        <a
          className="App-link"
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучай React
        </a>
        или
        <Link appearance="primary"
          href="https://admiralds.github.io/react-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admiral Storybook
          <Divider />
          <ArrowRightOutline width={20} />
        </Link>
      </header>
    </div>
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
        publicPath: AppConfig.webPackPublicPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/favicon.ico',
            template: 'src/index.html'
        })
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
                use: "file-loader",
            },
            {
                test: /\.(js|ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        hot: true
    }
};
```
